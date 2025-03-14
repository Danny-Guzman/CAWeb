<?php
/**
 * CAWeb Theme Filters
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/* WP Filters */
add_filter( 'body_class', 'caweb_body_class', 20, 2 );
add_filter( 'post_class', 'caweb_post_class', 15 );
add_filter( 'theme_page_templates', 'caweb_theme_page_templates', 15 );
add_filter( 'script_loader_tag', 'caweb_script_loader_tag', 10, 3 );
add_filter( 'map_meta_cap', 'caweb_add_unfiltered_html_capability', 1, 3 );
add_filter( 'allowed_redirect_hosts', 'caweb_allowed_redirect_hosts' );
add_filter( 'xmlrpc_enabled', 'caweb_xmlrpc_enabled' );
add_filter( 'wp_kses_allowed_html', 'caweb_allowed_html', 10, 2 );

add_action( 'template_redirect', 'caweb_redirect_if_author_parameter' );

if ( defined( 'PHP_INT_MAX' ) ) {
	add_filter( 'pre_option_uploads_use_yearmonth_folders', 'caweb_pre_uploads_use_yearmonth_folders', PHP_INT_MAX );
}


/**
 * Plugin Filters
 */
// The Events Calendar.
add_filter( 'tribe_default_events_template_classes', 'caweb_default_events_template_classes' );

  
  
/**
 * CAWeb Page Body Class
 *
 * Filters the list of CSS body class names for the current post or page.
 *
 * @link https://developer.wordpress.org/reference/hooks/body_class/
 * @param  array $wp_classes An array of body class names.
 * @param  array $extra_classes An array of additional class names added to the body.
 *
 * @wp_filter add_filter( 'body_class','caweb_body_class' , 20 , 2 );
 * @return array
 */
function caweb_body_class( $wp_classes, $extra_classes ) {
	global $post;
	$user_classes     = wp_unslash( get_option( 'caweb_body_classes', '' ) );
	$whitelist		= array();
	// Add user body class names to extra classes.
	$extra_classes = array_merge( $extra_classes, explode( ' ', $user_classes ) );

	/* List of the classes that need to be removed */
	$blacklist = array(
		'et_secondary_nav_dropdown_animation_fade',
		'et_primary_nav_dropdown_animation_fade',
		'et_fixed_nav',
		'et_show_nav',
		'et_right_sidebar',
	);

	/* List of extra classes that need to be added to the body */
	if ( isset( $post->ID ) ) {

		$whitelist = array(
			( 'on' === get_post_meta( $post->ID, 'ca_custom_post_title_display', true ) ? 'title-displayed' : '' ),
		);

		/* Add builder classes */
		if ( caweb_is_divi_used( $wp_classes ) ) {
			$whitelist[] = 'divi-built';
		} else{
			// if using Classic Editor ( tinyMCE not Gutenberg ) add this class.
			if( is_plugin_active('classic-editor/classic-editor.php') || ! use_block_editor_for_post( $post ) ){
				$whitelist[] = 'classic-built';
			}

			// if displaying sidebar not on pages.
			if( ! is_page() && is_active_sidebar( 'sidebar-1' ) ){
				$whitelist[] = 'sidebar-displayed';
			}
		}
	}

	// Merge any extra classes to the wp classes.
	$wp_classes = array_merge( $wp_classes, $extra_classes );

	/* Remove any classes in the blacklist from the wp_classes */
	$wp_classes = array_diff( $wp_classes, $blacklist );

	/* Return filtered wp class */
	return array_merge( $wp_classes, (array) $whitelist );
}

/**
 * CAWeb Post Body Class
 *
 * @link https://developer.wordpress.org/reference/hooks/post_class/
 * @param  array $classes An array of post class names.
 * @wp_filter add_filter( 'post_class','caweb_post_class' , 15 );
 * @return array
 */
function caweb_post_class( $classes ) {
	global $post;

	if ( has_post_thumbnail( $post->ID ) && '' === get_the_post_thumbnail_url( $post->ID ) ) {
		unset( $classes[ array_search( 'has-post-thumbnail', $classes, true ) ] );
	}

	return $classes;
}

/**
 * CAWeb Theme Page Templates
 * Filters list of page templates for a theme.
 *
 * @link https://developer.wordpress.org/reference/hooks/theme_page_templates/
 * @param  array $templates Array of page templates. Keys are filenames, values are translated names.
 *
 * @return array
 */
function caweb_theme_page_templates( $templates ) {
	/* Remove Divi Blank Page Template */
	unset( $templates['page-template-blank.php'] );

	return $templates;
}

/**
 * CAWeb Script Loader Tags
 * Filters the HTML script tag of an enqueued script.
 *
 * @param  string $tag The <script> tag for the enqueued script.
 * @param  string $handle The script's registered handle.
 * @param  string $src The script's source URL.
 *
 * @return string
 */
function caweb_script_loader_tag( $tag, $handle, $src ) {
	/* Defer some scripts */
	$js_scripts = array( 'cagov-statewide-alerts' );

	if ( in_array( $handle, $js_scripts, true ) ) {
		$tag = str_replace( 'src', 'defer crossorigin="anonymous" src', $tag );
	}

	return $tag;
}

/**
 * Enable unfiltered_html capability for Administrators.
 *
 * @param  array  $caps    The user's capabilities.
 * @param  string $cap     Capability name.
 * @param  int    $user_id The user ID.
 * @return array  $caps    The user's capabilities, with 'unfiltered_html' potentially added.
 */
