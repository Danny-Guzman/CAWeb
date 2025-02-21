<?php
/**
 * CAWeb Options Page
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Render Options Page.
caweb_display_options_page();

/**
 * Main Entry Point for CAWeb Options Page
 *
 * @return void
 */
function caweb_display_options_page() {
	// if saving.
	if ( isset( $_POST['caweb_submit'], $_POST['caweb_theme_options_nonce'] ) &&
	wp_verify_nonce( sanitize_key( $_POST['caweb_theme_options_nonce'] ), 'caweb_theme_options' ) ) {
		caweb_save_options( $_POST, $_FILES );
	}

	// CAWeb Options Page Nonce.
	$caweb_nonce = wp_create_nonce( 'caweb_theme_options' );

	// Selected Tab.
	$caweb_selected_tab = isset( $_POST['tab_selected'] ) ? sanitize_text_field( wp_unslash( $_POST['tab_selected'] ) ) : 'general';

	// Get User Profile Color.
	$caweb_user_color = caweb_get_user_color()->colors[2];

	?>
	<style>
		<?php
		printf( '.menu-list li.list-group-item,.menu-list li.list-group-item:hover {background-color: %1$s !important;}.menu-list li.list-group-item:not(.selected) a {color: %1$s !important;}', esc_attr( $caweb_user_color ) );
		?>
	</style>
	<div class="container-fluid mt-4">
		<form id="caweb-options-form" action="<?php print esc_url( admin_url( 'admin.php?page=caweb_options' ) ); ?>" method="POST" enctype="multipart/form-data">
			<input type="submit" name="caweb_options_submit" class="button button-primary mb-2" value="Save Changes">
			<div class="row">
				<ul class="menu-list list-group list-group-horizontal">
					<li class="list-group-item mb-0<?php print 'general' === $caweb_selected_tab ? ' selected' : ''; ?>"><a href="#general" class="text-decoration-none text-white" data-bs-toggle="collapse" <?php print 'general' === $caweb_selected_tab ? ' aria-expanded="true"' : ''; ?>>General Settings</a></li>
					<li class="list-group-item mb-0<?php print 'social-share' === $caweb_selected_tab ? ' selected' : ''; ?>"><a href="#social-share" class="text-decoration-none text-white" data-bs-toggle="collapse" <?php print 'social-share' === $caweb_selected_tab ? ' aria-expanded="true"' : ''; ?>>Social Media Links</a></li>
					<li class="list-group-item mb-0<?php print 'custom-css' === $caweb_selected_tab ? ' selected' : ''; ?>"><a href="#custom-css" class="text-decoration-none text-white" data-bs-toggle="collapse" <?php print 'custom-css' === $caweb_selected_tab ? ' aria-expanded="true"' : ''; ?>>Custom CSS</a></li>
					<li class="list-group-item mb-0<?php print 'custom-js' === $caweb_selected_tab ? ' selected' : ''; ?>"><a href="#custom-js" class="text-decoration-none text-white" data-bs-toggle="collapse" <?php print 'custom-js' === $caweb_selected_tab ? ' aria-expanded="true"' : ''; ?>>Custom JS</a></li>
					<li class="list-group-item mb-0<?php print 'alert-banners' === $caweb_selected_tab ? ' selected' : ''; ?>"><a href="#alert-banners" class="text-decoration-none text-white" data-bs-toggle="collapse" <?php print 'alert-banners' === $caweb_selected_tab ? ' aria-expanded="true"' : ''; ?>>Alert Banners</a></li>
					<li class="list-group-item mb-0<?php print 'additional-features' === $caweb_selected_tab ? ' selected' : ''; ?>"><a href="#additional-features" class="text-decoration-none text-white" data-bs-toggle="collapse" <?php print 'additional-features' === $caweb_selected_tab ? ' aria-expanded="true"' : ''; ?>>Additional Features</a></li>
				</ul>
			</div>
			<div class="row pe-3">
				<div class="col-12 bg-white border py-2" id="caweb-settings">
					<input type="hidden" id="tab_selected" name="tab_selected" value="<?php print esc_attr( $caweb_selected_tab ); ?>">
					<input type="hidden" name="caweb_theme_options_nonce" value="<?php print esc_attr( $caweb_nonce ); ?>" />
					<?php
						caweb_display_general_settings( 'general' === $caweb_selected_tab );
						caweb_display_social_media_settings( 'social-share' === $caweb_selected_tab );
						caweb_display_custom_file_settings( 'custom-css' === $caweb_selected_tab, 'css' );
						caweb_display_custom_file_settings( 'custom-js' === $caweb_selected_tab, 'js' );
						caweb_display_alert_banner_settings( 'alert-banners' === $caweb_selected_tab );
						caweb_display_additional_features_settings( 'additional-features' === $caweb_selected_tab );
					?>
					<input type="hidden" name="caweb_submit">
				</div>
			</div>
			<input type="submit" name="caweb_options_submit" class="button button-primary mt-2" value="Save Changes">
		</form>
	</div>
	<?php
}

/**
 * Main Entry Point for CAWeb Options General Settings
 *
 * @param  boolean $is_active If this is the active tab.
 * @return void
 */
function caweb_display_general_settings( $is_active = false ) {
	?>
	<!-- General Settings -->
	<div id="general" class="collapse<?php print $is_active ? ' show' : ''; ?>" data-bs-parent="#caweb-settings">
		<div id="general-settings">
		<?php
			caweb_display_general_options();
			caweb_display_utility_header_options();
			caweb_display_page_header_options();
			caweb_display_google_options();
		?>
		</div>
	</div>
	<?php
}

/**
 * Display for General Options
 *
 * @return void
 */
