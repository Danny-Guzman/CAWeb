<?php
/**
 * PostList::module_classnames().
 *
 * @package CAWeb\Modules\PostList
 * @since ??
 */

namespace CAWeb\Modules\PostList\ModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Packages\Module\Options\Text\TextClassnames;
use ET\Builder\Packages\ModuleUtils\ModuleUtils;

trait ModuleClassnamesTrait {

	/**
	 * Module classnames function for PostList module.
	 *
	 * @since ??
	 *
	 * @param array $args {
	 *     An array of arguments.
	 *
	 *     @type object $classnamesInstance Instance of ET\Builder\Packages\Module\Layout\Components\Classnames.
	 *     @type array  $attrs              Block attributes data that being rendered.
	 * }
	 */
	public static function module_classnames( $args ) {
		$attrs = $args['attrs'];
		$classnames_instance = $args['classnamesInstance'];

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

		$displayImage  = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['image']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		)) ?? 'on';

		$classnames_instance->add( $style, true );

		// if featured image is displayed, and available for the $style
		if ( 'on' === $displayImage && 
			in_array($style, array(
				'courses-list',
				'events-list', 
				'news-list', 
				'profiles-list', 
			)
		)) {
			$classnames_instance->add( 'indent', true );
		}

		// Add accordion class if FAQ style is set to accordion.
		$classnames_instance->add( 'accordion', 'accordion' === $faqStyle );

		$text_options_classnames = TextClassnames::text_options_classnames( $attrs['module']['advanced']['text'] ?? [] );

		if ( $text_options_classnames ) {
			$classnames_instance->add( $text_options_classnames, true );
		}
	}

}
