<?php
/**
 * CAWeb Service Tiles Module (Fullwidth)
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'ET_Builder_CAWeb_Module' ) ) {
	require_once dirname( __DIR__ ) . '/class-caweb-builder-element.php';
}

/**
 * CAWeb Service Tiles Module (Fullwidth)
 */
class CAWeb_Module_Fullwidth_Service_Tiles extends ET_Builder_CAWeb_Module {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_ca_fullwidth_service_tiles';
	/**
	 * Visual Builder Support
	 *
	 * @var string Whether or not this module supports Divi's Visual Builder.
	 */
	public $vb_support = 'on';

	/**
	 * Module Initialization
	 *
	 * @return void
	 */
	public function init() {
		$this->name      = esc_html__( 'FullWidth Service Tiles', 'et_builder' );
		$this->fullwidth = true;

		$this->child_slug      = 'et_pb_ca_fullwidth_service_tiles_item';
		$this->child_item_text = esc_html__( 'Tile', 'et_builder' );

		$this->main_css_element = '%%order_class%%';

		$this->settings_modal_toggles = array(
			'general' => array(
				'toggles' => array(
					'body'   => esc_html__( 'Body', 'et_builder' ),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'text' => array(
						'title'    => esc_html__( 'Text', 'et_builder' ),
						'priority' => 49,
					),
				),
			),
		);

		add_action( 'wp_enqueue_scripts', array( $this, 'caweb_service_tiles_wp_enqueue_scripts' ) );
	}

	/**
	 * Set tile information before rendering
	 *
	 * @return void
	 */
	public function before_render() {
		global $caweb_tile_count, $caweb_tiles;

		$caweb_tiles = array();
		$titles      = array();
		$tile_images = array();
		$tile_sizes  = array();
		$tile_links  = array();
		$tile_urls   = array();

		$caweb_tile_count = 0;
	}

