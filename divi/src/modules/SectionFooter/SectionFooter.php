<?php
/**
 * Module: Section Footer Module class.
 *
 * @package CAWeb\Modules\SectionFooter
 * @since ??
 */

namespace CAWeb\Modules\SectionFooter;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use CAWeb\Modules\Utils\Module as CAWebModule;
use CAWeb\Modules\SectionFooter\ModuleTrait;

use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;

/**
 * `SectionFooter` is consisted of functions used for Divi 5 Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class SectionFooter extends CAWebModule {
	use ModuleTrait\RenderCallbackTrait;

	/**
	 * Loads `SectionFooter` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = CAWEB_DIVI_EXT_MODULES_JSON_PATH . 'SectionFooter/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ SectionFooter::class, 'render_callback' ],
					]
				);
			}
		);

		add_filter(
			'divi_conversion_deprecated_attribute',
			function($should_deprecate, $attrName, $moduleName, $attrs ){
				if( 'caweb/section-footer' === $moduleName ) {
					// previously deprecated items, child module elements were indexed and should be deprecated
					$should_deprecate = is_numeric( $attrName );
				}
				return $should_deprecate;
			},
			10,
			4
		);
	}
}
