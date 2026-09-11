<?php
/**
 * PostList::Exams::render_exams()
 *
 * @package CAWeb\Modules\PostList
 * @since ??
 */

namespace CAWeb\Modules\PostList\ModuleTrait\Views;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\ModuleUtils\ModuleUtils;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\Packages\Module\Layout\Components\ModuleElements\ModuleElements;

trait Exams {

	/**
	 * Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $args Block attributes that were saved by VB.
	 *
	 * @return string HTML rendered of PostList module.
	 */
	public static function render_exams( $args ) {
		$post = $args['post'] ?? null;
		$shortcode = $args['shortcode'] ?? array();

		$filing_date = HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => 'filing-date ms-auto'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				'Final Filing Date: ',
				HTMLUtility::render(array(
					'tag' => 'time',
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => ! empty( $shortcode['exam_final_filing_date_chooser'] ) && 'off' ===$shortcode['exam_final_filing_date_chooser'] ? 
					$shortcode['exam_final_filing_date'] ?? 'Until Filled' : 
					gmdate( 'n/j/Y', strtotime( $shortcode['exam_final_filing_date_picker'] ) )
				))
			)
		));
			

		$header = HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => 'header d-flex flex-row'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				HTMLUtility::render(array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'title h4 my-0'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => array(
						HTMLUtility::render(array(
							'tag' => 'a',
							'attributes' => array(
								'class' => 'text-decoration-dotted',
								'href' => $post['url'] ?? '#'
							),
							'childrenSanitizer' => [self::class, 'sanitize_html'],	
							'children' => $post['title'] ?? ''
						))
					)
				)),
				$filing_date
			)
		));

		$body = HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => 'body'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array_filter( array(
				// Render exam id
				! empty( $shortcode['exam_id'] ) ? HTMLUtility::render( array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'id'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => array(
						'ID: ',
						$shortcode['exam_id'],
					)
				)) : '',
				// Render exam status
				! empty( $shortcode['exam_status'] ) ? HTMLUtility::render( array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'base'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => array(
						'Status: ', 
						$shortcode['exam_status']
					)
				)) : ''
			)) 
		));

		$footer = ! empty( $shortcode['exam_published_date'] ) ? HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => 'footer'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'published fst-italic text-secondary mt-2'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => array(
					'Published: ',
					HTMLUtility::render(array(
						'tag' => 'time',
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => gmdate( 'M j, Y', strtotime( $shortcode['exam_published_date'] ) )
					))
				)
			))
		)) : '';

		return HTMLUtility::render(array(
			'tag' => 'article',
			'attributes' => array(
				'class' => 'exam-item bg-light p-3 mb-3'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				$header,
				$body,
				$footer
			)
		));
		
	}

}
