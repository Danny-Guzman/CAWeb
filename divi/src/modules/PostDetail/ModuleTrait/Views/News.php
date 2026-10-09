<?php
/**
 * PostDetail::News::render_news()
 *
 * @package CAWeb\Modules\PostDetail
 * @since ??
 */

namespace CAWeb\Modules\PostDetail\ModuleTrait\Views;

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
	* @param array $args Block attributes that were saved by VB.
	* @param string $content
	* @param boolean $showFeaturedImage
	* @param boolean $featuredImageAlignment
	* @return array HTML rendered of PostDetail module.
	*/
	public static function render_news( $args, $content, $showFeaturedImage, $featuredImageAlignment ) {
		$attrs = ModuleUtils::get_attr_value(array(
			'attr' => $args['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		$advanced = ModuleUtils::get_attr_value(array(
			'attr' => $args['advanced'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		$header = array_filter(array(
			! empty( $attrs['author'] ) ? "Author: {$attrs['author']}" : '',
			! empty( $attrs['publish_date'] ) ? sprintf( 'Published: %s', gmdate(
				$attrs['publish_date_custom_format'] ?? 'D, n/j/Y g:i a',
				strtotime( $attrs['publish_date'] )
			) ) : '',
			! empty( $attrs['location'] ) ? $attrs['location'] : ''
		));

		return array_filter( array(
			! empty( $header ) ? HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'header'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => HTMLUtility::render(array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'published'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],
					'children' => HTMLUtility::render(array(
						'tag' => 'p',
						'childrenSanitizer' => [self::class, 'sanitize_html'],
						'children' => array_map(fn($item) => "<span class=\"d-block\">{$item}</span>", $header)
					))
				))
			)) : '',
			$showFeaturedImage ? self::get_the_post_thumbnail( null, array(150,100), array( 'class' => 'float-start mb-3 me-3' ) ) : '',
			HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'clearfix'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],
				'children' => $content
			))
		));
		
	}

}
