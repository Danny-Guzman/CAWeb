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

		$posted_date = '';

		if( ! empty( $attrs['posted_date'] ) ){
			$d1              = date_create( gmdate( $attrs['posted']['pattern'], strtotime( $attrs['posted']['date'] ) ) );
			$d2              = date_create_from_format( $attrs['posted']['pattern'], ( new DateTime( 'NOW' ) )->format( $attrs['posted']['pattern'] ) );
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
						'children' => gmdate( $attrs['posted']['pattern'], strtotime( $attrs['posted']['date'] ) )
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
				'on' === ($attrs['agency']['show']) ? HTMLUtility::render(array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'entity'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => array(
						HTMLUtility::render(array(
							'tag' => 'strong',
							'childrenSanitizer' => [self::class, 'sanitize_html'],	
							'children' => $attrs['agency']['name'] 
						)),
						! empty( array_filter( $attrs['agency']['address'] ) ) ? 
							sprintf(' <span class="ca-gov-icon-road-pin"></span>%1$s', self::render_address_map_link( $attrs['agency']['address']  )) : 
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
							'on' === ( $attrs['salary']['show'] ) ? 
								HTMLUtility::render(array(
									'tag' => 'span',
									'attributes' => array(
										'class' => 'd-block'
									),
									'childrenSanitizer' => [self::class, 'sanitize_html'],	
									'children' => array(
										'Salary Range: ',
										implode(' &mdash; ', array_filter(array(
											! empty( $attrs['salary']['min'] ) ? sprintf( '$%1$s', number_format( $attrs['salary']['min'], 2) ) : '',
											! empty( $attrs['salary']['max'] ) ? sprintf( '$%1$s', number_format( $attrs['salary']['max'], 2) ) : ''
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
							'on' === ( $attrs['filing']['chooser'] ?? 'on' ) ? 
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
												$attrs['filing']['pattern'],
												strtotime( $attrs['filing']['picker'] )
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
										$attrs['filing']['date']
									)
								)),

						)
					))
				))
			))
		));

		$apply_info = array_filter( array(
			'on' === ( $attrs['apply']['show'] ) ?  HTMLUtility::render(array(
				'tag' => 'p',
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => array_filter( array(
					HTMLUtility::render(array(
						'tag' => 'strong',
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => 'Apply To:'
					)),
					! empty( $attrs['apply']['dept'] ) ? HTMLUtility::render(array(
						'tag' => 'span',
						'attributes' => array(
							'class' => 'd-block'
						),
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => $attrs['apply']['dept']
					)) : '',
					! empty( $attrs['apply']['name'] ) ? HTMLUtility::render(array(
						'tag' => 'span',
						'attributes' => array(
							'class' => 'd-block'
						),
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => array(
							'Attn: ',
							$attrs['apply']['name']
						)
					)) : ''
				))
			)) : '',
			'on' === ( $attrs['questions']['show'] ) ? HTMLUtility::render(array(
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
							! empty( $attrs['questions']['name'] ) ? " {$attrs['questions']['name']} at " : ' Contact ',
							$attrs['questions']['phone'],
							! empty( $attrs['questions']['email'] ) ? HTMLUtility::render(array(
								'tag' => 'a',
								'attributes' => array(
									'href' => "mailto:{$attrs['questions']['email']}"
								),
								'childrenSanitizer' => [self::class, 'sanitize_html'],	
								'children' => $attrs['questions']['email']
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

		$about = 'on' === $attrs['agency']['show'] ? HTMLUtility::render(array(
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
						'children' => $attrs['agency']['about']
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