function caweb_display_general_options() {

	// Fav Icon.
	$fav_icon      = get_option( 'ca_fav_ico', caweb_default_favicon_url() );
	$fav_icon_name = caweb_favicon_name();

	// Header Menu.
	$navigation_menu = get_option( 'ca_default_navigation_menu', 'singlelevel' );

	// Color Scheme.
	$color_scheme      = get_option( 'ca_site_color_scheme', 'oceanside' );
	$available_schemes = caweb_template_colors();

	// Title Display.
	$display_post_title = get_option( 'ca_default_post_title_display', false ) ? ' checked' : '';

	// Display Date for Non Divi Posts.
	$display_post_date = get_option( 'ca_default_post_date_display', false ) ? ' checked' : '';

	// Legacy Browser Support.
	$ua_compatibiliy = get_option( 'ca_x_ua_compatibility', false ) ? ' checked' : '';

	$menus = caweb_nav_menu_types();

	?>
	<!-- General Section -->
	<div>
		<a class="d-inline-block text-decoration-none" aria-label="CAWeb General Settings" data-bs-toggle="collapse" href="#general-setting" role="button" aria-expanded="true" aria-controls="general-settings">
			<h2 class="mb-0">General <span class="text-secondary ca-gov-icon-"></span></h2>
		</a>
	</div>
	<div class="collapse show" id="general-setting" data-bs-parent="#general-settings">
		<?php do_action('caweb_options_general_custom_fields'); ?>
		
		<!-- Fav Icon Row -->
		<div class="row">
			<div class="mb-3 col-sm-5">
				<label for="ca_fav_ico_filename" class="d-block mb-0"><strong>Fav Icon</strong></label>
				<small class="mb-2 text-muted d-block">Select a site fav icon (displays in browser tab).</small>
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text h-100">
							<!-- Fav Icon Preview -->
							<img class="ca_fav_ico_option" id="ca_fav_ico_img" src="<?php print esc_url( $fav_icon ); ?>"/> 
						</span>
					</div>
					<!-- Fav Icon Input Field -->
					<input 
						type="text" 
						name="ca_fav_ico" 
						id="ca_fav_ico_filename" 
						value="<?php print esc_attr( $fav_icon_name ); ?>" 
						class="form-control library-link h-auto mx-2" 
						placeholder="Fav Icon" 
						data-choose="Choose a Fav Icon"
						data-update="Set as Fav Icon"
						data-option="x-image/icon, image/x-icon, x-image/x-icon, image/icon, image/vnd.microsoft.icon"
						data-uploader="false" 
						data-icon-check="true"
						readonly>
					<div class="input-group-append">
						<button 
							name="ca_fav_ico"
							class="btn btn-outline-primary library-link" 
							data-choose="Choose a Fav Icon"
							data-update="Set as Fav Icon"
							data-option="x-image/icon, image/x-icon, x-image/x-icon, image/icon, image/vnd.microsoft.icon"
							data-uploader="false" 
							data-icon-check="true">Browse</button>
						<button id="resetFavIcon" class="btn btn-outline-primary" type="button">Reset</button>
					</div>
					<!-- Fav Icon Hidden  -->
					<input type="hidden" id="ca_fav_ico" name="ca_fav_ico" value="<?php print esc_attr( $fav_icon ); ?>" >
				</div>
			</div>
		</div>

		<!-- Header Menu Type Row -->
		<div class="row">
			<div class="mb-3 col-sm-5">
				<label for="ca_default_navigation_menu" class="d-block mb-0"><strong>Header Menu Type</strong></label>
				<small class="mb-2 text-muted d-block">Set a menu style for all pages.</small>
				<select id="ca_default_navigation_menu" name="ca_default_navigation_menu" class="w-50 form-control">
					<?php
					foreach ( $menus as $v => $t ) :
						?>
						<option value="<?php print esc_attr( $v ); ?>" <?php print $v === $navigation_menu ? 'selected="selected"' : ''; ?>><?php print esc_html( $t ); ?></option>
						<?php
						endforeach;
					?>
				</select>
			</div>
		</div>

		<!-- Colorscheme Row -->
		<div class="row">
			<div class="mb-3 col-sm-5">
				<label for="ca_site_color_scheme" class="d-block mb-0"><strong>Color Scheme</strong></label>
				<small class="mb-2 text-muted d-block">Apply a site-wide color scheme.</small>
				<select id="ca_site_color_scheme" name="ca_site_color_scheme" class="w-50 form-control">
				<?php
				foreach ( array_keys( $available_schemes ) as $color ) {
					$selected = $color === $color_scheme ? ' selected="selected"' : '';
					?>
					<option value="<?php print esc_attr( str_replace( ' ', '', $color ) ); ?>"
					<?php print esc_attr( $selected ); ?>
					<?php if ( str_replace( ' ', '', $color ) === $color_scheme ) : ?>
						selected="selected"
					<?php endif; ?>
					>
					<?php print esc_attr( ucwords( $color ) ); ?>
					</option>
					<?php
				}
				?>
				</select>
			</div>
		</div>

		<!-- Title Display Default, Display Date for Non-Divi Posts & Legacy Browser Support Row -->
		<div class="row">
			<!-- Title Display Default -->
			<div class="mb-3 col">
				<div class="form-check form-switch">
					<input type="checkbox" class="form-check-input mt-1" name="ca_default_post_title_display" id="ca_default_post_title_display" <?php print esc_attr( $display_post_title ); ?>>
					<label for="ca_default_post_title_display" class="d-block mb-0 form-check-label"><strong>Title Display Default</strong></label>
					<small class="mb-2 text-muted d-block">Display the title for all new pages/posts.</small>
				</div>
			</div>
			<!-- Display Date for Non-Divi Posts -->
			<div class="mb-3 col">
				<div class="form-check form-switch">
					<input type="checkbox" class="form-check-input mt-1" name="ca_default_post_date_display" id="ca_default_post_date_display" <?php print esc_attr( $display_post_date ); ?>>
					<label for="ca_default_post_date_display" class="d-block mb-0 form-check-label"><strong>Display Date for Non-Divi Posts</strong></label>
					<small class="mb-2 text-muted d-block">Display the post published date for non-Divi posts.</small>
				</div>
			</div>
			<!-- Legacy Browser Support -->
			<div class="mb-3 col">
				<div class="form-check form-switch">
					<input type="checkbox" class="form-check-input mt-1" name="ca_x_ua_compatibility" id="ca_x_ua_compatibility" <?php print esc_attr( $ua_compatibiliy ); ?> >
					<label for="ca_x_ua_compatibility" class="d-block mb-0 form-check-label"><strong>Legacy Browser Support</strong></label>
					<small class="mb-2 text-muted d-block">Creates tradeoff: IE works better but forces accessibility errors.</small>
					<small class="text-danger d-block"><?php print ! empty( $ua_compatibiliy ) ? 'IE 11 browser compatibility enabled. Warning: creates accessibility errors when using IE browsers.' : ''; ?></small>
				</div>
			</div>
		</div>
	</div>
	<?php
}

/**
 * Display for Utility Header Options
 *
 * @return void
 */
