<?php
/**
 * Comments helper file
 * 
 * @package CAWeb
 */

/**
	 * Callback function to control the look of the comments.
	 *
	 * @param WP_Comment $comment comment object.
	 * @param WP_Comment $args args.
	 * @param WP_Comment $depth comment depth.
	 */
	function caweb_comments_display( $comment, $args, $depth ) {
		// phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited -- Set the current comment.
		$GLOBALS['comment'] = $comment;

		$default_avatar = get_option( 'avatar_default' ) ? get_option( 'avatar_default' ) : 'mystery';
		?>
	<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
		<article id="comment-<?php comment_ID(); ?>" class="comment-body clearfix">
			<div class="comment_avatar">
					<?php echo get_avatar( $comment, $size = '80', esc_attr( $default_avatar ), esc_attr( get_comment_author() ) ); ?>
			</div>

			<div class="comment_postinfo">
					<?php printf( '<span class="fn">%s</span>', get_comment_author_link() ); ?>
				<span class="comment_date">
					<?php
					/* translators: 1: date, 2: time */
					printf( esc_html__( 'on %1$s at %2$s' ), esc_html( get_comment_date() ), esc_html( get_comment_time() ) );
					?>
				</span>
					<?php edit_comment_link( esc_html__( '(Edit)' ), ' ' ); ?>
				<?php
				$comment_reply_link_args = array(
					'reply_text' => esc_html__( 'Reply' ),
					'depth'      => (int) $depth,
					'max_depth'  => (int) $args['max_depth'],
				);
				$comment_reply_link   = get_comment_reply_link( array_merge( $args, $comment_reply_link_args ) );
				?>
			</div>

			<div class="comment_area">
				<?php if ( '0' === $comment->comment_approved ) : ?>
					<em class="moderation"><?php esc_html_e( 'Your comment is awaiting moderation.' ); ?></em>
					<br />
				<?php endif; ?>

				<div class="comment-content clearfix">
				<?php
					comment_text();
				if ( $comment_reply_link ) {
					echo '<span class="reply-container">' . wp_kses( $comment_reply_link, 'post' ) . '</span>';
				}
				?>
				</div>
			</div>
		</article>
		<?php
	}


  /**
	 * Callback function to control the look of the ping comments.
	 *
	 * @param WP_Comment $comment comment object.
	 * @param WP_Comment $args args.
	 * @param WP_Comment $depth comment depth.
	 */  function caweb_list_pings($comment, $args, $depth) {
        $GLOBALS['comment'] = $comment; ?>
        <li id="comment-<?php comment_ID(); ?>"><?php comment_author_link(); ?> - <?php comment_excerpt(); ?>
    <?php }