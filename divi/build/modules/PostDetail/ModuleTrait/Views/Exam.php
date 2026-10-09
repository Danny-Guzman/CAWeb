<?php
/**
 * PostDetail::Exam::render_exam()
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

trait Exam {

	/**
	* Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	*
	* @param array $args Block attributes that were saved by VB.
	* @param string $content
	* @param boolean $showFeaturedImage
	* @param boolean $featuredImageAlignment
	* @return array HTML rendered of PostDetail module.
	*/
	public static function render_exam( $args, $content, $showFeaturedImage, $featuredImageAlignment ) {
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

		$exam_info = array_filter(array(
			// render exam class and id information
			implode(' - ', array_filter(array(
				! empty( $attrs['class'] ?? '') ? "Class Code: {$attrs['class']}" : '',
				! empty( $attrs['id'] ?? '') ? "Exam Code: {$attrs['id']}" : ''
			))),
			// render published date information
			! empty( $attrs['published_date'] ?? '' ) ? 
				sprintf('Published Date: %1$s', 
					gmdate(
						$attrs['published_date_custom_format'] ?? 'D, n/j/Y g:i a', 
						strtotime( $attrs['published_date'] ?? '' )
					) 
				) : '',
			// render final filing date information
			'off' === ($attrs['final_filing_date_chooser'] ?? 'off') ? "Final Filing Date: {$attrs['final_filing_date']}" : 
				sprintf('Final Filing Date: %1$s', 
					gmdate(
						$attrs['final_filing_date_custom_format'] ?? 'D, n/j/Y g:i a', 
						strtotime( $attrs['final_filing_date_picker'] ?? '' )
					) 
				),
			// render exam type info
			'web' === ( $attrs['type'] ?? '' ) ? 
			sprintf('Exam Url: <a href="%1$s">%1$s</a>', $attrs['url'] ?? '') : 
			sprintf('Exam Address: %1$s', self::render_address_map_link(array(
				$attrs['address'] ?? '',
				$attrs['city'] ?? '',
				$attrs['state'] ?? '',
				$attrs['zip'] ?? '',
			))),
		));

		return array_filter( array(
			self::get_the_post_thumbnail( null, array(300, 80), array( 'class' => 'mb-3 me-3' ) ),
			! empty($exam_info) ? HTMLUtility::render(array(
				'tag' => 'p',
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => array_map(fn($i) => "<span class=\"d-block\">{$i}</span>", $exam_info )
			)) : '',
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
