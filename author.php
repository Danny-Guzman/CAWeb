<?php
/**
 * The template for displaying author pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#author-display
 *
 * @package CAWeb
 */

get_header();

/* CAGov Design System */
$caweb_enable_design_system = get_option( 'caweb_enable_design_system', false );

// Page Classes.
$caweb_page_title_class        = apply_filters( 'caweb_page_title_class', 'page-title' );
$caweb_page_container_class    = apply_filters( 'caweb_page_container_class', 'page-container' );
$caweb_page_main_content_class = apply_filters( 'caweb_page_main_content_class', 'main-content' );

$caweb_header_file = 'partials/content/';

if ( $caweb_enable_design_system ) {
	$caweb_page_container_class    .= ' page-container-ds';
	$caweb_page_main_content_class .= '  main-content-ds';
	$caweb_header_file              = 'partials/design-system/';
}

?>

<body <?php body_class( 'primary' ); ?>>
	<?php require_once $caweb_header_file . 'header.php'; ?>


	<div id="page-container" class="<?php print esc_attr( $caweb_page_container_class ); ?>">
		<?php do_action( 'caweb_pre_main_area' ); ?>
		<div id="et-main-area">
			<div id="main-content" class="<?php print esc_attr( $caweb_page_main_content_class ); ?>" tabindex="-1">
				<div class="section">
					<?php do_action( 'caweb_pre_main_primary' ); ?>
					<main class="main-primary">

						<?php

						global $wp_query;

						if ( have_posts() ) :
							while ( have_posts() ) :
								the_post();
								?>

						<article id="post-<?php the_ID(); ?>" <?php post_class( 'et_pb_post' ); ?>>
							<a class="auth-link no-underline" href="<?php the_permalink(); ?>">
								<?php
								if ( has_post_thumbnail() ) :
									$caweb_thumb_id  = get_post_thumbnail_id( get_the_ID() );
									$caweb_thumb_alt = get_post_meta( $caweb_thumb_id, 'wp_attachment_image_alt', true );
									the_post_thumbnail(
										'medium',
										array(
											'class' => 'w-100 h-100',
										)
									);
									?>
								<?php endif; ?>
								<span class="sr-only">Read more about <?php the_title(); ?></span>
							</a>
								<?php
								if ( function_exists( 'et_divi_post_format_content' ) ) {
									et_divi_post_format_content();
								}
								?>
							<div class="auth-info">
								<a class="title" href="<?php the_permalink(); ?>">
									<h2><?php ( ! empty( the_title( '', '', false ) ) ? the_title() : print 'No Title' ); ?></h2>
								</a>
								<?php
								if ( function_exists( 'et_divi_post_meta' ) ) {
									et_divi_post_meta();
								}
								?>
															</div>
							<p><?php truncate_post( 270 ); ?><br />
								<a class="btn btn-default" href="<?php the_permalink(); ?>">Read More<span class="sr-only">Read more about <?php the_title(); ?></span></a>
							</p>
						</article> <!-- .et_pb_post -->
								<?php
								endwhile;
							?>
						<div class="pagination clearfix">
							<div class="alignleft"><?php next_posts_link( esc_html__( '&laquo; Older Entries', 'Divi' ) ); ?></div>
							<div class="alignright"><?php previous_posts_link( esc_html__( 'Next Entries &raquo;', 'Divi' ) ); ?></div>
						</div>
							<?php
				else :
					get_template_part( 'includes/no-results', 'index' );
				endif;
				?>
					</main>
					<?php
					if ( is_active_sidebar( 'sidebar-1' ) ) :
						?>
					<aside id="non_divi_sidebar" class="col-lg-3 pull-left">
						<?php
						print esc_html( get_sidebar( 'sidebar-1' ) );
						?>
					</aside>
						<?php
					endif;
					?>
				</div> 
			</div> <!-- #main-content -->
		</div>
	</div>
	<?php get_footer(); ?>
</body>

</html>
