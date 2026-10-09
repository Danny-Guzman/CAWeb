<?php
/**
 * CAWeb Icon Font Library
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_filter( 'et_pb_font_icon_symbols', 'caweb_et_pb_font_icon_symbols' );

/**
 * Merger of Divi and CAWeb Icon Font Library
 * This filter is applied by Divi
 *
 * @see Divi includes/builder/functions.php Line 405
 * @version 4.0.7
 * @param  array $divi_symbols Array of Divi Symbols.
 *
 * @return array
 */
function caweb_et_pb_font_icon_symbols( $divi_symbols = array() ) {
	$icons = caweb_symbols( -1, '', '', false );
	return array_values( $icons );
}


if ( ! function_exists( 'et_pb_get_extended_font_icon_symbols' ) ) :
	/**
	 * CAWeb Overwrite of Divi Icons
	 * 
	 * Returns full list of all icons used in the Divi with ['search_terms'],
	 * unicode icon value ['unicode'], icon name ['name']
	 * groups in which the icon is included ['styles'],
	 * bool flag which determined is this icon a divi icon or FontAwesome icon['is_divi_icon'].
	 *
	 * @since ?
	 *
	 * @return array
	 */
	function et_pb_get_extended_font_icon_symbols() {
		$cache_key = 'et_pb_get_extended_font_icon_symbols';
		if ( ! et_core_cache_has( $cache_key ) ) {
			$full_icons_list_path = CAWEB_ABSPATH . '/assets/full_icons_list.json';
			if ( file_exists( $full_icons_list_path ) ) {
				// phpcs:disable WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents -- Can't use wp_remote_get() for local file
				$icons_data = json_decode( file_get_contents( $full_icons_list_path ), true );

				// phpcs:enable
				if ( JSON_ERROR_NONE === json_last_error() ) {
					et_core_cache_set( $cache_key, $icons_data );
					return $icons_data;
				}
			}
			et_wrong( 'Problem with loading the icon data on this path: ' . $full_icons_list_path );
		} else {
			return et_core_cache_get( $cache_key );
		}
	}
endif;

/**
 * CA.gov Icon Library List
 *
 * @param  int    $index Icon index.
 * @param  string $icon_code Icon code.
 * @param  string $icon_name Icon name.
 * @param  bool   $extended Whether to include extended icons.
 *
 * @return array
 */
function caweb_symbols( $index = -1, $icon_code = '', $icon_name = '', $extended = true ) {
	$icons   = et_pb_get_extended_font_icon_symbols();
	$symbols = array();
	$fa      = array();
	foreach ( $icons as $i => $icon ) {
		$glyph = isset( $icon['glyph'] ) ? $icon['glyph'] : $icon['name'];

		// if symbol was not already added.
		if ( ! isset( $symbols[ $glyph ] ) ) {
			$symbols[ $glyph ] = $icon;

			// if not extended, unicode is set, and remove font awesome icons.
			if ( ! $extended && isset( $icon['unicode'] ) ) {
				$symbols[ $glyph ] = $icon['unicode'];
			}
		}
	}

	if ( 0 <= $index ) {
		$values = array_values( $symbols );
		return isset( $values[ $index ] ) ? $values[ $index ]['glyph'] : '';
	}

	if ( ! empty( $icon_code ) ) {
		$name = '';
		foreach ( $symbols as $n => $icon ) {

			if ( $extended ) {
				if ( $icon_code === $icon['unicode'] ) {
					$name = $n;
					break;
				}
			} elseif ( $icon_code === $icon ) {
				$name = $n;
				break;
			}
		}

		return $name;
	}

	if ( ! empty( $icon_name ) ) {
		if ( isset( $symbols[ $icon_name ] ) ) {
			return $extended ? $symbols[ $icon_name ]['unicode'] : $symbols[ $icon_name ];
		}

		return '';
	}

	return $symbols;
}
