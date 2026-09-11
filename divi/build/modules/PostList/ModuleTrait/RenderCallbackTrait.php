<?php
/**
 * PostList::render_callback()
 *
 * @package CAWeb\Modules\PostList
 * @since ??
 */

namespace CAWeb\Modules\PostList\ModuleTrait;

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
	use Views\Courses;
	use Views\Events;
	use Views\Exams;
	use Views\FAQs;
	use Views\Jobs;
	use Views\News;
	use Views\Profiles;

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
	 * @return string HTML rendered of PostList module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		// Retrieve the post list style from the block attributes
		$style = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['style']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		$faqStyle = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['style']['advanced'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		))['faq'] ?? 'accordion';

		$showAllCategories = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['categories']['advanced'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		))['all'] ?? 'on';
 
		$selectedCategories = 'on' === $showAllCategories ? array() : ModuleUtils::get_attr_value(array(
			'attr' => $attrs['categories']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		)) ?? array();

		$showAllTags = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['tags']['advanced'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		))['all'] ?? 'on';

		$tags = 'on' === $showAllTags ? array() : ModuleUtils::get_attr_value(array(
			'attr' => $attrs['tags']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		)) ?? array();

		$postsNumber = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['posts']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		)) ?? -1;

		$displayExcerpt = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['excerpt']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		)) ?? 'on';

		$displayImage  = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['image']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		)) ?? 'on';

		$slug = str_replace('-list', '', $style);

		// get categories based on the slug or selected categories
		$categories = 'general' === $slug ? $selectedCategories : self::get_categories($slug);
	
		// get order/orderby parameters
		$orderBy = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['orderby']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		)) ?? 'rand';

		$order = '';

		if( strpos($orderBy, '_') ){
			$orderInfo = explode('_', $orderBy);
			$orderBy = $orderInfo[0];
			$order = strtoupper($orderInfo[1]);
		} 
			
		$all_posts = self::return_posts(
			$categories,
			$tags, 
			$postsNumber,
			$orderBy,
			$order
		);

		setlocale( LC_MONETARY, 'en_US.UTF-8' );

		// Retrieve the titleSize from the block attributes
		$titleSize = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['title']['advanced'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		))['size'] ?? 'h1';

		$inner_content = array(
			$elements->render(array(
				'attrName' => 'title',
				'tagName' => $titleSize,
			))
		);
		
		$viewType = '';
		$data = array(
			'displayExcerpt' => $displayExcerpt,
			'displayImage' => $displayImage,
		);

		$outputList = array();

		foreach( $all_posts as $a => $p ){
			if( has_shortcode( $p->post_content, 'et_pb_ca_post_handler' ) ) {
				$pattern = get_shortcode_regex(array('et_pb_ca_post_handler'));

				preg_match_all('/' . $pattern . '/', $p->post_content, $matches, PREG_SET_ORDER);

				if( isset( $matches[0][3] ) ) {
					$data['orderId'] = ModuleUtils::get_module_order_class_name($block->parsed_block['id']);

					// store the post information
					$data['post']['id'] = $p->ID;
					$data['post']['url'] = $p->guid;
					$data['post']['title'] = $p->post_title;

					// store the handlers attributes
					$data['shortcode'] = shortcode_parse_atts( $matches[0][3] );					// $inner_content[] = $style;
					$data['shortcode']['content'] = isset($matches[0][5]) ? $matches[0][5] : '';
					
					// determine the view type based on the slug
					// for general list we use events
					$viewType = 'general-list' === $style ? "render_events" : "render_$slug";

					// if faqs-list add isAccordion flag to the data array
					if( 'faqs-list' === $style ){
						$data['isAccordion'] = 'accordion' === $faqStyle;
					} 

					// if the view type exists as a method in this class, call it with the data array
					if( ! empty( $viewType ) && method_exists( self::class, $viewType ) ){
						// for FAQs list, if it's not an accordion, add to the output list instead of inner content
						if(isset($data['isAccordion']) && ! $data['isAccordion']	){
							$outputList[] = self::$viewType($data);
						}else{
							$inner_content[] = self::$viewType($data);
						}
					}

				}
			}
		}
		
		// if the style is faqs-list and it's not an accordion, render the output list as a separate UL element
		if( 'faqs-list' === $style && isset($data['isAccordion']) && ! $data['isAccordion']	){
			$inner_content[] = HTMLUtility::render(array(
				'tag' => 'ul',
				'attributes' => array(
					'class' => 'accordion-list list-overstated',
					'role' => 'tablist'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => $outputList
			));
		}

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
