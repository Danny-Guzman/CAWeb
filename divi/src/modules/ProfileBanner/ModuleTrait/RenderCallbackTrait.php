<?php
/**
 * ProfileBanner::render_callback()
 *
 * @package CAWeb\Modules\ProfileBanner
 * @since ??
 */

namespace CAWeb\Modules\ProfileBanner\ModuleTrait;

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
	 * @return string HTML rendered of ProfileBanner module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		// Portrait.
		$portrait = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['portrait']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value',
		));

		$isRounded = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['portrait']['advanced']['rounded'],
			'breakpoint' => 'desktop',
			'state' => 'value',
		));

		$portrait = HTMLUtility::render(array(
			'tag' => 'img',
			'attributes' => array(
				'class' => array(
					'on' === $isRounded ? 'rounded-circle' : '',
				),
				'src' => $portrait['src'] ?? '',
				isset( $portrait['alt'] ) ? 'alt' : '' => $portrait['alt'] ?? '',
			),
		));
		
		$profile = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['profile']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		
		$body = HTMLUtility::render(array(
			'tag' => 'div',
			'childrenSanitizer' => 'et_core_esc_previously',
			'attributes' => array(
				'class' => array(
					'body',
				),
			),
			'children' => array(
				$elements->render( [ 'attrName' => 'name' ] ),
				$elements->render( [ 'attrName' => 'job' ] ),
				isset( $profile['linkUrl'], $profile['text'] ) ?
					HTMLUtility::render(array(
						'tag' => 'a',
						'attributes' => array(
							'href' => esc_url( $profile['linkUrl'] ),
						),
						'children' => esc_html( $profile['text'] ),
					)) : '',
			),
		));

		$inner_content = array(
			$portrait,
			$body
		);
			
		$parent       = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );
		$parent_attrs = $parent->attrs ?? [];

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
				'tag'                => 'figure',
				'children'            =>  $inner_content,

				'classnamesFunction'  => [ self::class, 'module_classnames' ],
				'stylesComponent'     => [ self::class, 'module_styles' ],
				'scriptDataComponent' => [ self::class, 'module_script_data' ],

				// parent attrs
				'parentAttrs'         => $parent_attrs,
				'parentId'            => $parent->id ?? '',
				'parentName'          => $parent->blockName ?? '',
		));
		
	}
}
