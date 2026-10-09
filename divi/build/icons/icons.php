<?php

add_filter('divi_icon_library_font_icon_types', 'caweb_icon_library_font_icon_types');
add_filter('divi_icon_library_font_icon_filter_options', 'caweb_icon_library_font_icon_filter_options');
add_filter('divi_icon_library_font_icon_families', 'caweb_icon_library_font_icon_families');
add_filter('divi_icon_library_font_icon_list', 'caweb_icon_library_font_icon_list');

function caweb_icon_library_font_icon_types( $types ) {
    $types[] = 'caweb';
    return $types;
}

function caweb_icon_library_font_icon_filter_options( $options ) {
    $options['caweb']['label'] = 'CAWeb Icons';
    return $options;
}

function caweb_icon_library_font_icon_families( $families ) {
    $families['caweb'] = 'CaGov';
    return $families;
}

function caweb_icon_library_font_icon_list( $icons ) {
    global $wp_filesystem;

    $icon_list_filename = dirname( __DIR__ ) . '/icons/iconList.json';

    $caweb_symbols = json_decode( $wp_filesystem->get_contents( $icon_list_filename ), true );
		
    return array_merge( $icons, $caweb_symbols );
}


?>