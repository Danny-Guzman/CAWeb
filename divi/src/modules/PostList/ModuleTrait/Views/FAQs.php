<?php
/**
 * PostList::FAQs::render_faqs()
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

trait FAQs {

	/**
	 * Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $args Block attributes that were saved by VB.
	 *
	 * @return string HTML rendered of PostList module.
	 */
	public static function render_faqs( $args ) {
		$isAccordion = $args['isAccordion'] ?? true;
		$post = $args['post'] ?? null;
		$shortcode = $args['shortcode'] ?? array();

		if( $isAccordion ) {
			return HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'accordion-item'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => array(
					// render header
					HTMLUtility::render(array(
						'tag' => 'h2',
						'attributes' => array(
							'class' => 'accordion-header pb-0'
						),
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => HTMLUtility::render(array(
							'tag' => 'button',
							'attributes' => array(
								'type' => 'button',
								'class' => 'accordion-button collapsed',
								'data-bs-toggle' => 'collapse',
								'data-bs-target' => ".{$args['orderId']} .accordion-collapse",
								'aria-expanded' => 'true',
								'aria-controls' => 'collapseExample'
							),
							'childrenSanitizer' => [self::class, 'sanitize_html'],	
							'children' => $post['title'] ?? ''
						))
					)),
					// render accordion body
					HTMLUtility::render(array(
						'tag' => 'div',
						'attributes' => array(
							'class' => 'accordion-collapse collapse',
							'data-bs-parent' => ".{$args['orderId']}"
						),
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => HTMLUtility::render(array(
							'tag' => 'div',
							'attributes' => array(
								'class' => 'accordion-body'
							),
							'childrenSanitizer' => [self::class, 'sanitize_html'],	
							'children' => $shortcode['content'] ?? ''
						))
					))
				)
			));

		}else{
			return HTMLUtility::render(array(
				'tag' => 'li',
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => array(
					// render FAQ item as a collapsible link
					HTMLUtility::render(array(
						'tag' => 'a',
						'attributes' => array(
							'class' => 'collapsed',
							'aria-expanded' => 'true',
							'data-bs-target' => ".{$args['orderId']} .collapse",
							'data-bs-toggle' => 'collapse',
						),
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => $post['title'] ?? ''
					)),
					// render faq information
					HTMLUtility::render(array(
						'tag' => 'div',
						'attributes' => array(
							'class' => 'collapse',
							'data-bs-parent' => ".{$args['orderId']}"
						),
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => $shortcode['content'] ?? ''
					))
				)
			));
		}

		
	}

}
