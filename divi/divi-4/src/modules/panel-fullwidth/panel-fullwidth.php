<?php
/**
 * CAWeb Panel Module (Fullwidth)
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'CAWeb_Module_Panel' ) ) {
	require_once dirname( __DIR__ ) . '/panel/panel.php';
}

/**
 * CAWeb Panel Module Class (Fullwidth)
 */
class CAWeb_Module_Fullwidth_Panel extends CAWeb_Module_Panel {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_ca_fullwidth_panel';
	
	/**
	 * Even tho we dont support the Visual Builder Support
	 * we dont' want the warning message that the module doesn't support the Visual Builder, so we set this to on.
	 * @var string Whether or not this module supports Divi's Visual Builder.
	 */
	public $vb_support = 'on';
	
	/**
	 * Module Initialization
	 *
	 * @return void
	 */
	public function init() {
		$this->name                   = esc_html__( 'FullWidth Panel', 'caweb' );
		$this->fullwidth              = true;
		parent::init();
	}

}
new CAWeb_Module_Fullwidth_Panel();
