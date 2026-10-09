<?php
/**
 * PostDetail::module_classnames().
 *
 * @package CAWeb\Modules\PostDetail
 * @since ??
 */

namespace CAWeb\Modules\PostDetail\ModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Packages\Module\Options\Text\TextClassnames;
use ET\Builder\Packages\ModuleUtils\ModuleUtils;

trait ModuleClassnamesTrait {

	/**
	 * Module classnames function for PostDetail module.
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

		$layout = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['layout']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		$classnames_instance->add( "{$layout}-detail", true );

		$text_options_classnames = TextClassnames::text_options_classnames( $attrs['module']['advanced']['text'] ?? [] );

		if ( $text_options_classnames ) {
			$classnames_instance->add( $text_options_classnames, true );
		}
	}

}
