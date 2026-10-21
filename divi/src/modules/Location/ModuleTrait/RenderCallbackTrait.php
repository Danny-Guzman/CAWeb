<?php
/**
 * Location::render_callback()
 *
 * @package CAWeb\Modules\Location
 * @since ??
 */

namespace CAWeb\Modules\Location\ModuleTrait;

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
	 * @return string HTML rendered of Location module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		// layout.
		$layout = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['layout']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
		));

		$body = '';

		switch( $layout ){
			case 'mini':
				$body = self::render_mini( $elements, $attrs );
				break;
			case 'banner':
				$body = self::render_banner( $elements, $attrs );
				break;
			case 'contact':
			default:
				$body = self::render_contact( $elements, $attrs );
				break;
		}

		$inner_content = array( $body );

		// $parent       = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );
		// $parent_attrs = $parent->attrs ?? [];

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
	 * Renders Location (contact).
	 *
	 * @since ??
	 *
	 * @param ModuleElements $elements ModuleElements instance.
	 * @param array          $attrs Block attributes that were saved by VB.
	 *
	 * @return string HTML rendered of Location module.
	 */
	static function render_contact( $elements, $attrs ) {
		$address = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['address']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value',
		));

		$contact = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['contact']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		$showContact = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['contact']['advanced']['show'],
			'breakpoint' => 'desktop',
			'state' => 'value',
		));

		$icon = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['icon']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value',
		));

		$link = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['link']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		$showLink = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['link']['advanced']['show'],
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		$name = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['name']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value',
		));

  		// get a map link if address info exists
		$addressMapLink = self::render_address_map_link( $address );
		
		// If displaying an icon
		$displayIcon   = 'on' === $icon['show'] ? sprintf('<div class="thumbnail">%1$s</div>', self::get_icon_span( $icon )) : '';

		// show contact info if enabled
		$displayOther = 'on' === $showContact ? 
			sprintf('%1$s%2$s',
				! empty( $contact['phone'] ) ? sprintf('<p>General Information: %1$s</p>', $contact['phone']) : '',
				! empty( $contact['fax'] ) ? sprintf('<p>FAX: %1$s</p>', $contact['fax']) : ''
			) : '';

					
		$linkElement = ! empty( $link['linkUrl'] )  && 'on' === $showLink ?
			sprintf('<a href="%1$s" class="btn btn-outline-dark" target="_blank">More</a>', $link['linkUrl'])
			: '';
			
		 // we combine all contact info elements here
		$contactInfo = ( 
			! empty( $name )  ||
			! empty( $displayOther ) ||
			! empty( $addressMapLink ) ||
			! empty( $linkElement )
		) ? 
		sprintf('<div class="contact">%1$s%2$s%3$s%4$s</div>', 
			$elements->render(array('attrName' => 'name')),
			$addressMapLink, 
			$displayOther, 
			$linkElement
		) : '';

		return sprintf('%1$s%2$s', $displayIcon, $contactInfo);
	}
	
	/**
	 * Renders Location (mini).
	 *
	 * @since ??
	 *
	 * @param ModuleElements $elements ModuleElements instance.
	 * @param array          $attrs Block attributes that were saved by VB.
	 *
	 * @return string HTML rendered of Location module.
	 */
	static function render_mini( $elements, $attrs  ) {
		
		$address = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['address']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value',
		));

		$icon = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['icon']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		
		$link = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['link']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		
		$name = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['name']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		
  		// get a map link if address info exists
		$addressMapLink = self::render_address_map_link( $address );
		
		// If displaying an icon
		$displayIcon   = 'on' === $icon['show'] ? sprintf('<div class="thumbnail">%1$s</div>', self::get_icon_span( $icon )) : '';

		// we wrap the name in a link if a link url is provided
		$nameElement = ! empty( $name )  ?
			(
				! empty( $link['linkUrl'] ) 
				?
				sprintf('<a href="%1$s" target="_blank">%2$s</a>', $link['linkUrl'], $name )
				:
				$elements->render(array('attrName' => 'name'))
			)
			: '';
			
		 // we combine all contact info elements here
		$contactInfo = ( 
			! empty( $nameElement )  ||
			! empty( $addressMapLink ) 
		) ? 
		sprintf('<div class="contact">%1$s%2$s</div>', 
			$nameElement,
			$addressMapLink
		) : '';

		return sprintf('%1$s%2$s', $displayIcon, $contactInfo );
	}

	/**
	 * Renders Location (banner).
	 *
	 * @since ??
	 *
	 * @param ModuleElements $elements ModuleElements instance.
	 * @param array          $attrs Block attributes that were saved by VB.
	 *
	 * @return string HTML rendered of Location module.
	 */
	static function render_banner( $elements, $attrs  ) {
		$address = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['address']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		$link = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['link']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		$showLink = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['link']['advanced']['show'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		$name = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['name']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		$desc = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['desc']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		$image = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['image']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
		));
		
		$imageElement = ! empty( $image['src'] ) ?
    		sprintf('<div class="thumbnail">%1$s</div>', $elements->render(array('attrName' => 'image')))
			: '';
  		
			// get a map link if address info exists
		$addressMapLink = self::render_address_map_link( $address );
		
  		// Add description markup
		$descElement = ! empty( $desc ) ?
			sprintf('<strong>Description:</strong>%1$s', $elements->render(array('attrName' => 'desc')))
			: '';

		$linkElement = ! empty( $link['linkUrl'] )  && 'on' === $showLink ?
			sprintf('<a href="%1$s" class="btn btn-outline-dark" target="_blank">View More Details</a>', $link['url'])
			: '';
						
		// we combine all contact info elements here
		$contactInfo = ( 
			! empty( $name )  ||
			! empty( $addressMapLink ) 
		) ? 
		sprintf('<div class="contact">%1$s%2$s</div>', 
			$elements->render(array('attrName' => 'name'))	,
			! empty ($addressMapLink) ? sprintf('<div class="address">%1$s%2$s</div>', self::get_icon_span('road-pin'), $addressMapLink) : ''
		) : '';

		// we combine all summary info elements here
		$summaryInfo = ( 
			! empty( $descElement )  ||
			! empty( $linkElement ) 
		) ? 
		sprintf('<div class="summary">%1$s%2$s</div>', 
			$descElement,
			$linkElement
		) : '';

		return sprintf('%1$s%2$s%3$s', $imageElement, $contactInfo, $summaryInfo);
	}

}
