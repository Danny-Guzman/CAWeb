<?php
namespace CAWeb\Modules\Utils;

use CAWeb\Modules\Utils\DepInterface;

use ET\Builder\Framework\Utility\HTMLUtility;

use DOMDocument;

// class Module  {
abstract class Module implements DepInterface {
	public static $caweb_google_maps_embed_api_key = 'AIzaSyCtq3i8ME-Ab_slI2D8te0Uh2PuAQVqZuE';

    /**
	 * Returns address in CSV format
	 *
	 * @param  array|string $addr Address to format.
	 * @return string
	 */
    public static function get_address( $addr ){
        if ( empty( $addr ) ) {
			return;
		} elseif ( is_string( $addr ) ) {
			$addr = preg_split( '/,/', $addr );
		}

		$addr = array_filter( $addr );
		$addr = implode( ', ', $addr );

		return $addr;
    }

	/**
	 * Create a GoogleMap Place Link/Embedded IFrame
	 *
	 * @param  array|string $addr Address to format.
	 * @param  mixed        $embed Whether to create a link or embedded iframe.
	 * @param  mixed        $target The links target, default _blank.
	 * @param  mixed        $classes Class for the link.
	 * @return string
	 */
    public static function render_address_map_link( $addr, $embed = false, $target = '_blank', $classes = '' ) {
		$addr = self::get_address( $addr );

        // if no address, return nothing.
        if ( empty( $addr ) ) {
            return '';
        }

        // if not embed, build link.
        if ( ! $embed ) {
            // Build link attributes.
            $attributes = array(
                'href' => sprintf( 'https://www.google.com/maps/place/%s', esc_attr( $addr ) ),
                'target' => esc_attr( $target ),
            );

            // Add classes if provided.
            if ( ! empty( $classes ) ) {
                $classes = is_array( $classes ) ? implode( ' ', $classes ) : $classes;

                $attributes['class'] = esc_attr( is_array( $classes ) ? implode( ' ', $classes ) : $classes );
            }

            // Render the anchor tag using HTMLUtility.
            return HTMLUtility::render( array(
                'tag' => 'a',
                'attributes' => $attributes,
                'children' => array( esc_html( $addr ) ),
            ) );

        // else embed.
        }else{
            // Render the iframe tag using HTMLUtility.
            return HTMLUtility::render( array(
                'tag' => 'iframe',
                'attributes' => array(
                    'title' => sprintf( 'IFrame for Address %s', esc_attr( $addr ) ),
                    'src' => sprintf( 'https://www.google.com/maps/embed/v1/place?q=%1$s&zoom=10&key=%2$s', esc_attr( $addr ), esc_attr( self::$caweb_google_maps_embed_api_key ) ),
                ),
            ) );
        }
        
	}

    /**
	 * Create icon span
	 *
	 * @param  string $icon Icon to render.
	 * @param  string $classes Classes for the span.
	 * @param  string $styles Styles for the span.
	 * @return string
	 */
	public static function get_icon_span( $icon, $classes = '', $styles = '' ) {
		// $icon = $this->process_icon( $icon );

		if ( empty( $icon ) ) {
			return;
		}

		$classes = is_array( $classes ) ? implode( ' ', $classes ) : $classes;
		$classes = ! empty( $classes ) ? " $classes" : '';

		$styles = is_array( $styles ) ? implode( ';', $styles ) : $styles;
		$styles = ! empty( $styles ) ? " style=\"$styles\"" : '';

		return sprintf( '<span class="ca-gov-icon-%1$s%2$s"%3$s></span>', $icon, $classes, $styles );
	}

	/**
	 * Sanitize HTML string using wp_kses with 'post' context.
	 *
	 * @param  string $string String to sanitize.
	 * @return string
	 */
	public static function sanitize_html( $string ) {
		return wp_kses( $string, 'post' );
	}