function caweb_display_utility_header_options() {

	// Contact Us Page.
	$contact_us_link = get_option( 'ca_contact_us_link', '' );

	?>
	<!-- Utility Header Section -->
	<div>
		<a class="collapsed d-inline-block text-decoration-none" data-bs-toggle="collapse" href="#utility-header-settings" role="button" aria-expanded="false" aria-controls="utility-header-settings">
			<h2 class="mb-0">Utility Header <span class="text-secondary ca-gov-icon-"></span></h2>
		</a>
	</div>
	<div class="collapse" id="utility-header-settings" data-bs-parent="#general-settings">
		<?php do_action('caweb_options_utility_header_custom_fields'); ?>
		<!-- Contact Us Page Row -->
		<div class="row">
			<div class="mb-3 col-sm-5">
				<label for="ca_contact_us_link" class="d-block mb-0"><strong>Contact Us Page</strong></label>
				<small class="mb-2 text-muted d-block">Enter the URL to your &quot;Contact Us&quot; page.</small>
				<input type="text" name="ca_contact_us_link" id="ca_contact_us_link" class="form-control" value="<?php print esc_url( $contact_us_link ); ?>">
			</div>
		</div>

		<!-- Custom Link Row -->
		<div class="row">
			<?php
			for ( $i = 1; $i <= 3; $i++ ) :
				$p      = "ca_utility_link_$i";
				$name   = get_option( "{$p}_name", '' );
				$url    = get_option( "$p", '' );
				$target = get_option( "{$p}_new_window", true ) ? ' checked' : '';
				$enable = get_option( "{$p}_enable", 'init' );

				if ( ( 'init' === $enable && ! empty( $url ) && ! empty( $name ) ) || $enable ) {
					$enable = ' checked';
				} else {
					$enable = '';
				}
				?>
			<!-- Custom Link <?php print esc_attr( $i ); ?> -->
			<div class="mb-3 col">
				<div class="form-check form-switch">
					<input type="checkbox" class="form-check-input mt-1" id="<?php print esc_attr( $p ); ?>_enable" name="<?php print esc_attr( $p ); ?>_enable" <?php print esc_attr( $enable ); ?>>
					<label for="<?php print esc_attr( $p ); ?>_enable" class="d-block mb-0 form-check-label"><strong>Custom Link <?php print esc_attr( $i ); ?></strong></label>
					<small class="mb-2 text-muted d-block">Enable a custom link.</small>
				</div>
				<div id="custom_link_<?php print esc_attr( $i ); ?>" class="collapse<?php print ! empty( $enable ) ? ' show' : ''; ?>">
					<!-- Link Label -->
					<label for="<?php print esc_attr( $p ); ?>_name" class="d-block mb-0"><strong>Custom Link <?php print esc_attr( $i ); ?> Label</strong></label>
					<small class="mb-2 text-muted d-block">Custom link label text.</small>
					<input type="text" name="<?php print esc_attr( $p ); ?>_name" id="<?php print esc_attr( $p ); ?>_name" class="form-control w-75" value="<?php print esc_attr( wp_unslash( $name ) ); ?>"/>

					<!-- Link Url -->
					<label for="<?php print esc_attr( $p ); ?>" class="d-block mb-0"><strong>Custom Link <?php print esc_attr( $i ); ?> URL</strong></label>
					<small class="mb-2 text-muted d-block">Enter a valid link URL.</small>
					<input type="text" name="<?php print esc_attr( $p ); ?>" id="<?php print esc_attr( $p ); ?>" class="form-control w-75" value="<?php print esc_url( $url ); ?>"/>

					<!-- Link Target -->
					<label for="<?php print esc_attr( $p ); ?>_new_window" class="d-block mb-0">
						<input type="checkbox" name="<?php print esc_attr( $p ); ?>_new_window" id="<?php print esc_attr( $p ); ?>_new_window"<?php print esc_attr( $target ); ?>/>
						<strong>Open in New Tab</strong>
					</label>
					<small class="mb-2 text-muted d-block">Open the link in new tab.</small>
				</div>
			</div>
			<?php endfor; ?>
		</div>
	</div>
	<?php
}

/**
 * Display for Page Header Options
 *
 * @return void
 */
function caweb_display_page_header_options() {
	// Organization Logo.
	$org_logo          = get_option( 'header_ca_branding', '' );
	$org_logo_filename = ! empty( $org_logo ) ? substr( $org_logo, strrpos( $org_logo, '/' ) + 1 ) : '';

	// Organization Logo Alt Text.
	$org_logo_alt_text = '';
	if ( ! empty( $org_logo ) ) {
		$org_logo_alt_text = ! empty( get_option( 'header_ca_branding_alt_text', '' ) ) ? get_option( 'header_ca_branding_alt_text', '' ) : caweb_get_attachment_post_meta( $org_logo, '_wp_attachment_image_alt' );
	}
	?>
	<!-- Page Header Section -->
	<div>
		<a class="collapsed d-inline-block text-decoration-none" data-bs-toggle="collapse" href="#page-header-settings" role="button" aria-expanded="false" aria-controls="page-header-settings">
			<h2 class="mb-0">Page Header <span class="text-secondary ca-gov-icon-"></span></h2>
		</a>
	</div>
	<div class="collapse" id="page-header-settings" data-bs-parent="#general-settings">
		<?php do_action('caweb_options_page_header_custom_fields'); ?>
		<!-- Organization Logo-Brand Row -->
		<div class="row">
			<div class="mb-3 col-sm-5">
				<label for="header_ca_branding_filename" class="d-block mb-0"><strong>Organization Logo-Brand</strong></label>
				<small class="mb-2 text-muted d-block">Select an image to use as the agency logo. Recommended size is 300 pixels wide by 80 pixels tall.</small>
				<div class="input-group">
					<!-- Organization Logo-Brand Field -->
					<input 
						type="text" 
						name="header_ca_branding" 
						id="header_ca_branding_filename" 
						readonly 
						value="<?php print esc_attr( $org_logo_filename ); ?>" 
						class="library-link form-control" 
						data-choose="Choose an Organization Logo-Brand"
						data-update="Set as Default Logo"  
						data-uploader="false">

					<div class="input-group-append">
						<!-- Organization Logo-Brand Browse images -->
						<button 
							name="header_ca_branding" 
							class="library-link btn btn-outline-primary" 
							data-choose="Choose an Organization Logo-Brand"
							data-update="Set as Default Logo" 
							data-uploader="false"
							>Browse</button>
						<button id="resetOrgLogo" class="btn btn-outline-primary" type="button">Reset</button>
					</div>
				</div>

				<!-- Organization Logo-Brand  -->
				<input type="hidden" name="header_ca_branding" value="<?php print esc_attr( $org_logo ); ?>" >

				<!-- Organization Logo-Brand Preview -->
				<img class="header_ca_branding_option" id="header_ca_branding_img" src="<?php print esc_url( $org_logo ); ?>"/>
			</div>
		</div>

		<div class="row">
			<div class="mb-3 col-sm-5">
				<label for="header_ca_branding_alt_text" class="d-block mb-0"><strong>Organization Logo-Alt Text</strong></label>
				<small class="mb-2 text-muted d-block">Enter alternative text for the agency logo image.</small>
				<!-- Organization Logo-Brand image alt text -->
				<input type="text" name="header_ca_branding_alt_text" id="header_ca_branding_alt_text" value="<?php print esc_attr( wp_unslash( $org_logo_alt_text ) ); ?>" class="form-control">
			</div>
		</div>
	</div>
	<?php
}

