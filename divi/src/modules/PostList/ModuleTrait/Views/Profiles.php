<?php
/**
 * PostList::Profiles::render_profiles()
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

trait Profiles {

	/**
	 * Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $args Block attributes that were saved by VB.
	 *
	 * @return string HTML rendered of PostList module.
	 */
	public static function render_profiles( $args ) {
		$displayExcerpt = $args['displayExcerpt'] ?? 'on';
		$displayImage = $args['displayImage'] ?? 'on';
		$post = $args['post'] ?? null;
		$shortcode = $args['shortcode'] ?? array();

		$excerpt = 'on' === $displayExcerpt ? self::get_excerpt( $shortcode['content'] ?? '', 30, $post['id'] ?? -1) : '';
		$excerpt = ! empty( $excerpt ) ? sprintf( '<div class="description">%1$s</div>', $excerpt ) : '';

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
					self::get_the_post_thumbnail( $post['id'] ?? null, array(75, 75) )
				)
			));
		}

		$title = HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => array(
					'header',
					$hasPostThumbnail ? 'ms-5 ps-5' : 'ms-0'
				)
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				HTMLUtility::render(array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'title'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => array(
						HTMLUtility::render(array(
							'tag' => 'a',
							'attributes' => array(
								'class' => 'text-decoration-none',
								'href' => $post['url'] ?? '#'
							),
							'childrenSanitizer' => [self::class, 'sanitize_html'],	
							'children' => array_filter( array(
								! empty( $shortcode['profile_name_prefix'] ) ? "{$shortcode['profile_name_prefix']} " : '',
								! empty( $shortcode['profile_name'] ) ? $shortcode['profile_name'] : '',
								! empty( $shortcode['profile_career_title'] ) ? ", {$shortcode['profile_career_title']} " : '',
							))
						))
					)
				))
			)
		));

		$body = HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => array(
					'body',
					$hasPostThumbnail ? 'ms-5 ps-5' : 'ms-0'
				)
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => implode('<br />', array_filter( array(
				! empty( $shortcode['profile_career_position'] ) ? $shortcode['profile_career_position'] : '',
				! empty( $shortcode['profile_career_line_1'] ) ? $shortcode['profile_career_line_1'] : '',
				! empty( $shortcode['profile_career_line_2'] ) ? $shortcode['profile_career_line_2'] : '',
				! empty( $shortcode['profile_career_line_3'] ) ? $shortcode['profile_career_line_3'] : '',
			))) 
		));

		return HTMLUtility::render(array(
			'tag' => 'article',
			'attributes' => array(
				'class' => 'profile-item bg-light p-3 mb-3'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				$image,
				$title,
				$body
			)
		));
		
	}

}