	/**
	 * CAWeb Get Post Thumbnail
	 *
	 * @see https://developer.wordpress.org/reference/functions/get_the_post_thumbnail/
	 *
	 * @param  int|WP_Post $post Post ID or WP_Post object. Default is global $post.
	 * @param  string      $size Image size to use. Accepts any valid image size, or an array of width and height values in pixels (in that order), default thumbnail.
	 * @param  string      $attr Query string or array of attributes.
	 * @param  array       $pixel_size Allows for overwriting thumbnail size.
	 * @return string|null
	 */
	public static function get_the_post_thumbnail( $post = null, $size = 'thumbnail', $attr = '', $pixel_size = array() ) {
		if ( is_array( $size ) ) {
			if ( empty( $pixel_size ) && 2 === count( $size ) ) {
				$pixel_size = $size;
			}
			$size = 'thumbnail';
		}
		$thumbnail = get_the_post_thumbnail( $post, $size, $attr );

		// if there is no thumbnail return.
		if ( empty( $thumbnail ) ) {
			return;
		}
		// theres is a thumbnail, and the pixel sizes is empty or has more than 2 elements
		// return the thumbnail untouched.
		if ( empty( $pixel_size ) || 2 !== count( $pixel_size ) ) {
			return $thumbnail;
		}

		// remove the current width and height size attributes and
		// srcset attribute.
		$thumbnail = preg_replace( array( '/(width|height)=\"\d*\"\s/', '/(width|height):[\s\d\w]*;?/', '/(srcset)=\".*\"/' ), '', $thumbnail );

		$style = '';
		// remove style attribute.
		if ( preg_match( '/style=\"([\w\d\s]*)\"/', $thumbnail, $matches ) ) {
			$style     = $matches[1];
			$thumbnail = preg_replace( array( '/style=\"([\w\d\s]*)\"/' ), '', $thumbnail );
		}

		$new_img = sprintf( '<img style="width:%1$spx;height:%2$spx;%3$s" ', $pixel_size[0], $pixel_size[1], $style );

		$thumbnail = preg_replace( '/<img /', $new_img, $thumbnail );

		return $thumbnail;
	}

	/**
	 * Return an excerpt from the content of requested length.
	 *
	 * @param  string $con Content to retrieve to excerpt from.
	 * @param  int    $excerpt_length Desired excerpt character length.
	 * @param  int    $p Post ID, default -1.
	 * @return string
	 */
	public static function get_excerpt( $con, $excerpt_length, $p = -1 ) {
		$post_default_excerpt = get_the_excerpt( $p );
		
		if ( ! empty( $post_default_excerpt ) ) {
			return html_entity_decode( sprintf( '<div class="post-%1$s-excerpt">%2$s</div>', $p, $post_default_excerpt ) );
		}
			
		if ( empty( $con ) ) {
			return $con;
		}

		// Regex pattern to find the end of strong, p, span, a and br tags.
		$pattern = '/&lt;\/strong&gt;|&lt;\/p&gt;|&lt;\/span&gt;|&lt;\/a&gt;|&lt;br[\s]+\/&gt;/';

		// Split content by regex pattern.
		$con_array = preg_split( $pattern, htmlentities( wp_strip_all_tags( $con, '<strong><p><span><a><br>' ) ), -1 );
		// Store regex matches.
		preg_match_all( $pattern, htmlentities( wp_strip_all_tags( $con, '<strong><p><span><a><br>' ) ), $match_array, PREG_OFFSET_CAPTURE );

		$excerpt    = array();
		$word_count = 0;

		// Iterate thru content splits.
		foreach ( $con_array as $i => $line ) {
			// strip all tags in the line and return every word.
			$cleaned = explode( ' ', wp_strip_all_tags( html_entity_decode( $line ) ) );

			// if there was a match for the line save it and append.
			$matching_end  = '';
			$matching_end  = isset( $match_array[0][ $i ][0] ) && ! empty( $match_array[0][ $i ][0] ) ? $match_array[0][ $i ][0] : '<br>';
			$excerpt[ $i ] = $line . $matching_end;

			if ( ! empty( $line ) ) {
				$word_count += count( $cleaned );
			}

			if ( $excerpt_length < $word_count ) {
				do {
					--$word_count;

					if ( ! isset( $cleaned[ count( $cleaned ) - 1 ] ) ) {
						break;
					}

					$line = substr( $line, 0, strrpos( $line, ' ' ) );

					$cleaned = array_filter( explode( ' ', wp_strip_all_tags( html_entity_decode( $line ) ) ) );

					if ( $excerpt_length >= $word_count ) {
						$line .= '...';
					}

					$excerpt[ $i ] = $line . $matching_end;
				} while ( $excerpt_length < $word_count );

				break;
			}
		}

		
		$x = new DOMDocument();
		$x->loadHTML( sprintf( '<div class="post-%1$s-excerpt">%2$s</div>', $p, trim( implode( '', $excerpt ) ) ) );
		$element = $x->getElementById( "post-$p-excerpt" );

		return html_entity_decode( $x->saveHTML( $element ) );
	}


}