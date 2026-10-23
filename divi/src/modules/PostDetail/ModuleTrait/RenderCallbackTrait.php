<?php
/**
 * PostDetail::render_callback()
 *
 * @package CAWeb\Modules\PostDetail
 * @since ??
 */

namespace CAWeb\Modules\PostDetail\ModuleTrait;

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
	use Views\Course;
	use Views\Event;
	use Views\Exam;
	use Views\FAQs;
	use Views\Job;
	use Views\News;
	use Views\Profile;

	/**
	 * Get appropriate category ID's based on list style
	 *
	 * @param  string $slug Post List Category.
	 * @return array|string
	 */
	static function get_categories($slug){
		
		$args = array(
			'hide_empty' => false,
			'fields' => 'ids',
			'slug' => $slug,
		);

		return get_terms( 'category', $args );
	}

	/**
	 * Return posts based on parameters
	 *
	 * @param  array  $cats Categories associated with posts requested.
	 * @param  array  $tags Tags associated with posts requested.
	 * @param  int    $post_amount Amount of posts to return.
	 * @param  string $orderby Order posts by specific meta, default post_date.
	 * @param  string $order Order posts ascending/descending order, default DESC.
	 * @return array
	 */
	static function return_posts( $cats = array(), $tags = array(), $post_amount = -1, $orderby = 'post_date', $order = 'DESC' ){
		$args['category'] = ( ! empty( $cats ) ? ( is_array( $cats ) ? implode( ',', $cats ) : $cats ) : array() );
		$args['tag_id'] = ( ! empty( $tags ) ? ( is_array( $tags ) ? implode( ',', $tags ) : $tags ) : array() );

		$args += array(
			'posts_per_page'    => $post_amount,
			'orderby'           => $orderby,
			'order'             => $order,
			'post_type'         => 'post',
			'post_status'       => 'publish',
			'suppress_filters'  => true,
		);

		return get_posts( $args );
	}

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
	 * @return string HTML rendered of PostDetail module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		// Retrieve the post detail style from the block attributes
		$layout = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['layout']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		)) ?? 'general';

		$content = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['content']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		$showFeaturedImage = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['image']['advanced']['show'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		$featuredImageAlignment = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['image']['advanced']['alignment'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));
 
		$showCategories = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['categories']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		$showTags = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['tags']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		$inner_content = array();

		// determine the view type based on the layout
		$viewType = 'general' !== $layout ? "render_{$layout}" : '';
		
		// if the view type exists as a method in this class, call it with the data array
		if( ! empty( $viewType ) && method_exists( self::class, $viewType ) ) {
			$inner_content = self::$viewType(
				$attrs[$layout] ?? array(),
				$content,
				'on' === $showFeaturedImage,
				$featuredImageAlignment
			);
		}
		
		if( 'general' !== $layout && (
			'on' === $showCategories || 
			'on' === $showTags
		)){
			// $inner_content[] = self::render_footer();
		}

		return 'general' !== $layout ? Module::render(array(
				// FE only.
				'orderIndex'          => $block->parsed_block['orderIndex'],
				'storeInstance'       => $block->parsed_block['storeInstance'],

				// VB equivalent.
				'tag'             => 'article',
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
		)) : '';
		
	}

}
