<?php
/**
 * PostDetail::Event::render_event()
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

trait Event {

	/**
	* Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	*
	* @param array $args Block attributes that were saved by VB.
	* @param string $content
	* @param boolean $showFeaturedImage
	* @param boolean $featuredImageAlignment
	* @return array HTML rendered of PostDetail module.
	*/
	public static function render_event( $args, $content, $showFeaturedImage, $featuredImageAlignment ) {

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

		$presenter = 'on' === ( $advanced['show_presenter'] ?? 'off' ) ? 
			HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'presenter'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => array(
					// render presenter name
					HTMLUtility::render(array(
						'tag' => 'p',
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => array(
							HTMLUtility::render(array(
								'tag' => 'strong',
								'childrenSanitizer' => [self::class, 'sanitize_html'],	
								'children' => array(
									'Presenter:',
									'<br/>'
								)
							)),
							HTMLUtility::render(array(
								'tag' => 'strong',
								'childrenSanitizer' => [self::class, 'sanitize_html'],	
								'children' => $attrs['presenter_name'] ?? ''
							))
						)
					)),
					HTMLUtility::render(array(
						'tag' => 'p',
						'childrenSanitizer' => [self::class, 'sanitize_html'],	
						'children' => array(
							// render presenter image
							! empty( $attrs['presenter_image'] ?? '' ) ? HTMLUtility::render(array(
								'tag' => 'img',
								'attributes' => array(
									'src' => $attrs['presenter_image'],
									'class' => 'me-3',
									'style' => 'height: 75px; width: 75px;'
								),
								'childrenSanitizer' => [self::class, 'sanitize_html'],	
								'children' => ''
							)) : '',
							// render presenter bio
							$attrs['presenter_bio'] ?? ''
						)
					))
				)
			)) : '';
			

		$organizer = array(
			HTMLUtility::render(array(
				'tag' => 'strong',
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => 'Organizer'
			)),
			'<br />',
			HTMLUtility::render(array(
				'tag' => 'p',
				'attributes' => array(
					'class' => 'date-time'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => array_merge(
					// render start and end date
					array(
						implode( ' - ',array_filter( array(
							! empty( $attrs['start_date'] ) ? gmdate($attrs['start_date_custom_format'], strtotime($attrs['start_date'])) : '',
							! empty( $attrs['end_date'] ) ? gmdate($attrs['end_date_custom_format'], strtotime($attrs['end_date'])) : ''
						)))
					),
					// render address link
					'on' === ( $advanced['show_address'] ?? 'off' ) ? array(
						'<br />',
						'<span class="ca-gov-icon-road-pin"></span>',
						self::render_address_map_link(array(
							'address' => $attrs['address'] ?? '',
							'city' => $attrs['city'] ?? '',
							'state' => $attrs['state'] ?? '',
							'zip' => $attrs['zip'] ?? ''
						))
					) : array()
				)
			)),
			! empty( array_filter( array( $attrs['registration_type'], $attrs['cost'] ) ) ) ? 
				HTMLUtility::render(array(
					'tag' => 'p',
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => implode( '<br />', array_filter( array(
							! empty( $attrs['registration_type'] ) ? "Registration Type: {$attrs['registration_type']}" : '',
							! empty( $attrs['cost'] ) ? "Registration Cost: {$attrs['cost']}" : ''
						))
					)
				)) : ''
		);	
		
		
		return array(
			self::get_the_post_thumbnail( null, 'thumbnail', array( 'class' => 'float-start mb-3 me-3' ) ),
			HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'description clearfix'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => $content
			)),
			$presenter,
			HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'row'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],	
				'children' => HTMLUtility::render(array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'col-9'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],	
					'children' => $organizer
				))
			))
		);
	}

}