/**
 * Display for Google Options
 *
 * @return void
 */
function caweb_display_google_options() {
	// Search ID.
	$google_search_id = wp_unslash( get_option( 'ca_google_search_id', '' ) );

	// Analytics ID.
	$google_analytic_id  = wp_unslash( get_option( 'ca_google_analytic_id', '' ) );
	$google_analytic4_id = wp_unslash( get_option( 'ca_google_analytic4_id', '' ) );

	// Tag Manager ID.
	$google_tag_manager_id = wp_unslash( get_option( 'ca_google_tag_manager_id', '' ) );

	// Meta ID.
	$google_meta_id = wp_unslash( get_option( 'ca_google_meta_id', '' ) );

	// Translate.
	$google_translate_mode       = get_option( 'ca_google_trans_enabled', 'none' );
	$google_translate_page       = get_option( 'ca_google_trans_page', '' );
	$google_translate_text       = get_option( 'ca_google_trans_text', '' );
	$google_translate_new_window = get_option( 'ca_google_trans_page_new_window', true ) ? ' checked' : '';
	$google_translate_icon       = get_option( 'ca_google_trans_icon', 'globe' );

	?>
	<!-- Google Section -->
	<div>
		<a class="collapsed d-inline-block text-decoration-none" data-bs-toggle="collapse" href="#google-settings" role="button" aria-expanded="false" aria-controls="google-settings">
			<h2 class="mb-0">Google <span class="text-secondary ca-gov-icon-"></span></h2>
		</a>
	</div>
	<div class="collapse" id="google-settings" data-bs-parent="#general-settings">
		<?php do_action('caweb_options_google_custom_fields'); ?> 
		<!-- Search Engine ID Row -->
		<div class="row">
			<div class="mb-3 col-sm-5">
				<label for="ca_google_search_id" class="d-block mb-0"><strong>Search Engine ID</strong></label>
				<small class="mb-2 text-muted d-block">Enter your unique Google search engine ID, if you don't have one see an administrator.</small>
				<!-- Search Engine ID Field -->
				<input type="text" name="ca_google_search_id" id="ca_google_search_id" class="form-control" value="<?php print esc_attr( $google_search_id ); ?>" >
			</div>
		</div>

		<!-- Analytics ID Row -->
		<div class="row">
			<div class="mb-3 col-sm-12">
				<label for="ca_google_analytic_id" class="d-block mb-0"><strong>Analytics ID</strong></label>
				<small class="mb-2 text-muted d-block">Enter your unique Google Analytics ID, if you don't have one see an administrator.</small>
				<!-- Analytics ID Field -->
				<input type="text" name="ca_google_analytic_id" id="ca_google_analytic_id" class="form-control w-25" value="<?php print esc_attr( $google_analytic_id ); ?>">
			</div>
		</div>
		<!-- Analytics ID Row -->
		<div class="row">
			<div class="mb-3 col-sm-12">
				<label for="ca_google_analytic4_id" class="d-block mb-0"><strong>Analytics 4 ID</strong></label>
				<small class="mb-2 text-muted d-block">Enter your unique Google Analytics 4 ID, if you don't have one see an administrator.</small>
				<!-- Analytics ID Field -->
				<input type="text" name="ca_google_analytic4_id" id="ca_google_analytic4_id" class="form-control w-25" value="<?php print esc_attr( $google_analytic4_id ); ?>">
			</div>
		</div>		
		<!-- Tag Manager ID Row -->
		<div class="row">
			<div class="mb-3 col-sm-12">
				<label for="ca_google_tag_manager_id" class="d-block mb-0"><strong>Tag Manager ID</strong></label>
				<small class="mb-2 text-muted d-block">Enter your unique Google Tag Manager ID, if you don't have one see an administrator.</small>
				<small class="mb-2 text-muted d-block">Note: If you fill out the Analytics field above with the same UA-xxxxxxxx code as you implement via Google Tag Manager, you will get duplicate reporting within Google Analytics.</small>
				<!-- Tag Manager ID Field -->
				<input type="text" name="ca_google_tag_manager_id" id="ca_google_tag_manager_id" class="form-control w-25" value="<?php print esc_attr( $google_tag_manager_id ); ?>" >
			</div>
		</div>
		<!-- Meta ID Row -->
		<div class="row">
			<div class="mb-3 col-sm-5">
				<label for="ca_google_meta_id" class="d-block mb-0"><strong>Site Verification Meta ID</strong></label>
				<small class="mb-2 text-muted d-block">Enter your unique Google Site Verification Meta ID, if you don't have one see an administrator.</small>
				<!-- Meta ID Field -->
				<input type="text" name="ca_google_meta_id" id="ca_google_meta_id" class="form-control" value="<?php print esc_attr( $google_meta_id ); ?>" >
			</div>
		</div>

		<!-- Google Translate Row -->
		<div class="row">
			<div class="mb-3" role="radiogroup" aria-label="Google Translate Modes">
				<strong>Enable Google Translate</strong>
				<small class="mb-2 text-muted d-block">Displays the Google translate feature at the top right of each page.</small>
				<!-- Google Translate None -->
				<div class="form-check form-check-inline">
					<input class="form-check-input mt-1" type="radio" name="ca_google_trans_enabled" id="ca_google_trans_enabled_none" value="none"<?php print empty( $google_translate_mode ) || false === $google_translate_mode || 'none' === $google_translate_mode ? ' checked' : ''; ?>>
					<label class="form-check-label" for="ca_google_trans_enabled_none">None</label>
				</div>

				<!-- Google Translate Standard -->
				<div class="form-check form-check-inline">
					<input class="form-check-input mt-1" type="radio" value="standard" name="ca_google_trans_enabled" id="ca_google_trans_enabled_standard" <?php print true === $google_translate_mode || 'standard' === $google_translate_mode ? ' checked' : ''; ?>>
					<label class="form-check-label" for="ca_google_trans_enabled_standard">Standard</label>
				</div>

				<!-- Google Translate Custom -->
				<div class="form-check form-check-inline">
					<input class="form-check-input mt-1" type="radio" id="ca_google_trans_enabled_custom" value="custom" name="ca_google_trans_enabled" <?php print 'custom' === $google_translate_mode ? ' checked' : ''; ?>>
					<label class="form-check-label" for="ca_google_trans_enabled_custom">Custom</label>
				</div>
			</div>
		</div>

		<!-- Google Translate Custom Extras -->
		<div class="row collapse <?php print 'custom' === $google_translate_mode ? ' show' : ''; ?>" id="ca_google_trans_enabled_custom_extras">
			<!-- Google Translate Page -->
			<div class="mb-3 col-sm-5">
				<label for="ca_google_trans_page" class="d-block mb-0"><strong>Translate Page</strong></label>
				<small class="mb-2 text-muted d-block">Select a Page/Post where the Google Translate Service is located.</small>
				<!-- Translate Page Field -->
				<input type="text" name="ca_google_trans_page" id="ca_google_trans_page" class="form-control" value="<?php print esc_attr( $google_translate_page ); ?>" >
			</div>

			<!-- Google Translate Text -->
			<div class="form-group col-sm-5">
				<label for="ca_google_trans_text" class="d-block mb-0"><strong>Translate Link Text</strong></label>
				<small class="mb-2 text-muted d-block">Add text to the Google Translate Service link.</small>
				<!-- Translate Text Field -->
				<input type="text" name="ca_google_trans_text" id="ca_google_trans_text" class="form-control" value="<?php print esc_attr( $google_translate_text ); ?>" >
			</div>

			<div class="col-sm-2 d-flex align-items-end">
				<div class="form-check form-switch">
					<!-- Open Translate in New Page -->
					<input type="checkbox" class="form-check-input mt-1" id="ca_google_trans_page_new_window" name="ca_google_trans_page_new_window" <?php print esc_attr( $google_translate_new_window ); ?> />
					<label for="ca_google_trans_page_new_window" class="d-block mb-0 form-check-label"><strong>Open in New Tab</strong></label>
					<small class="mb-2 text-muted d-block">Open link in new tab.</small>
				</div>
			</div>

			<!-- Google Translate Icon -->
			<div class="mb-3 col-sm-12">
				<?php
				print wp_kses(
					caweb_icon_menu(
						array(
							'select' => $google_translate_icon,
							'name'   => 'ca_google_trans_icon',
							'header' => 'Icon',
						)
					),
					'post'
				);
				?>
				<small class="mb-2 text-muted d-block">Select an icon to display in front of the Google Translate Page link.</small>
			</div>

			<div class="mb-3 col-sm-6">
				<label for="caweb-google-trans-shorcode" class="d-block mb-0"><strong>Google Translate Shortcode</strong></label>
				<small class="mb-2 text-muted d-block">Paste this shortcode on any page to render Google Translate.</small>
				<input id="caweb-google-trans-shorcode" type="text" class="form-control" readonly value="[caweb_google_translate /]">
			</div>
		</div>
	</div>
	<?php
}

