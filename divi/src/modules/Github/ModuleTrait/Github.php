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

trait Github {

	/**
	 * Create the request URL for fetching GitHub repositories.
	 *
	 * @param Object $request The parameters for the request.
	 * @param string $request['organization'] The GitHub organization.
	 * @param string $request['repo_type'] The type of repositories to fetch.
	 * @param int $request['per_page'] The number of repositories per page.
	 * @param string $request['rate_limit'] The rate limit setting.
	 * @param string $request['client_id'] The GitHub client ID.
	 * @param string $request['client_secret'] The GitHub client secret.
	 *
	 * @return string The constructed request URL.
	 */
	public static function create_request_url( $request ) {
		$organization = $request['organization'];
		$repo_type = $request['repo_type'];
		$per_page = $request['per_page'];
		$rate_limit = $request['rate_limit'];
		$client_id = $request['client_id'];
		$client_secret = $request['client_secret'];

		$url = '';
		
		// if organization is provided, construct the request URL
		if( ! empty( $organization) ){
			$url = "https://api.github.com/orgs/{$organization}/repos?type={$repo_type}&per_page={$per_page}";

			// if rate limit is on, append client ID and secret if available
			if ( 'on' === $rate_limit ) {
				
				// append client ID and secret if available
				if (  ! empty ($client_id) ) {
					$url .= "&client_id={$client_id}";
				}

				// append client secret if available
				if (  ! empty ($client_secret) ) {
					$url .= "&client_secret={$client_secret}";
				}

			}
		
		}
				
		return $url;
		
	}

	/**
	 * Get the current page number from the pagination links.
	 *
	 * @param string $url The URL containing the page query parameter.
	 * @return int The current page number.
	 */
	public static function get_current_page( $url ){
		// Parse the query string from the URL to extract the page number.
		parse_str( parse_url( $url, PHP_URL_QUERY ), $query );

		return isset( $query['page'] ) ? (string) $query['page'] : '1';
	}
	
	/**
	 * Get the total number of pages from the pagination links.
	 *
	 * @return string The total number of pages.
	 */
	public static function get_total_pages() {
		$last = array_find(self::$pagination, function($v) {return 'last' === $v['rel'];} );

		return isset( $last['url'] ) ? self::get_current_page( $last['url'] ) : '1';
	}

	/**
	 * Generate the pagination link for the specified relation.
	 *
	 * @param string $relation The pagination relation (e.g., 'first', 'prev', 'next', 'last').
	 * @return string The specified pagination link.
	 */
	public static function generate_page_link( $relation ) {
		$link = array_find(self::$pagination, function($v) use ($relation) {return $relation === $v['rel'];} );

		return isset( $link['url'] ) ? sprintf('<a data-url="%1$s" rel="%2$s" class="cursor-pointer fs-4 me-3">%3$s</a>', $link['url'], $relation, ucfirst($relation)) : '';
	}
}