function caweb_add_unfiltered_html_capability( $caps, $cap, $user_id ) {
	if ( 'unfiltered_html' === $cap && user_can( $user_id, 'administrator' ) ) {
		$caps = array( 'unfiltered_html' );
	}

	return $caps;
}

/**
 * Allows filtering the classes for the main element for the /events/ page.
 *
 * @since 5.8.0
 *
 * @param array<string> $classes An (unindexed) array of classes to apply.
 */
function caweb_default_events_template_classes( $classes ) {
	$classes[] = 'main-content';

	return $classes;
}

/**
 * CAWeb Disable XMLRPC
 *
 * @return boolean
 */
function caweb_xmlrpc_enabled() {
	return false;
}

/**
 * Override WPVIP hard coding this option.
 *
 * @param  string $value Whether to organize media files by yyyy/mm, Default 1.
 * @return string
 */
function caweb_pre_uploads_use_yearmonth_folders( $value ) {
	return get_option( 'caweb_uploads_use_yearmonth_folders', '1' );
}

/**
 * CAWeb Allowed Redirected Hosts
 *
 * Filters the list of allowed hosts to redirect to.
 *
 * @param  array $hosts An array of allowed host names.
 * @return array
 */
function caweb_allowed_redirect_hosts( $hosts ) {
	// Add all sites to list of allowed hosts on multisite.
	if ( is_multisite() ) {
		$domains = array_map(
			function ( $s ) {
				return $s->domain;
			},
			get_sites( array( 'deleted' => 0 ) )
		);

		$hosts = array_merge( $hosts, $domains );
	}

	return $hosts;
}


/**
 * CAWeb Allowed HTML for wp_kses
 *
 * @link https://developer.wordpress.org/reference/functions/wp_kses/
 * @link https://developer.wordpress.org/reference/functions/wp_kses_allowed_html/
 *
 * @param  array        $allowedposttags HTML tags to include.
 * @param  string|array $context The context for which to retrieve tags. Allowed values are 'post', 'strip', 'data', 'entities', or the name of a field filter such as 'pre_user_description'.
 * @return array
 */
function caweb_allowed_html( $allowedposttags, $context ) {

	if ( 'post' !== $context ) {
		return $allowedposttags;
	}

	$specials = array(
		'aria-expanded' => true,
		'aria-haspopup' => true,
		'onkeydown'     => true,
		'onkeypress'    => true,
		'onkeyup'       => true,
		'onclick'       => true,
		'onfocus'       => true,
		'onfocusin'     => true,
		'onfocusout'    => true,
		'onmousedown'   => true,
		'onmouseup'     => true,
		'onmouseover'   => true,
	);

	foreach ( $allowedposttags as $tag => $data ) {
		$data = array_merge( $data, $specials );
		ksort( $data );
		$allowedposttags[ $tag ] = $data;
	}

	$allowedposttags['bold']   = $allowedposttags['strong'];
	$allowedposttags['style']  = array();
	$allowedposttags['script'] = array();

	$default_attrs = array(
		'aria-describedby' => true,
		'aria-details'     => true,
		'aria-expanded'    => true,
		'aria-label'       => true,
		'aria-labelledby'  => true,
		'aria-haspopup'    => true,
		'aria-hidden'      => true,
		'class'            => true,
		'data-*'           => true,
		'id'               => true,
		'role'             => true,
		'style'            => true,
		'title'            => true,
	);

	$input_attrs = array_merge(
		$default_attrs,
		array(
			'for'      => true,
			'type'     => true,
			'name'     => true,
			'value'    => true,
			'title'    => true,
			'checked'  => true,
			'selected' => true,
			'required' => true,
			'pattern'  => true,
		)
	);

	$allowedposttags['form'] = array_merge(
		$default_attrs,
		array(
			'action'         => true,
			'accept'         => true,
			'accept-charset' => true,
			'enctype'        => true,
			'method'         => true,
			'name'           => true,
			'novalidate'     => true,
			'target'         => true,
		)
	);

	$form_tags = array(
		'label'    => $input_attrs,
		'input'    => $input_attrs,
		'li'       => $input_attrs,
		'select'   => $input_attrs,
		'option'   => $input_attrs,
	);

	$allowedposttags = array_merge( $allowedposttags, $form_tags );

	ksort( $allowedposttags );

	add_filter( 'safe_style_css', 'caweb_safe_style_css' );

	return $allowedposttags;
}

/**
 * Safe Style CSS
 *
 * @see https://developer.wordpress.org/reference/functions/safecss_filter_attr/
 *
 * @param  array $styles A string of CSS rules.
 * @return array
 */
function caweb_safe_style_css( $styles ) {
	$styles[] = 'list-style-position';

	return $styles;
}

/**
 * Redirects to home page if Author Parameter is in the URL
 *
 * @see https://www.wp-tweaks.com/hackers-can-find-your-wordpress-username/#fix-2-adding-a-code-snippet-to-wordpress
 *
 * @return void
 */
function caweb_redirect_if_author_parameter() {
	$is_author_set = get_query_var( 'author', '' );

	if ( ! empty( $is_author_set ) && ! is_admin() ) {
		wp_safe_redirect( home_url(), 301 );
		exit;
	}
}