/**
 * Main Entry Point for CAWeb Options Social Media Links
 *
 * @param  boolean $is_active If this is the active tab.
 * @return void
 */
function caweb_display_social_media_settings( $is_active = false ) {
	?>
	<!-- Social Media Links -->
	<div class="p-2 collapse<?php print $is_active ? ' show' : ''; ?>" id="social-share" data-bs-parent="#caweb-settings">
		<?php do_action('caweb_options_social_media_custom_fields'); ?>
		<div class="row">
			<div class="mb-3">
				<h2 class="d-inline">Social Media Links</h2>
			</div>
		</div>
		<?php
		$social_options = caweb_get_social_media_links();

		foreach ( $social_options as $social => $option ) {
			$share_email        = 'ca_social_email' === $option ? true : false;
			$social             = $share_email ? "Share via $social" : $social;
			$header_checked     = get_option( sprintf( '%1$s_header', $option ) ) ? ' checked' : '';
			$footer_checked     = get_option( sprintf( '%1$s_footer', $option ) ) ? ' checked' : '';
			$new_window_checked = get_option( sprintf( '%1$s_new_window', $option ) ) ? ' checked' : '';
			$hover_text         = get_option( sprintf( '%1$s_hover_text', $option ), "Share via $social" );
			?>
					<div class="row">
						<a class="collapsed d-block text-decoration-none" data-bs-toggle="collapse" href="#<?php print esc_attr( $option ); ?>-settings" role="button" aria-expanded="false" aria-controls="<?php print esc_attr( $option ); ?>-settings">
							<h2 class="d-inline"><?php print esc_attr( $social ); ?> <span class="text-secondary ca-gov-icon-"></span></h2>
						</a>
					</div>
					<div class="row collapse pt-2" id="<?php print esc_attr( $option ); ?>-settings">
						<?php if ( ! $share_email ) : ?>
						<!-- Option URL -->
						<div class="mb-3 col-md-12">
							<input type="text" class="form-control w-50" name="<?php print esc_attr( $option ); ?>" aria-label="<?php print esc_attr( $social ); ?>" value="<?php print esc_url( get_option( $option ) ); ?>" />
							<small class="text-muted d-block">Enter social media URL share link.</small>
						</div>
						<?php endif; ?>
						<!-- Show in header -->
						<div class="mb-3 col-sm-3">
							<div class="form-check form-switch">
								<input type="checkbox" class="form-check-input mt-1" id="<?php print esc_attr( $option ); ?>_header" name="<?php print esc_attr( $option ); ?>_header" <?php print esc_attr( $header_checked ); ?>>
								<label for="<?php print esc_attr( $option ); ?>_header" class="d-block form-check-label"><strong>Show in header:</strong></label>
								<small class="text-muted d-block">Display social link in the utility header.</small>
							</div>
						</div>
						<!-- Show in footer -->
						<div class="mb-3 col-sm-3">
							<div class="form-check form-switch">
								<input type="checkbox" class="form-check-input mt-1" id="<?php print esc_attr( $option ); ?>_footer" name="<?php print esc_attr( $option ); ?>_footer" <?php print esc_attr( $footer_checked ); ?>>
								<label for="<?php print esc_attr( $option ); ?>_footer" class="d-block form-check-label"><strong>Show in footer:</strong></label>
								<small class="text-muted d-block">Display social link in the footer.</small>
							</div>
						</div>
						<?php if ( ! $share_email ) : ?>
						<!-- Open in New Tab -->
						<div class="mb-3 col-sm-3">
							<div class="form-check form-switch">
								<input type="checkbox" class="form-check-input mt-1" id="<?php print esc_attr( $option ); ?>_new_window" name="<?php print esc_attr( $option ); ?>_new_window" <?php print esc_attr( $new_window_checked ); ?>>
								<label for="<?php print esc_attr( $option ); ?>_new_window" class="d-block form-check-label"><strong>Open in New Tab:</strong></label>
								<small class="text-muted d-block">Open link in new tab.</small>
							</div>
						</div>
						<!-- Hover Text -->
						<div class="mb-3 col-sm-3">
							<label for="<?php print esc_attr( $option ); ?>_hover_text" class="d-block"><strong>Hover Text:</strong></label>
							<small class="text-muted d-block">Text displayed on mouse hover.</small>
							<input type="text" id="<?php print esc_attr( $option ); ?>_hover_text" name="<?php print esc_attr( $option ); ?>_hover_text" value="<?php print esc_attr( wp_unslash( $hover_text ) ); ?>">
						</div>
						<?php endif; ?>
					</div>
				<?php
		}
		?>
	</div>
	<?php
}

