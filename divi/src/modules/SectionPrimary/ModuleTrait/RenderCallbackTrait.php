<?php
/**
 * SectionPrimary::render_callback()
 *
 * @package CAWeb\Modules\SectionPrimary
 * @since ??
 */

namespace CAWeb\Modules\SectionPrimary\ModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\ModuleUtils\ModuleUtils;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\Module\Options\Element\ElementComponents;

trait RenderCallbackTrait {
	use ModuleClassnamesTrait;
	use ModuleStylesTrait;
	use ModuleScriptDataTrait;

	/**
	 * Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $attrs Block attributes that were saved by VB.
	 * @param string         $content          Block content.
	 * @param \WP_Block      $block            Parsed block object that being rendered.
	 * @param ModuleElements $elements ModuleElements instance.
	 *
	 * @return string HTML rendered of SectionPrimary module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {

		$inner_content = array(
			self::render_image( $elements, $attrs ),
			HTMLUtility::render(array(
				'tag' => 'div',
				'childrenSanitizer' => array( self::class, 'sanitize_html'),
				'children' => array(
					$elements->render( array('attrName' => 'title')),
					$elements->render( array('attrName' => 'content') ),
					self::render_button( $attrs )
				)
			))
		);


		return Module::render(array(
				// FE only.
				'orderIndex'          => $block->parsed_block['orderIndex'],
				'storeInstance'       => $block->parsed_block['storeInstance'],

				// VB equivalent.
				'id'                  => $block->parsed_block['id'],
				'moduleCategory'      => $block->block_type->category,
				'name'                => $block->block_type->name,
				'attrs'               => $attrs,
				'elements'            => $elements,
				'children'            =>  $inner_content,

				'classnamesFunction'  => [ self::class, 'module_classnames' ],
				'stylesComponent'     => [ self::class, 'module_styles' ],
				'scriptDataComponent' => [ self::class, 'module_script_data' ],

				// parent attrs
				// 'parentAttrs'         => $parent_attrs,
				// 'parentId'            => $parent->id ?? '',
				// 'parentName'          => $parent->blockName ?? '',
		));
		
	}

	/**
	 * Renders the Featured Image
	 *
	 * @param ModuleElements $elements ModuleElements instance.
	 * @param array   $attrs Block attributes that were saved by VB.
	 * @return string
	 */
	static function render_image( $elements, $attrs ){
		$advanced = $attrs['image']['advanced'];
		$show = ModuleUtils::get_attr_value(array(
			'attr' => $advanced['show'] ?? '',
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		$alignment = ModuleUtils::get_attr_value(array(
			'attr' => $advanced['alignment'] ?? '',
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		$fade = ModuleUtils::get_attr_value(array(
			'attr' => $advanced['fade'] ?? '',
			'breakpoint' => 'desktop',
			'state' => 'value',
		));

		if( 'off' === $show  ){
			return;
		}
		
		$class = "col-4 {$alignment}";

		$class .= 'none' !== $fade ? " animate__animated  animate__{$fade}" : '';

		return sprintf( '<div class="%1$s">%2$s</div>', $class, $elements->render( array('attrName' => 'image') ) );
	}

	
	/**
	 * Renders the Button
	 *
	 * @param array   $attrs Block attributes that were saved by VB.
	 * @return string
	 */
	static function render_button( $attrs ){
		$show = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['link']['advanced']['show'] ?? '',
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		
		$title = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['title']['innerContent'] ?? '',
			'breakpoint' => 'desktop',
			'state' => 'value',
		));

		$link = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['link']['innerContent'] ?? '',
			'breakpoint' => 'desktop',
			'state' => 'value',
		));

		if( 'off' === $show || empty( $link['linkUrl'] ) ){
			return;
		}

		return sprintf('<div><a href="%1$s" class="btn btn-outline-dark" target="_blank">More Information<span class="sr-only">More information about %2$s</span></a></div>', 
			esc_url( $link['linkUrl'] ), 
			esc_html( $title  ) );
	}
}
