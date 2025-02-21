<?php
/**
 * Loads CAWeb footer area.
 * php version 8.0.28
 *
 * @package CAWeb
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// phpcs:disable
foreach ( $args as $var => $val ) {
	$$var = $val;
}
// phpcs:enable

$caweb_menuitems = wp_get_nav_menu_items( $menu->term_id, array( 'order' => 'DESC' ) );

?>
<ul class="nav footer-links ">
	<li class="nav-item">
        <a href="https://www.ca.gov" class="nav-link ps-0" title="CA.gov" target="_blank">
            <span class="ca-gov-logo-svg"></span>
        </a>
    </li>

			<?php
			foreach ( $caweb_menuitems as $caweb_item ) {
				if ( ! $caweb_item->menu_item_parent ) {
					?>
						<li
							<?php if ( ! empty( $caweb_item->classes ) ) : ?>
							class="nav-item <?php print esc_attr( implode( ' ', $caweb_item->classes ) ); ?>"
							<?php endif; ?>
							<?php if ( ! empty( $caweb_item->attr_title ) ) : ?>
							title="<?php print esc_attr( $caweb_item->attr_title ); ?>"
							<?php endif; ?>
						>
							<a 
								class="nav-link"
								href="<?php print esc_url( $caweb_item->url ); ?>"
								<?php if ( ! empty( $caweb_item->xfn ) ) : ?>
								rel="<?php print esc_attr( $caweb_item->xfn ); ?>"
								<?php endif; ?>
								<?php if ( ! empty( $caweb_item->target ) ) : ?>
								target="<?php print esc_attr( $caweb_item->target ); ?>" 
								<?php endif; ?>
							><?php print esc_html( $caweb_item->title ); ?></a>
						</li>
					<?php
				}
			}
			?>
		</ul>

		<?php get_template_part( "parts/socialshare" ); ?>
