<?php
/**
 * PostList::News::render_news()
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

trait News {

	/**
	 * Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $args Block attributes that were saved by VB.
	 *
	 * @return string HTML rendered of PostList module.
	 */
	public static function render_news( $args ) {
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
					self::get_the_post_thumbnail( $post['id'] ?? null, array(150, 100) )
				)
			));
		}
		$title = HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => 'headline'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				HTMLUtility::render(array(
					'tag' => 'a',
					'attributes' => array(
						'href' => $post['url'] ?? '#'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => array(
						$post['title'] ?? '',
					)
				))
			)
		));

		$author = ! empty( $shortcode['news_author'] ) ? 
			"Author: {$shortcode['news_author']}" : '';

		$date = ! empty( $shortcode['news_publish_date'] ) ? 
			sprintf( 'Published: <time>%1$s</time>', gmdate( 'M j, Y', strtotime( $shortcode['news_publish_date'] ) ) ) : '';

		$element = ! empty( $author ) || ! empty( $date ) ? 
			HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'published'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => implode('<br />', array_filter( array(
					$author,
					$date
				)))
			)) : '';

		$info = HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => 'info clearfix'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				$title,
				$excerpt,
				$element,
			)
		));

		return HTMLUtility::render(array(
			'tag' => 'article',
			'attributes' => array(
				'class' => 'news-item bg-light p-3 mb-3'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				$image,
				$info,
			)
		));
		
	}

}
