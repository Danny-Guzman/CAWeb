<?php
/**
 * SectionFooterGroup::render_callback()
 *
 * @package CAWeb\Modules\SectionFooterGroup
 * @since ??
 */

namespace CAWeb\Modules\SectionFooterGroup\ModuleTrait;

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
	 * @return string HTML rendered of SectionFooterGroup module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		
		
		$inner_content = array(
			$elements->render(array(
				'attrName' => 'title'
			)),
			$elements->render(array(
				'attrName' => 'content',
				'childrenSanitizer' => [self::class, 'sanitize_html'],
				'children' => self::groupListing( $attrs )
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

	static function groupListing( $attrs ) {
		$icon = ModuleUtils::get_attr_value(array(
					'attr' => $attrs['icon']['innerContent'],
					'breakpoint' => 'desktop',
					'state' => 'value',
				));

		$showIcon = ModuleUtils::get_attr_value(array(
					'attr' => $attrs['icon']['innerContent'],
					'breakpoint' => 'desktop',
					'state' => 'value',
				))['show'];

		$displayLink = ModuleUtils::get_attr_value(array(
				'attr' => $attrs['content']['advanced']['displayLink'],
				'breakpoint' => 'desktop',
				'state' => 'value',
			)) ?? '';
			
		$title = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['title']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value',
		)) ?? '';
		

		// first we filter the attributes to only include those that start with 'link' 
		$links = array_filter( $attrs, function ( $value, $key ) { 
			if( str_starts_with( $key, 'link' ) ){
				// get the 'show' attribute from the advanced settings of the link
				$show = ModuleUtils::get_attr_value(array(
					'attr' => $value['advanced']['show'],
					'breakpoint' => 'desktop',
					'state' => 'value',
				)) ?? '';

				return 'on' === $show; // only include the link if 'show' is set to 'on'
			}
		}, ARRAY_FILTER_USE_BOTH );

		$linkElements = array_map(function($value, $key) use ($showIcon, $icon, $displayLink, $title) {

			$linkUrl = ModuleUtils::get_attr_value(array(
				'attr' => $value['innerContent'] ?? [],
				'breakpoint' => 'desktop',
				'state' => 'value',
			))['url'] ?? '';

			$text = ModuleUtils::get_attr_value(array(
				'attr' => $value['innerContent'] ?? [],
				'breakpoint' => 'desktop',
				'state' => 'value',
			))['text'] ?? '';

			
			return sprintf('<li class="mb-2">%1$s<a href="%2$s" target="_blank"%3$s title="Section Footer Group %4$s">%5$s</a></li>', 
				'on' === $showIcon ? self::get_icon_span( $icon ) : '',
				$linkUrl,
				'on' === $displayLink ? ' class="btn btn-outline-primary btn-sm"' : '',
				$title,
				$text
			); 
		}, $links, array_keys($links));

		return implode('', $linkElements);
	}
}
