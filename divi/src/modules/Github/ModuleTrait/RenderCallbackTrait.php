<?php
/**
 * Github::render_callback()
 *
 * @package CAWeb\Modules\Github
 * @since ??
 */

namespace CAWeb\Modules\Github\ModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\ModuleUtils\ModuleUtils;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\Module\Options\Element\ElementComponents;

use DateTime;

trait RenderCallbackTrait {
	use ModuleClassnamesTrait;
	use ModuleStylesTrait;
	use ModuleScriptDataTrait;
	use Github;

	public static array $response = array();
	public static array $pagination = array();

	/**
	 * Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $attrs Block attributes that were saved by VB.
	 * @param string         $content          Block content.
	 * @param \WP_Block      $block            Parsed block object that being rendered.
	 * @param ModuleElements $elements ModuleElements instance.
	 *
	 * @return string HTML rendered of Github module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		$request = ModuleUtils::get_attr_value( array(
			'attr' => $attrs['request']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		) );

		$request_url = self::create_request_url( $request );
		$links = array();
		$attributes_info = array();
		
		if ( ! empty($request_url) ) {
			// Attributes for the UL element containing the list of repositories
			$attributes_info = array_filter( array(
				'class' => 'list-group list-group-flush ps-0',
				'data-definitions' => implode('|', $request['definitions']),
				'data-email' => $request['email'] ?? '',
				'data-email-body' => $request['email_body'] ?? '',
				'data-rate-limit' => $request['rate_limit'] ?? ''
			));


			// Prepare the request arguments for the GitHub API call.
			$args = array(
				'headers' => array(
					'Accept' => 'application/vnd.github.v3+json'
				)
			);

			// Add the Access token to the request headers if available.
			if ( ! empty( $request['access_token'] ) ) {
				$attributes_info['data-info']['token'] = $request['access_token'];
				$args['headers']['Authorization'] = 'Bearer ' . $request['access_token'];
			}

			// if rate limit is on
			if( isset( $request['rate_limit'] ) && 'on' === $request['rate_limit'] ){

				// Add client_id to data-info if available
				if( isset( $request['client_id'] ) ) {
					$attributes_info['data-info']['client_id'] = $request['client_id'];
				}

				// Add client_secret to data-info if available
				if( isset( $request['client_secret'] ) ) {
					$attributes_info['data-info']['client_secret'] = $request['client_secret'];
				}
			}

			// Encode the data-info array as a base64 string and store it in the data-info attribute.
			if( isset( $attributes_info['data-info'] ) ){
				$attributes_info['data-info'] = base64_encode( strrev( json_encode( $attributes_info['data-info'] ) ) );
			}

			$response = wp_remote_get( $request_url, $args );

			// if not an error
			if ( ! is_wp_error( $response ) ) {
				$code = wp_remote_retrieve_response_code( $response );

				// if 200 is returned
				if ( 200 === $code ) {
					// decode the JSON response body into an associative array.
					$repositories = json_decode( wp_remote_retrieve_body( $response ), true );

					$pagination = wp_remote_retrieve_header( $response, 'link' );
					if( $pagination ){
						
						// 0 element has the url, 1 has the relationship.
						$pagination = array_map( function($link){
								return array(
									'url' => trim(sanitize_url($link[0])),
									'rel' => trim(preg_replace('/rel="(.*)"/', '$1', $link[1])),
								);
							},
							array_map( function($link){ 
								// split the link at the semi colon for each part
								return explode(';', $link); 
								}, 
								// split the first time at the comma to separate each link
								explode( ',', $pagination )
							)
						);

						// set the pagination for later use
						self::$pagination = $pagination;
						
					}

					foreach ( $repositories as $repo ) {
						$links[] = sprintf(
							'<li class="list-group-item ps-0">%1$s%2$s%3$s%4$s%5$s%6$s%7$s</li>',
                  			// Render the repository name with a link if it's not private and the 'link' definition is included
							in_array( 'name', $request['definitions'] ) ? 
							sprintf('<h3>%1$s</h3>',
								isset( $repo['private'] ) && ! $repo['private'] && in_array( 'link', $request['definitions']) ?
								sprintf(
									'<a href="%1$s" target="_blank" rel="noopener noreferrer">%2$s</a>',
									esc_url( $repo['html_url'] ),
									esc_html( $repo['name'] )
								)
								: esc_html( $repo['name'] )
							) : 
							'',

							// render the repository description if the 'description' definition is included
							in_array( 'description', $request['definitions'] ) ? 
							sprintf('<p><strong>Project Description: </strong>%1$s</p>', $repo['description'] ) : 
							'',

							// render the repository fork status if the 'fork' definition is included
							in_array( 'fork', $request['definitions'] ) ? 
							sprintf('<p><strong>Project forked by another organization: </strong>%1$s</p>', $repo['fork'] ? 'True' : 'False' ) : 
							'',
							
							// render the repository creation date if the 'created_at' definition is included
							in_array( 'created_at', $request['definitions'] ) ? 
							sprintf('<p><strong>Created on: </strong>%1$s</p>', new DateTime($repo['created_at'])->format('m/d/Y') ) : 
							'',
							
							// render the repository updated date if the 'updated_at' definition is included
							in_array( 'updated_at', $request['definitions'] ) ? 
							sprintf('<p><strong>Updated on: </strong>%1$s</p>', new DateTime($repo['updated_at'])->format('m/d/Y') ) : 
							'',
							
							// render the repository language if the 'language' definition is included
							in_array( 'language', $request['definitions'] ) ? 
							sprintf('<p><strong>Language: </strong>%1$s</p>', $repo['language'] ) : 
							'',
							
							// render request email information
							! empty( $request['email'] ) && isset( $repo['private'] ) && $repo['private'] ? 
							sprintf('<p>* This is a Private Repository <a class="btn btn-main ms-2" href="mailto:%1$s?subject=%2$s Repository Access Request&body=%3$s">Request Access</a></p>',
								esc_attr( $request['email'] ),
								esc_attr( $repo['name'] ),
								esc_attr( $request['email_body'] ?? '' )
							) : ''

						);
					}
				}
			}
		}

		$inner_content = array(
			$elements->render( array( 'attrName' => 'title' ) ),
			HTMLUtility::render(array(
				'tag' => 'ul',
				'attributes' => $attributes_info,
				'childrenSanitizer' => [self::class, 'sanitize_html'],
				'children' => $links
			)),
			// add spinner for loading repositories
			HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'caweb-github-spinner text-center my-3 d-none'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],
				'children' => HTMLUtility::render(array(
					'tag' => 'div',
					'attributes' => array(
						'class' => 'spinner-border text-primary',
						'role' => 'status'
					),
					'childrenSanitizer' => [self::class, 'sanitize_html'],
					'children' => HTMLUtility::render(array(
						'tag' => 'span',
						'attributes' => array(
							'class' => 'visually-hidden'
						),
						'childrenSanitizer' => [self::class, 'sanitize_html'],
						'children' => 'Loading...'
					))
				))
			)),
			// add pagination controls if there are multiple pages
			count(self::$pagination) ? 
			HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'caweb-github-pagination row'
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],
				'children' => array(
					HTMLUtility::render(array(
						'tag' => 'strong',
						'attributes' => array(
							'class' => 'text-center'
						),
						'childrenSanitizer' => [self::class, 'sanitize_html'],
						'children' => array(
							'Page ',
							self::get_current_page( $request_url ), // current page number
							' of ',
							self::get_total_pages() // total number of pages
						)
					)),
					HTMLUtility::render(array(
						'tag' => 'div',
						'attributes' => array(
							'class' => 'col'
						),
						'childrenSanitizer' => [self::class, 'sanitize_html'],
						'children' => array_filter( array(
							// render first and prev pagination if available
							self::generate_page_link('first'),
							self::generate_page_link('prev'),
						) )
					)),
					HTMLUtility::render(array(
						'tag' => 'div',
						'attributes' => array(
							'class' => 'col text-end'
						),
						'childrenSanitizer' => [self::class, 'sanitize_html'],
						'children' => array_filter( array(
							// render next and last pagination if available
							self::generate_page_link('next'),
							self::generate_page_link('last'),
						) )
					))
				)
			)) : 
			'',
		);

		return Module::render(array(
				// FE only.
				'orderIndex'          => $block->parsed_block['orderIndex'],
				'storeInstance'       => $block->parsed_block['storeInstance'],

				// VB equivalent.
				'id'                  => $block->parsed_block['id'],
				'moduleCategory'      => $block->block_type->category,
				'name'                => $block->block_type->name,
				'attrs'               => $attrs,
				'elements'            => $elements,
				'children'            =>  $inner_content,

				'classnamesFunction'  => [ self::class, 'module_classnames' ],
				'stylesComponent'     => [ self::class, 'module_styles' ],
				'scriptDataComponent' => [ self::class, 'module_script_data' ],

				// parent attrs
				// 'parentAttrs'         => $parent_attrs,
				// 'parentId'            => $parent->id ?? '',
				// 'parentName'          => $parent->blockName ?? '',
		));
		
	}


}