	/**
	 * Returns an array of all the Module Fields.
	 *
	 * @return array
	 */
	public function get_fields() {
		$general_fields = array(
			'view_more_on_off' => array(
				'label'           => esc_html__( 'View More', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
			),
			'view_more_url' => array(
				'label'             => esc_html__( 'Link Url', 'et_builder' ),
				'type'              => 'text',
				'show_if'           => array( 'view_more_on_off' => 'on' ),
				'tab_slug'          => 'general',
				'toggle_slug'       => 'body',
			),
			'view_more_text' => array(
				'label'             => esc_html__( 'Link Text', 'et_builder' ),
				'type'              => 'text',
				'show_if'           => array( 'view_more_on_off' => 'on' ),
				'tab_slug'          => 'general',
				'toggle_slug'       => 'body',
			),
		);

		$design_fields = array();

		$advanced_fields = array();

		return array_merge( $general_fields, $design_fields, $advanced_fields );
	}

	/**
	 * Renders the Module on the frontend
	 *
	 * @param  mixed $unprocessed_props Module Props before processing.
	 * @param  mixed $content Module Content.
	 * @param  mixed $render_slug Module Slug Name.
	 * @return string
	 */
	public function render( $unprocessed_props, $content, $render_slug ) {
		$view_more_on_off = $this->props['view_more_on_off'];
		$view_more_text   = $this->props['view_more_text'];
		$view_more_url    = $this->props['view_more_url'];

		
		$this->props['module_id'] = empty( $this->props['module_id'] ) ? 
					$this->get_module_order_class( $this->slug )
					: 
					$this->props['module_id'];

		$this->add_classname( 'service-tiles' );

		$class = sprintf( ' class="%1$s" ', $this->module_classname( $render_slug ) );

		global $caweb_tile_count, $caweb_tiles;

		$view_more = 'on' === $view_more_on_off ? sprintf( '<div class="more-button"><a href="%1$s" class="btn-more inverse" target="_blanK"><span class="ca-gov-icon-plus-fill" aria-hidden="true"></span><span class="more-title">%2$s</span></a></div>', esc_url( $view_more_url ), $view_more_text ) : '';

		$output = '';

		$tile_contents = '';
		$width = 0;

		for ( $i = 0; $i < $caweb_tile_count; $i++ ) {
			$title      = $caweb_tiles[ $i ]['item_title'];
			$tile_size  = $caweb_tiles[ $i ]['tile_size'];
			$item_image = $caweb_tiles[ $i ]['item_image'];

			if ( 'half' === $tile_size ) {
				$tile_size = 'w-50';
				$width += 50;
			} elseif ( 'full' === $tile_size ) {
				$tile_size = 'w-100';
				$width += 100;
			}else{
				$tile_size = 'w-25';
				$width += 25;
			}

			if ( ! empty( $item_image ) ) {
				$alt_text   = caweb_get_attachment_post_meta( $item_image, '_wp_attachment_image_alt' );
				$item_image = sprintf( '<img src="%1$s" alt="%2$s" class="w-100" style="background-size: cover;height: 320px;" />', $item_image, ! empty( $alt_text ) ? $alt_text : ' ' );
			}

			if ( 'on' === $caweb_tiles[ $i ]['tile_link'] ) {
				
				$title = sprintf('<div class="teaser bg-black text-white py-1 text-center"><a href="%1$s" class="title h4 text-decoration-none text-white lh-base">%2$s<span class="ca-gov-icon-link d-block"></span></a></div>', $caweb_tiles[ $i ]['tile_url'], $title );

				$output .= sprintf( '<div tabindex="0" class="service-tile %1$s">%2$s%3$s</div>', $tile_size, $item_image, $title );
			} else {
				$title = sprintf('
					<div class="teaser bg-black text-white py-1 text-center">
						<a href="%1$s" data-bs-toggle="collapse" data-bs-target="#%2$s #card-%3$s" class="title h4 text-decoration-none text-white lh-base" aria-expanded="false">
							%4$s
							<span class="ca-gov-icon-plus-fill d-block"></span>
						</a>
					</div>', 
					$caweb_tiles[ $i ]['tile_url'], 
					$this->module_id(false),
					$i + 1, 
					$title 
				);

				$output .= sprintf( '<div tabindex="0" class="service-tile %1$s">%2$s%3$s</div>', 
					$tile_size, 
					$item_image, 
					$title 
				);

				$tile_contents .= sprintf(
					'<div %1$s id="card-%2$s" data-bs-parent="#%3$s">
						<div class="card card-default py-4 mb-0">
							<div class="container pt-0">
								<div class="card card-block p-3 mb-0 bg-white">
									<button type="button" data-bs-toggle="collapse" data-bs-target="#%3$s #card-%2$s" class="btn btn-sm btn-secondary ca-gov-icon-close-mark float-end" aria-expanded="false"></button>
									<div class="group">%4$s</div>
								</div>
							</div>
						</div>
					</div>',
					$caweb_tiles[ $i ]['module_class'],
					$i + 1,
					$this->module_id(false),
					$caweb_tiles[ $i ]['content']
				);

			}

			// if width has reached 100%, print out any tile contents.
			if( 100 === $width ){
				$output .= $tile_contents;
				$width = 0;
				$tile_contents = '';
			}

		}

		$output .= $this->content;

		$output = sprintf( '<div%1$s%2$s><div class="row clearfix">%3$s</div>%4$s</div>', $this->module_id(), $class, $output, $view_more );

		return $output;
	}


	/**
	 * Register CAWeb Theme scripts/styles with priority of 99999999
	 *
	 * Fires when scripts and styles are enqueued.
	 *
	 * @wp_action add_action( 'wp_enqueue_scripts', 'caweb_wp_enqueue_scripts', 99999999 );
	 * @link https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
	 *
	 * @return void
	 */
	public function caweb_service_tiles_wp_enqueue_scripts() {
		wp_enqueue_script( 'caweb-service-tiles-script', site_url( preg_replace( '/(.*)\/wp-content/', '/wp-content', __DIR__ . '/' ) ) . '/service-tiles.js', array( 'jquery' ), CAWEB_VERSION, true );
	}
}
new CAWeb_Module_Fullwidth_Service_Tiles();
