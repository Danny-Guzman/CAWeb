<?php
/**
 * ProfileBanner::module_classnames().
 *
 * @package CAWeb\Modules\ProfileBanner
 * @since ??
 */

namespace CAWeb\Modules\ProfileBanner\ModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Packages\Module\Options\Text\TextClassnames;
use ET\Builder\Packages\ModuleUtils\ModuleUtils;

trait ModuleClassnamesTrait {

	/**
	 * Module classnames function for ProfileBanner module.
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
		$classnames_instance = $args['classnamesInstance'];
		$attrs               = $args['attrs'];

		$vertical = ModuleUtils::get_attr_value(
			array(
				'attr' => $attrs['portrait']['advanced']['vertical'],
				'breakpoint' => 'desktop',
				'state' => 'value',
			)
		);

		$classnames_instance->add( 'executive-profile' );

		// add vertical class if portrait is vertical
		$classnames_instance->add( 'on' === $vertical ? 'vertical' : '' );

		$text_options_classnames = TextClassnames::text_options_classnames( $attrs['module']['advanced']['text'] ?? [] );

		if ( $text_options_classnames ) {
			$classnames_instance->add( $text_options_classnames, true );
		}
	}

}
