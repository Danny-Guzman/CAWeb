<?php
/**
 * PostDetail::Job::render_jobs()
 *
 * @package CAWeb\Modules\PostDetail
 * @since ??
 */

namespace CAWeb\Modules\PostDetail\ModuleTrait\Views;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\ModuleUtils\ModuleUtils;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\Packages\Module\Layout\Components\ModuleElements\ModuleElements;

use DateTime;
use The_SEO_Framework\Helper\Format\HTML;

trait Job {
	
	/**
	* Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	*
	* @param array $args Block attributes that were saved by VB.
	* @param string $content
	* @param boolean $showFeaturedImage
	* @param boolean $featuredImageAlignment
	* @return array HTML rendered of PostDetail module.
	*/
	public static function render_jobs( $args, $content, $showFeaturedImage, $featuredImageAlignment ) {
		
		$attrs = ModuleUtils::get_attr_value(array(
			'attr' => $args['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		$advanced = ModuleUtils::get_attr_value(array(
			'attr' => $args['advanced'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		$address = array_filter(array(
			$attrs['agency_address'] ?? '',
			$attrs['agency_city'] ?? '',
			$attrs['agency_state'] ?? '',
			$attrs['agency_zip'] ?? '',
		));

		$posted_date = '';

		if( ! empty( $attrs['posted_date'] ) ){
			$d1              = date_create( gmdate( 'm/d/Y', strtotime( $attrs['posted_date'] ) ) );
			$d2              = date_create_from_format( 'm/d/Y', ( new DateTime( 'NOW' ) )->format( 'm/d/Y' ) );
			$tmp             = $d1->diff( $d2 )->format( '%a' );
			$days_passed     = 0 !== (int) $tmp ? sprintf( '&mdash;<span class="fuzzy-date"> %1$s days ago</span>', $tmp ) : '';
	
			$posted_date = HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'published text-secondary'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => array(
					'Published: ',
					HTMLUtility::render(array(
						'tag' => 'time',
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => gmdate( $attrs['posted_date_custom_format'], strtotime( $attrs['posted_date'] ) )
					)),
					$days_passed
				)
			));
		}
		
		$header = HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => 'sub-header mb-4'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array_filter( array(
				'on' === ($advanced['show_about_agency'] ?? 'off') ? HTMLUtility::render(array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'entity'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => array(
						HTMLUtility::render(array(
							'tag' => 'strong',
							'childrenSanitizer' => [self::class, 'sanitize_html'],	
							'children' => $attrs['agency_name'] ?? ''
						)),
						! empty( $address ) ? 
							sprintf(' <span class="ca-gov-icon-road-pin"></span>%1$s', self::render_address_map_link( $address )) : 
							''
					)
				)) : '',
				$posted_date
			))
		));

