<?php
/**
 * PostList::Events::render_events()
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

trait Events {

	/**
	 * Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $args Block attributes that were saved by VB.
	 *
	 * @return string HTML rendered of PostList module.
	 */
	public static function render_events( $args ) {
		$displayExcerpt = $args['displayExcerpt'] ?? 'on';
		$displayImage = $args['displayImage'] ?? 'on';
		$post = $args['post'] ?? null;
		$shortcode = $args['shortcode'] ?? array();

		$excerpt = 'on' === $displayExcerpt ? self::get_excerpt( $shortcode['content'] ?? '', 15, $post['id'] ?? -1) : '';
		$excerpt = ! empty( $excerpt ) ? sprintf( '<div class="description">%1$s</div>', $excerpt ) : '';

		$hasPostThumbnail = has_post_thumbnail( $post['id'] ?? null );

		$image = '';

		if( $hasPostThumbnail && 'on' === $displayImage ){
			$image = HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'thumbnail float-start w-auto'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => array(
					self::get_the_post_thumbnail( $post['id'] ?? null, array(80, 80) )
				)
			));
		}

		$title = HTMLUtility::render(array(
			'tag' => 'h5',
			'attributes' => array(
				'class' => 'pb-0'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				HTMLUtility::render(array(
					'tag' => 'a',
					'attributes' => array(
						'class' => 'text-decoration-dotted',
						'target' => '_blank',
						'href' => $post['url'] ?? '#'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => array(
						$post['title'] ?? '',
					)
				))
			)
		));

		$date = ! empty( $shortcode['event_start_date'] ) ? 
			HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'start-date'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => HTMLUtility::render(array(
					'tag' => 'time',
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => gmdate( 'D, n/j/Y g:i a', strtotime( $shortcode['event_start_date'] ) )
				))
			)) : '';

		$info = HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => array(
					'info',
					! empty ($image) ? 'ps-5 ms-5 float-none clearfix' : ''
				)
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				$title,
				$excerpt,
				$date,
			)
		));

		

		return HTMLUtility::render(array(
			'tag' => 'article',
			'attributes' => array(
				'class' => 'event-item bg-light p-3 mb-3'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				$image,
				$info,
			)
		));
		
	}

}
