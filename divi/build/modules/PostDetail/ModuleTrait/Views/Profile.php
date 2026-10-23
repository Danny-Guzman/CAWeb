<?php
/**
 * PostDetail::Profile::render_profile()
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

trait Profile {

	/**
	* Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	*
	* @param array $args Block attributes that were saved by VB.
	* @param string $content
	* @param boolean $showFeaturedImage
	* @param boolean $featuredImageAlignment
	* @return array HTML rendered of PostDetail module.
	*/
	public static function render_profile( $args, $content, $showFeaturedImage, $featuredImageAlignment ) {
		$attrs = ModuleUtils::get_attr_value(array(
			'attr' => $args['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		$title = array_filter( array(
			! empty( $attrs['prefix'] ) ? "{$attrs['prefix']} " : '',
			$attrs['name'],
			! empty( $attrs['career']['title'] ) ? ", {$attrs['career']['title']}" : '',

		));

		return array(
			! empty( $title ) ? HTMLUtility::render(array(
				'tag' => 'h1',
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => implode( '', $title ),
			)) : '',
			$showFeaturedImage ? self::get_the_post_thumbnail( 
				null, 
				array(150,100), 
				array( 'class' => "mb-3 $featuredImageAlignment" )
			) : '',
			HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'clearfix'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],
				'children' => $content
			))
		);
		
	}

}