/**
 * Main Entry Point for CAWeb Options Custom CSS & Custom JS
 *
 * @param  boolean $is_active If this is the active tab.
 * @param  string  $file_type Either building CSS or JS Page.
 * @return void
 */
function caweb_display_custom_file_settings( $is_active = false, $file_type = 'css' ) {
	// External File Directory URI.
	$ext_file_dir = sprintf( '%1$s/%2$s', CAWEB_EXTERNAL_URI, $file_type );

	// Uploaded File.
	$ext_files             = get_option( "caweb_external_$file_type", array() );
	$ext_file_input_name   = "caweb_external_{$file_type}[]";
	$ext_file_data_section = "custom-$file_type";

	// Descriptive.
	$desc = 'css' === $file_type ? 'styles' : 'scripts';
	?>
	<!-- Custom <?php print esc_attr( strtoupper( $file_type ) ); ?> Section -->
	<div class="p-2 collapse<?php print $is_active ? ' show' : ''; ?>" id="custom-<?php print esc_attr( $file_type ); ?>" data-bs-parent="#caweb-settings">
		<?php do_action("caweb_options_custom_{$file_type}_custom_fields"); ?>
		<!-- Custom Uploaded <?php print esc_attr( strtoupper( $file_type ) ); ?> -->
		<div class="row">
			<div class="mb-3">
				<h2 class="d-inline">Import <?php print esc_attr( strtoupper( $file_type ) ); ?></h2>
				<button class="btn btn-primary" id="add-<?php print esc_attr( $file_type ); ?>">New File</button>
				<small class="form-text mb-2 text-muted">Any <?php print esc_attr( $desc ); ?> added will override any pre-existing <?php print esc_attr( $desc ); ?>. Uploaded <?php print esc_attr( $desc ); ?> load at the bottom of the head in the order listed. To adjust the order, click and drag the name of the file in the order you would like.</small>
			</div>
			<div class="mb-3 col-lg-12">
				<ul class="list-group" id="uploaded-<?php print esc_attr( $file_type ); ?>">
					<?php
					foreach ( $ext_files as $name ) :
						?>
						<li class="list-group-item">
							<a href="<?php print esc_url( "$ext_file_dir/$name" ); ?>?TB_iframe=true&width=600&height=550" title="<?php print esc_attr( $name ); ?>" class="text-decoration-none thickbox dashicons dashicons-visibility preview-<?php print esc_attr( $file_type ); ?> text-success align-middle"></a>
							<a href="<?php print esc_url( "$ext_file_dir/$name" ); ?>" download="<?php print esc_attr( $name ); ?>" title="<?php print esc_attr( $name ); ?>" class="text-decoration-none dashicons dashicons-download download-<?php print esc_attr( $file_type ); ?> align-middle"></a>
							<a title="<?php print esc_attr( $name ); ?>" class="dashicons dashicons-dismiss remove-<?php print esc_attr( $file_type ); ?> text-danger align-middle"></a>
							<input type="hidden" name="<?php print esc_attr( $ext_file_input_name ); ?>" data-section="<?php print esc_attr( $ext_file_data_section ); ?>" value="<?php print esc_attr( $name ); ?>"><?php print esc_attr( $name ); ?>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
		</div>
	</div>
	<?php
}

/**
 * Main Entry Point for CAWeb Options Alert Banners
 *
 * @param  boolean $is_active If this is the active tab.
 * @return void
 */
