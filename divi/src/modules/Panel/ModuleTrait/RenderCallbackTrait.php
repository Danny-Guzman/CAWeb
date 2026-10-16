<?php
/**
 * Panel::render_callback()
 *
 * @package CAWeb\Modules\Panel
 * @since ??
 */

namespace CAWeb\Modules\Panel\ModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\ModuleUtils\ModuleUtils;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\Packages\Module\Layout\Components\ModuleElements\ModuleElements;

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
	 * @return string HTML rendered of Panel module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		// Retrieve the card layout from the block attributes
		// $layout = ModuleUtils::get_attr_value(array(
		// 	'attr' => $attrs['layout']['innerContent'],
		// 	'breakpoint' => 'desktop',
		// 	'state' => 'value'
		// ));

		$title = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['title']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		// Retrieve the titleAdvanced options and title attributes from the block attributes
		$textAlign = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['title']['decoration']['font']['font'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		))['textAlign'];

		$icon = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['icon']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));
		$showIcon = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['icon']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		))['show'];

		$headerIcon = 'on' === $showIcon ? self::get_icon_span( $icon ) : '';

		$inner_content = array(
			! empty( $title ) ? HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => array(
						'card-header',
						$textAlign
					)
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],
				'children' => array(
					$elements->render(array(
						'attrName' => 'title',
						'valueResolver' => function($value) use ($headerIcon) {
							return "{$headerIcon}{$value}";
						}
					))
				)
			)) : '',
			$elements->render(
				[
					'attrName' => 'content'
				]
			),
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

}
