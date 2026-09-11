<?php
/**
 * PostList::Courses::render_courses()
 *
 * @package CAWeb\Modules\PostList
 * @since ??
 */

namespace CAWeb\Modules\PostList\ModuleTrait\Views;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\ModuleUtils\ModuleUtils;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\Packages\Module\Layout\Components\ModuleElements\ModuleElements;
use The_SEO_Framework\Helper\Format\HTML;

trait Courses {

	/**
	 * Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $args Block attributes that were saved by VB.
	 *
	 * @return string HTML rendered of PostList module.
	 */
	public static function render_courses( $args ) {
		$displayExcerpt = $args['displayExcerpt'] ?? 'on';
		$displayImage = $args['displayImage'] ?? 'on';
		$post = $args['post'] ?? null;
		$shortcode = $args['shortcode'] ?? array();

		$excerpt = 'on' === $displayExcerpt ? self::get_excerpt( $shortcode['content'] ?? '', 20, $post['id'] ?? -1) : '';
		$excerpt = ! empty( $excerpt ) ? HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => 'description'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => $excerpt
		)) : '';

		$hasPostThumbnail = has_post_thumbnail( $post['id'] ?? null );

		$image = '';

		if( $hasPostThumbnail && 'on' === $displayImage ){
			$image = HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'thumbnail float-start'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => array(
					self::get_the_post_thumbnail( $post['id'] ?? null, array(80, 80) )
				)
			));
		}

		$header = HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => array(
					'header',
					! empty( $image ) ? 'ps-5 ms-5' : ''
				)
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				// Render title
				HTMLUtility::render(array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'title'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => HTMLUtility::render(array(
						'tag' => 'a',
						'attributes' => array(
							'class' => 'fs-5 text-decoration-dotted',
							'href' => $post['url'] ?? '#'
						),
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => $post['title'] ?? ''
					))
				)),
				// Render date
				HTMLUtility::render(array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'datetime'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => implode(' - ', array_filter( array(
						! empty( $shortcode['course_start_date'] ) ? gmdate( 'M j, Y g:i a', strtotime( $shortcode['course_start_date'] ) ) : '',
						! empty( $shortcode['course_end_date'] ) ? gmdate( 'M j, Y g:i a', strtotime( $shortcode['course_end_date'] ) ) : ''
					)))
				))
			)
		));

		$location = ! empty( $shortcode['course_address'] ) || ! empty( $shortcode['course_city'] ) ||
				! empty( $shortcode['course_state'] ) || ! empty( $shortcode['course_zip'] ) ? 
				implode(', ', array_filter(array(
								$shortcode['course_address'] ?? '',
								$shortcode['course_city'] ?? '',
								$shortcode['course_state'] ?? '',
								$shortcode['course_zip'] ?? ''
							))) : '';

		$body = HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => array(
					'body',
					! empty( $image ) ? 'ps-5 ms-5' : ''
				)
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				$excerpt,
				// Render job location
				! empty( $location ) ? HTMLUtility::render( array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'location'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => HTMLUtility::render(array(
						'tag' => 'span',
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => array(
							'Location: ',
							HTMLUtility::render(array(
								'tag' => 'a',
								'attributes' => array(
									'href' => "https://www.google.com/maps/place/{$location}"
								),
								'childrenSanitizer' => [self::class, 'sanitize_html'],	
								'children' => $location
							))
						)
					))
				)) : '',
			)
		));

		return HTMLUtility::render(array(
			'tag' => 'article',
			'attributes' => array(
				'class' => 'course-item bg-light p-3 mb-3'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				$image,
				$header,
				$body
			)
		));
		
	}

}