function caweb_display_alert_banner_settings( $is_active = false ) {
	$alerts           = get_option( 'caweb_alerts', array() );
	$statewide_alerts = get_option( 'caweb_statewide_alert_enabled', false ) ? ' checked' : '';
	?>
	<!-- Alert Banners -->
	<div class="p-2 collapse<?php print $is_active ? ' show' : ''; ?>" id="alert-banners" data-bs-parent="#caweb-settings">
		<?php do_action('caweb_options_alert_banner_custom_fields'); ?>
		<div class="row">
			<!-- StateWide Alert -->
			<div class="mb-3 col-sm-12">
				<div class="form-check form-switch">
					<input type="checkbox" class="form-check-input mt-1" name="caweb_statewide_alert_enabled" id="caweb_statewide_alert_enabled" <?php print esc_attr( $statewide_alerts ); ?>>
					<label for="caweb_statewide_alert_enabled" class="d-block mb-0 form-check-label"><strong>Enable Statewide Alerts</strong></label>
					<small class="text-muted d-block">This will enable the California Statewide alerts functionality.</small>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="mb-3">
				<h2 class="d-inline">Create an Alert Banner </h2>
				<button class="btn btn-primary" id="add-alert">New Banner</button>
				<small class="mb-2 text-muted d-block">Add Alert Banner</small>
			</div>
		</div>

		<ol id="caweb-alert-banners" class="ml-3">
			<?php
			if ( ! empty( $alerts ) ) {
				foreach ( $alerts as $a => $data ) :
					$header         = wp_unslash( $data['header'] );
					$default_header = ! empty( $header ) ? wp_unslash( $header ) : 'Label';
					$count          = $a + 1;
					$status         = empty( $data['status'] ) ? ' checked' : '';
					$alert_home     = 'home' === $data['page_display'] ? ' checked' : '';
					$alert_all      = 'all' === $data['page_display'] ? ' checked' : '';

					$banner_color = $data['color'];

					$readmore        = 'on' === $data['button'] ? ' checked' : '';
					$readmore_text   = isset( $data['text'] ) && ! empty( $data['text'] ) ? wp_unslash( substr( $data['text'], 0, 16 ) ) : 'More Information';
					$readmore_url    = $data['url'];
					$readmore_target = '_blank' === $data['target'] || 'on' === $data['target'] ? ' checked' : '';

					$alert_icon = $data['icon'];
					?>
			<li class="pl-2">
				<!-- Alert Banner Row -->
				<div class="row">
					<a class="collapsed d-block text-decoration-none" data-bs-toggle="collapse" href="#alert-banner-<?php print esc_attr( $count ); ?>" aria-expanded="false" aria-controls="alert-banner-<?php print esc_attr( $count ); ?>">
						<h2 class="d-inline"><?php print esc_attr( $default_header ); ?> <span class="text-secondary ca-gov-icon-"></span></h2>
					</a>
					<!-- Alert Options -->
					<div>
						<input type="checkbox" class="btn-check" id="alert-status-<?php print esc_attr( $count ); ?>" name="alert-status-<?php print esc_attr( $count ); ?>" <?php print esc_attr( $status ); ?>>
						<label class="btn btn-success" for="alert-status-<?php print esc_attr( $count ); ?>"></label>
						<button class="btn btn-danger remove-alert">Remove</button>
					</div>

					<!-- Alert Banner Fields -->
					<div id="alert-banner-<?php print esc_attr( $count ); ?>" class="row col-sm-12 p-2 collapse">
					<!-- Alert Banner Title -->
					<div class="mb-3 col-sm-7">
						<label for="alert-header-<?php print esc_attr( $count ); ?>" class="mb-0"><strong>Title</strong></label>
						<small class="text-muted d-block mb-2">Enter header text for the alert.</small>
						<input placeholder="Label" class="form-control" id="alert-header-<?php print esc_attr( $count ); ?>" name="alert-header-<?php print esc_attr( $count ); ?>" type="text" value="<?php print esc_attr( $header ); ?>">
					</div>

					<!-- Alert Banner Message -->
					<div class="mb-3 col-sm-12">
						<label for="alert-message-<?php print esc_attr( $count ); ?>"><strong>Message</strong></label>
						<small class="text-muted d-block mb-2">Enter message for the alert</small>
						<?php
							// phpcs:disable
							print wp_editor( stripslashes( $data['message'] ), "alert-message-$count", caweb_tiny_mce_settings() ); 
							// phpcs:enable
						?>
					</div>

					<!-- Alert Banner Settings -->
					<div class="mb-3 col-sm-12">
						<!-- Display On -->
						<div class="mb-3 col-sm" role="radiogroup" aria-label="Alert Display On Options">
								<label class="d-block mb-0"><strong>Display on</strong></label>
								<small class="text-muted d-block mb-2">Select whether alert should display on home page or on all pages.</small>
								<div class="form-check form-check-inline">
									<input 
										id="alert-display-home-<?php print esc_attr( $count ); ?>" 
										name="alert-display-<?php print esc_attr( $count ); ?>" 
										class="form-check-input mt-1" 
										type="radio" 
										value="home"
										<?php print esc_attr( $alert_home ); ?>>
									<label class="form-check-label" for="alert-display-home-<?php print esc_attr( $count ); ?>">Home Page Only</label>
								</div>
								<div class="form-check form-check-inline">
									<input 
										id="alert-display-all-<?php print esc_attr( $count ); ?>" 
										name="alert-display-<?php print esc_attr( $count ); ?>" 
										class="form-check-input mt-1" 
										type="radio" 
										value="all"
										<?php print esc_attr( $alert_all ); ?>>
									<label class="form-check-label" for="alert-display-all-<?php print esc_attr( $count ); ?>">All Pages</label>
								</div>
							</div>

							<!-- Banner Color -->
							<div class="mb-3 col-sm">
								<label for="alert-banner-color-<?php print esc_attr( $count ); ?>"><strong>Banner Color</strong></label>
								<small class="text-muted d-block mb-2">Select a color for the alert banner.</small>
								<input type="color" id="alert-banner-color-<?php print esc_attr( $count ); ?>" name="alert-banner-color-<?php print esc_attr( $count ); ?>" value="<?php print esc_attr( $banner_color ); ?>" class="form-control-sm">
							</div>

							<!-- Read More Button -->
							<div class="mb-3 col-sm">
								<div class="form-check form-switch">
									<input type="checkbox" class="form-check-input mt-1" id="alert-read-more-<?php print esc_attr( $count ); ?>" name="alert-read-more-<?php print esc_attr( $count ); ?>" <?php print esc_attr( $readmore ); ?> >
									<label for="alert-read-more-<?php print esc_attr( $count ); ?>" class="d-block mb-0 form-check-label">Read More Button Text</label>
								</div>
							</div>

							<div id="alert-read-more-<?php print esc_attr( $count ); ?>" class="collapse<?php print ! empty( $readmore ) ? ' show' : ''; ?>">
								<!-- Read More Button Text -->
								<div class="mb-3 col-sm-6">
									<label for="alert-read-more-text-<?php print esc_attr( $count ); ?>" class="d-block mb-0"><strong>Read More Button Text</strong></label>
									<input type="text" id="alert-read-more-text-<?php print esc_attr( $count ); ?>" name="alert-read-more-text-<?php print esc_attr( $count ); ?>" maxlength="16" class="form-control" value="<?php print esc_attr( $readmore_text ); ?>">
									<small class="text-muted">(Max Characters: 16)</small>
								</div>

								<!-- Read More Button URL -->
								<div class="mb-3 col-sm-6 d-inline-block">
									<label for="alert-read-more-url-<?php print esc_attr( $count ); ?>" class="d-block mb-0"><strong>Read More Button URL</strong></label>
									<input type="text" id="alert-read-more-url-<?php print esc_attr( $count ); ?>" name="alert-read-more-url-<?php print esc_attr( $count ); ?>" class="form-control" value="<?php print esc_url( $readmore_url ); ?>">
								</div>

								<!-- Read More Button Target -->
								<div class="col-sm-4 d-inline-block">
									<div class="form-check form-switch">
										<input type="checkbox" class="form-check-input mt-1" id="alert-read-more-target-<?php print esc_attr( $count ); ?>" name="alert-read-more-target-<?php print esc_attr( $count ); ?>" <?php print esc_attr( $readmore_target ); ?>>
										<label for="alert-read-more-target-<?php print esc_attr( $count ); ?>"class="d-block mb-0 form-check-label"><strong>Open link in New Tab</strong></label>
									</div>
								</div>
							</div>

							<!-- Banner Icon -->
							<div class="mb-3 col-sm-12 d-inline-block">
								<?php
								print wp_kses(
									caweb_icon_menu(
										array(
											'select' => $alert_icon,
											'name'   => "alert-icon-$count",
											'header' => 'Icon',
										)
									),
									'post'
								);
								?>
							</div>
					</div>
				</div>
			</li>
					<?php
				endforeach;
			}
			?>
			<input id="caweb_alert_count" type="hidden" name="caweb_alert_count" value="<?php print ! empty( $alerts ) ? count( $alerts ) : 0; ?>">
		</ol>
	</div>
	<?php
}

