<?php
/**
 * Module: Fullwidth Service Tiles Module class.
 *
 * @package CAWeb\Modules\ServiceTiles
 * @since ??
 */

namespace CAWeb\Modules\ServiceTiles;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use CAWeb\Modules\Utils\Module as CAWebModule;
use CAWeb\Modules\ServiceTiles\ModuleTrait;

use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;

/**
 * `ServiceTiles` is consisted of functions used for Divi 5 Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class ServiceTiles extends CAWebModule {
	use ModuleTrait\RenderCallbackTrait;

	/**
	 * Loads `ServiceTiles` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = CAWEB_DIVI_EXT_MODULES_PATH . 'ServiceTiles/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ ServiceTiles::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
