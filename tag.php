<?php
/**
 * This is a generic template for Posts
 *
 * @link https://developer.wordpress.org/themes/template-files-section/taxonomy-templates/#tag
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

if ( have_posts() ) :
	while ( have_posts() ) :
		the_post();
		?>
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<a class="thumbnail-link no-underline" href="<?php the_permalink(); ?>">
				<?php
					if ( has_post_thumbnail() ) {
						the_post_thumbnail(
							'medium',
							array(
								'class' => 'w-100 h-100',
							)
						);
					}
					?>
					<span class="sr-only">Read more about <?php the_title(); ?></span>
				</a>
				
				<div class="tag-info">
					<a class="title" href="<?php the_permalink(); ?>">
						<h2><?php ( ! empty( the_title( '', '', false ) ) ? the_title() : print 'No Title' ); ?></h2>
					</a>
					<?php
						caweb_post_meta();
					?>
				</div>
				<p>
					<?php
					the_excerpt();
					?>
					<a class="btn btn-default" href="<?php the_permalink(); ?>">Read More<span class="sr-only">Read more about <?php the_title(); ?></span></a>
				</p>
			</article>
		<?php
		endwhile;
	?>
	<div class="pagination clearfix">
		<div class="pull-left"><?php next_posts_link(esc_html('&laquo; Older Entries')); ?></div>
		<div class="pull-right"><?php previous_posts_link(esc_html('Next Entries &raquo;')); ?></div>
	</div>
	<?php
endif;


/**
 * Loads footer
 */
get_footer();
