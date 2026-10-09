<?php
/**
 * PostDetail::FAQs::render_faqs()
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
use The_SEO_Framework\Helper\Format\HTML;

trait FAQs {

	/**
	* Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	*
	* @param array $args Block attributes that were saved by VB.
	* @param string $content
	* @param boolean $showFeaturedImage
	* @param boolean $featuredImageAlignment
	* @return array HTML rendered of PostDetail module.
	*/
	public static function render_faqs( $args, $content, $showFeaturedImage, $featuredImageAlignment ) {
		
		return array(
			HTMLUtility::render(array(
				'tag' => 'div',
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => $content
			))
		);
	}

}