		$job_info = HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => 'col-6'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'well'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => HTMLUtility::render(array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'well-body'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => HTMLUtility::render(array(
						'tag' => 'p',
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => array(
							// render hours
							! empty( $attrs['hours'] ) ? 
								HTMLUtility::render(array(
									'tag' => 'span',
									'attributes' => array(
										'class' => 'd-block'
									),
									'childrenSanitizer' => [self::class, 'sanitize_html'],	
									'children' => $attrs['hours']
								)) : '',
							// render salary
							'on' === ( $advanced['show_salary'] ?? 'off' ) ? 
								HTMLUtility::render(array(
									'tag' => 'span',
									'attributes' => array(
										'class' => 'd-block'
									),
									'childrenSanitizer' => [self::class, 'sanitize_html'],	
									'children' => array(
										'Salary Range: ',
										implode(' &mdash; ', array_filter(array(
											! empty( $attrs['salary_min'] ) ? sprintf( '$%1$s', number_format( $attrs['salary_min'], 2) ) : '',
											! empty( $attrs['salary_max'] ) ? sprintf( '$%1$s', number_format( $attrs['salary_max'], 2) ) : ''
										)))
									)
								)) : '',
							// render position information
							! empty( $attrs['position_number'] ) || ! empty( $attrs['rpa_number'] ) ? 
								HTMLUtility::render(array(
									'tag' => 'span',
									'attributes' => array(
										'class' => 'd-block'
									),
									'childrenSanitizer' => [self::class, 'sanitize_html'],	
									'children' => implode(', ', array_filter(array(
										! empty( $attrs['position_number'] ) ? "Position Number: {$attrs['position_number']}" : '',
										! empty( $attrs['rpa_number'] ) ? "RPA # {$attrs['rpa_number']}" : ''
									)))
								)) : '',
							// ds url
							! empty( $attrs['ds_url'] ) ? 
								HTMLUtility::render(array(
									'tag' => 'span',
									'attributes' => array(
										'class' => 'd-block'
									),
									'childrenSanitizer' => [self::class, 'sanitize_html'],	
									'children' => array(
										'DS Statement: (',
										HTMLUtility::render(array(
											'tag' => 'a',
											'attributes' => array(
												'href' => $attrs['ds_url']
											),
											'childrenSanitizer' => [self::class, 'sanitize_html'],	
											'children' => 'PDF'
										)),
										')'
									)
								)) : '',
							// final filing date
							'on' === ( $advanced['final_filing_date_chooser'] ?? 'on' ) ? 
								HTMLUtility::render(array(
									'tag' => 'span',
									'attributes' => array(
										'class' => 'd-block'
									),
									'childrenSanitizer' => [self::class, 'sanitize_html'],	
									'children' => array(
										'Final Filing Date: ',
										HTMLUtility::render(array(
											'tag' => 'time',
											'childrenSanitizer' => [self::class, 'sanitize_html'],	
											'children' => gmdate(
												$attrs['final_filing_date_custom_format'],
												strtotime( $attrs['final_filing_date_picker'] )
											)
										))
									)
								)) : 
								HTMLUtility::render(array(
									'tag' => 'span',
									'attributes' => array(
										'class' => 'd-block'
									),
									'childrenSanitizer' => [self::class, 'sanitize_html'],	
									'children' => array(
										'Final Filing Date: ',
										$attrs['final_filing_date']
									)
								)),

						)
					))
				))
			))
		));

		$apply_info = array_filter( array(
			'on' === ( $advanced['show_apply_to'] ?? 'off' ) ?  HTMLUtility::render(array(
				'tag' => 'p',
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => array_filter( array(
					HTMLUtility::render(array(
						'tag' => 'strong',
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => 'Apply To:'
					)),
					! empty( $attrs['apply_to_dept'] ) ? HTMLUtility::render(array(
						'tag' => 'span',
						'attributes' => array(
							'class' => 'd-block'
						),
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => $attrs['apply_to_dept']
					)) : '',
					! empty( $attrs['apply_to_name'] ) ? HTMLUtility::render(array(
						'tag' => 'span',
						'attributes' => array(
							'class' => 'd-block'
						),
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => array(
							'Attn: ',
							$attrs['apply_to_name']
						)
					)) : ''
				))
			)) : '',
			'on' === ( $advanced['show_questions'] ?? 'off' ) ? HTMLUtility::render(array(
				'tag' => 'p',
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => array(
					HTMLUtility::render(array(
						'tag' => 'strong',
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => 'Questions'
					)),
					HTMLUtility::render(array(
						'tag' => 'span',
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => array_filter( array(
							! empty( $attrs['questions_name'] ) ? " {$attrs['questions_name']} at " : ' Contact ',
							$attrs['questions_phone'],
							! empty( $attrs['questions_email'] ) ? HTMLUtility::render(array(
								'tag' => 'a',
								'attributes' => array(
									'href' => "mailto:{$attrs['questions_email']}"
								),
								'childrenSanitizer' => [self::class, 'sanitize_html'],	
								'children' => $attrs['questions_email']
							)) : '',
						))
					))
				)
			)) : ''
		));

		$info = HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => 'row'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array_filter( array(
					$job_info,
					! empty($apply_info) ? 
					HTMLUtility::render(array(
						'tag' => 'div',
						'attributes' => array(
							'class' => 'col-6'
						),
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => HTMLUtility::render(array(
							'tag' => 'div',
							'attributes' => array(
								'class' => 'well'
							),
							'childrenSanitizer' => [self::class, 'sanitize_html'],	
							'children' => HTMLUtility::render(array(
								'tag' => 'div',
								'attributes' => array(
									'class' => 'well-body'
								),
								'childrenSanitizer' => [self::class, 'sanitize_html'],	
								'children' => $apply_info
							))
						))
					)) : ''
				),
			),
		));

		$about = 'on' === ( $advanced['show_about_agency'] ?? 'off' ) ? HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => 'card card-understated about-department'
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],	
			'children' => array(
				// render about the department section
				HTMLUtility::render(array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'card-header'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => HTMLUtility::render(array(
						'tag' => 'h4',
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => 'About this Department'
					)),
				)),
				// render body
				HTMLUtility::render(array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'card-body'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => HTMLUtility::render(array(
						'tag' => 'p',
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => $attrs['agency_about']
					))
				))
			)
		)) : '';

		return array(
			$header,
			$info,
			$about,
			$content
		);
		
	}

}
