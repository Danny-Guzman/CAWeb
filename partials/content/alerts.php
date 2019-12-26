<?php
/**
 * Loads CAWeb Alerts.
 *
 * @package CAWeb
 */

$caweb_alerts = get_option( 'caweb_alerts', array() );

if ( empty( $caweb_alerts ) ) {
	return;
}
update_site_option('dev', $caweb_alerts);
?>
<!-- Alert Banners -->
<?php
foreach ( $caweb_alerts as $caweb_a => $caweb_data ) {
	$caweb_status  = $caweb_data['status'];
	$caweb_display = $caweb_data['page_display'];

	/* If alert is active and should be displayed */
	$caweb_active_alert = 'active' === $caweb_status &&
		( ( is_front_page() && 'home' === $caweb_display ) || ( 'all' === $caweb_display ) );

	if ( $caweb_active_alert ) {
		if ( ! isset( $_SESSION[ "display_alert_$caweb_a" ] ) || $_SESSION[ "display_alert_$caweb_a" ] ) {
			$_SESSION[ "display_alert_$caweb_a" ] = true;

			?>
			<div class="alert alert-dismissible alert-banner" style="background-color:<?php print esc_attr( $caweb_data['color'] ); ?>;">
				<div class="container">
					<button type="button" class="close caweb-alert-close" data-url="<?php print esc_url( admin_url( "admin-post.php?action=caweb_clear_alert_session&alert-id=$caweb_a" ) ); ?>" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<span class="alert-level">

						<?php if ( ! empty( $caweb_data['icon'] ) ) : ?>
							<span class="ca-gov-icon-<?php print esc_attr( $caweb_data['icon'] ); ?>" aria-hidden="true"></span>
							<?php
						endif;
						print esc_html( $caweb_data['header'] );
						?>
					</span>
					<span class="alert-text"><?php print wp_kses( wp_unslash( $caweb_data['message'] ), caweb_allowed_html() ); ?></span>
						<?php
						if ( ! empty( $caweb_data['button'] ) && ! empty( $caweb_data['url'] ) ) :
							$caweb_url    = $caweb_data['url'];
							$caweb_target = ! empty( $caweb_data['target'] ) ? sprintf( ' target="%1$s"', $caweb_data['target'] ) : '';
							$caweb_text   = ! empty( $caweb_data['text'] ) ? $caweb_data['text'] : '';
							?>
						<a href="<?php print esc_url( $caweb_url ); ?>" class="alert-link btn btn-default btn-xs"<?php print esc_attr( $caweb_target ); ?>><?php print esc_html( $caweb_text ); ?></a>
						<?php endif; ?>
				</div>
			</div>
			<?php
		}
	}
}