<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
* Loads CAWeb <header> tag.
*/

get_header();

if ( have_posts() ) {
	while ( have_posts() ) {
		the_post();

		?>
		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

			<?php if ( has_post_thumbnail() ): ?>
				<a class="thumbnail-link" href="<?php the_permalink(); ?>">
					<?php 
					the_post_thumbnail(
						'medium',
						array(
							'class' => 'w-100 h-100'
						)
					);
					?>
				</a>
			<?php endif; ?>

			<h2 class="entry-title">
				<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
			</h2>

			<?
			caweb_post_meta();

			// if on search truncate the post content.
			if ( is_search() ) {
				the_excerpt();
			} else {
				the_content();
			}
			?>
		</article>
		<?php
	}

	?>
	<div class="pagination clearfix">
		<div class="pull-left"><?php next_posts_link(esc_html('&laquo; Older Entries')); ?></div>
		<div class="pull-right"><?php previous_posts_link(esc_html('Next Entries &raquo;')); ?></div>
	</div>
	<?php

} 

/**
 * Loads footer
 */
get_footer();