/**
 * Main Entry Point for CAWeb Options Additional Features
 *
 * @param  boolean $is_active If this is the active tab.
 * @return void
 */
function caweb_display_additional_features_settings( $is_active = false ) {
	$directory                    = wp_upload_dir();
	$file                         = $directory['basedir'] . '/pdf-word-sitemap.xml';
	$file_url                     = file_exists( $file ) ? sprintf( 'File location: <a href="%1$s%2$s" target="_blank">Document Map</a>', $directory['baseurl'], '/pdf-word-sitemap.xml' ) : '';
	$cap                          = is_multisite() ? 'manage_network_options' : 'manage_options';
	$live_drafts_enabled          = get_option( 'caweb_live_drafts', false ) ? ' checked' : '';
	$caweb_debug_mode_enabled     = get_option( 'caweb_debug_mode', false ) ? ' checked' : '';
	$caweb_body_classes           = wp_unslash( get_option( 'caweb_body_classes', '' ) );
	$caweb_page_container_classes = wp_unslash( get_option( 'caweb_page_container_classes', '' ) );
	$caweb_main_content_classes   = wp_unslash( get_option( 'caweb_main_content_classes', '' ) );

	?>
	<div class="p-2 collapse<?php print $is_active ? ' show' : ''; ?>" id="additional-features" data-bs-parent="#caweb-settings">
		<?php do_action('caweb_options_advanced_custom_fields'); ?>
		<div class="row">
			<!-- Document Map -->
			<div class="mb-3 col-sm-12">
				<strong>Document Map</strong>
				<button class="doc-sitemap btn btn-primary btn-sm">Generate</button>
				<small class="doc-sitemap-update text-muted"><?php print esc_url( $file_url ); ?></small>
			</div>
		</div>
		<div class="row<?php print ! current_user_can( $cap ) ? ' d-none' : ''; ?>">
			<!-- Live Drafts Option -->
			<div class="mb-3 col-sm-12">
				<div class="form-check form-switch">
					<input type="checkbox" class="form-check-input mt-1" name="caweb_live_drafts" id="caweb_live_drafts" <?php print esc_attr( $live_drafts_enabled ); ?>>
					<label for="caweb_live_drafts" class="d-block mb-0 form-check-label"><strong>Enable Live Drafts</strong></label>
					<small class="text-muted d-block">This will enable the live drafts functionality.</small>
				</div>
			</div>
		</div>
		<div class="row<?php print ! current_user_can( $cap ) ? ' d-none' : ''; ?>">
			<!-- Enable Debug -->
			<div class="mb-3 col-sm-12">
				<div class="form-check form-switch">
				<input type="checkbox" class="form-check-input mt-1" name="caweb_debug_mode" id="caweb_debug_mode" <?php print esc_attr( $caweb_debug_mode_enabled ); ?>>
					<label for="caweb_debug_mode" class="d-block mb-0 form-check-label"><strong>Enable Debug Mode</strong></label>
					<small class="text-muted d-block">This will enable debug mode.</small>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="mb-3 col-sm-12 col-md-6">
				<!-- body classes -->
				<label for="caweb_body_classes" class="d-block mb-0"><strong>Body Classes</strong></label>
				<small class="mb-2 text-muted d-block">Additional class names for the body tag. Separate class names by spaces.</small>
				<input type="text" name="caweb_body_classes" id="caweb_body_classes" value="<?php print esc_attr( $caweb_body_classes ); ?>" class="form-control">
			</div>
		</div>
		<div class="row">
			<div class="mb-3 col-sm-12 col-md-6">
				<!-- page container classes -->
				<label for="caweb_page_container_classes" class="d-block mb-0"><strong>Page Container Classes</strong></label>
				<small class="mb-2 text-muted d-block">Additional class names for the body tag. Separate class names by spaces.</small>
				<input type="text" name="caweb_page_container_classes" id="caweb_page_container_classes" value="<?php print esc_attr( $caweb_page_container_classes ); ?>" class="form-control">
			</div>
		</div>
		<div class="row">
			<div class="mb-3 col-sm-12 col-md-6">
				<!-- main content classes -->
				<label for="caweb_main_content_classes" class="d-block mb-0"><strong>Main Content Classes</strong></label>
				<small class="mb-2 text-muted d-block">Additional class names for the body tag. Separate class names by spaces.</small>
				<input type="text" name="caweb_main_content_classes" id="caweb_main_content_classes" value="<?php print esc_attr( $caweb_main_content_classes ); ?>" class="form-control">
			</div>
		</div>
	</div>
	<?php
}
