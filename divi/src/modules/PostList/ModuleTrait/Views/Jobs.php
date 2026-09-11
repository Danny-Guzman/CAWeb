<?php
/**
 * PostList::Jobs::render_jobs()
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

trait Jobs {

	/**
	 * Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $args Block attributes that were saved by VB.
	 *
	 * @return string HTML rendered of PostList module.
	 */
	public static function render_jobs( $args ) {
		$post = $args['post'] ?? null;
		$shortcode = $args['shortcode'] ?? array();

		$filing_date = sprintf(
			'Final Filing Date: %1$s<br />',
			! empty( $p_handler->job_final_filing_date ) ? $p_handler->job_final_filing_date : 'Until Filled'
		);
			
		if( ! empty( $shortcode['job_final_filing_date_chooser'] ) && 'on' === $shortcode['job_final_filing_date_chooser'] &&
			! empty( $shortcode['job_final_filing_date_picker'] ) 
		 ){
			$job_final_filing_date_picker = gmdate( 'n/j/Y', strtotime( $shortcode['job_final_filing_date_picker'] ) );
			$filing_date = sprintf( 'Final Filing Date:<time>%1$s</time><br />', $job_final_filing_date_picker );
		}

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
						'class' => 'title me-auto'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => array(
						HTMLUtility::render(array(
							'tag' => 'a',
							'attributes' => array(
								'class' => 'fs-5 text-decoration-dotted',
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
				// Render position and RPA numbers if available
				! empty( $shortcode['job_position_number'] ) || ! empty( $shortcode['job_rpa_number'] ) ? HTMLUtility::render( array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'position-number'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => implode( ', ',array(
						! empty( $shortcode['job_position_number'] ) ? "Position Number: {$shortcode['job_position_number']}" : '',
						! empty( $shortcode['job_rpa_number'] ) ? "RPA Number: {$shortcode['job_rpa_number']}" : ''
					))
				)) : '',
				// Render jobs hours
				! empty( $shortcode['job_hours'] ) ? HTMLUtility::render( array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'schedule'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => $shortcode['job_hours']
				)) : '',
				// Render job salary
				! empty( $shortcode['show_job_salary'] ) && 'on' === $shortcode['show_job_salary'] ? HTMLUtility::render( array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'salary-range'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => array_filter( array(
						'Salary Range: ',
						! empty( $shortcode['job_salary_min'] ) ? sprintf('$%1$s', number_format($shortcode['job_salary_min'], 2)) : '$0.00',
						! empty( $shortcode['job_salary_max'] ) ? sprintf('  &mdash; $%1$s', number_format($shortcode['job_salary_max'], 2)) : "  &mdash; $0.00"
					))
				)) : '',
				// Render job location
				! empty( $shortcode['job_agency_address'] ) || ! empty( $shortcode['job_agency_city'] ) ||
				! empty( $shortcode['job_agency_state'] ) || ! empty( $shortcode['job_agency_zip'] ) ? HTMLUtility::render( array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'location'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => array(
						'Location: ',
						implode(', ', array_filter(array(
							$shortcode['job_agency_address'] ?? '',
							$shortcode['job_agency_city'] ?? '',
							$shortcode['job_agency_state'] ?? '',
							$shortcode['job_agency_zip'] ?? ''
						)))
					)
				)) : '',
			)) 
		));

		return HTMLUtility::render(array(
			'tag' => 'article',
			'attributes' => array(
				'class' => 'job-item bg-light p-3 mb-3'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				$header,
				$body
			)
		));
		
	}

}
