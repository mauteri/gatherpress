<?php

namespace GatherPress\Inc;

use GatherPress\Inc\Traits\Singleton;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Event {

	use Singleton;

	const POST_TYPE    = 'gp_event';
	const TABLE_FORMAT = '%s%s_extended';

	/**
	 * Event constructor.
	 */
	protected function __construct() {

		$this->rest_namespace = GATHERPRESS_REST_NAMESPACE . '/event';

		$this->_setup_hooks();

	}

	/**
	 * Setup hooks.
	 */
	protected function _setup_hooks() : void {

		/**
		 * Actions.
		 */
		add_action( 'init', [ $this, 'register_post_types' ] );
		add_action( 'init', [ $this, 'change_rewrite_rule' ] );
		add_action( 'init', [ $this, 'maybe_create_custom_table' ] );
		add_action( 'delete_post', [ $this, 'delete_event' ] );

		/**
		 * Filters.
		 */
		add_filter( 'wpmu_drop_tables', [ $this, 'on_site_delete' ] );
		add_filter( 'wp_unique_post_slug', [ $this, 'append_id_to_event_slug' ], 10, 4 );
		add_filter( sprintf( 'manage_%s_posts_columns', self::POST_TYPE ), [ $this, 'set_custom_columns' ] );
		add_action( sprintf( 'manage_%s_posts_custom_column', self::POST_TYPE ), [ $this, 'custom_columns' ], 10, 2 );
		add_filter( sprintf( 'manage_edit-%s_sortable_columns', self::POST_TYPE ), [ $this, 'sortable_columns' ] );

	}

	/**
	 * Ensure that event slugs always have ID appended to URL.
	 *
	 * @param string $slug
	 * @param int    $post_id
	 * @param string $post_status
	 * @param string $post_type
	 *
	 * @return string
	 */
	public function append_id_to_event_slug( string $slug, int $post_id, string $post_status, string $post_type ) : string {

		if ( static::POST_TYPE !== $post_type ) {
			return $slug;
		}

		if ( 1 > intval( $post_id ) ) {
			return $slug;
		}

		if ( ! preg_match( '/-(\d+)$/', $slug, $matches ) ) {
			return "{$slug}-{$post_id}";
		}

		$slug_id = intval( $matches[1] );

		if ( $slug_id === $post_id ) {
			return $slug;
		}

		return preg_replace( '/-\d+$/', '-' . $post_id, $slug );

	}

	/**
	 * Add new rewrite rule for event to append Post ID.
	 */
	public function change_rewrite_rule() : void {

		add_rewrite_rule(
			'^events/([^/]*)-([0-9]+)/?$',
			sprintf(
				'index.php?post_type=%s&postname=$matches[1]&p=$matches[2]',
				static::POST_TYPE
			),
			'top'
		);

	}

	/**
	 * Maybe create custom table if doesn't exist for main site or current site in network.
	 */
	public function maybe_create_custom_table() : void {

		$this->create_table();

		if ( is_multisite() ) {
			$blog_id = get_current_blog_id();

			switch_to_blog( $blog_id );
			$this->create_table();
			restore_current_blog();
		}

	}

	/**
	 * Delete custom table on site deletion.
	 *
	 * @param array $tables
	 *
	 * @return array
	 */
	public function on_site_delete( array $tables ) : array {

		global $wpdb;

		$tables[] = sprintf( static::TABLE_FORMAT, $wpdb->prefix, static::POST_TYPE );

		return $tables;

	}

	/**
	 * Create custom event table.
	 */
	public function create_table() : void {

		global $wpdb;

		$sql             = [];
		$charset_collate = $GLOBALS['wpdb']->get_charset_collate();
		$table           = sprintf( static::TABLE_FORMAT, $wpdb->prefix, static::POST_TYPE );

		$sql[] = "CREATE TABLE {$table} (
					post_id bigint(20) unsigned NOT NULL default '0',
					datetime_start datetime NOT NULL default '0000-00-00 00:00:00',
					datetime_start_gmt datetime NOT NULL default '0000-00-00 00:00:00',
					datetime_end datetime NOT NULL default '0000-00-00 00:00:00',
					datetime_end_gmt datetime NOT NULL default '0000-00-00 00:00:00',
					timezone varchar(255) default NULL,
					PRIMARY KEY  (post_id),
					KEY datetime_start_gmt (datetime_start_gmt),
					KEY datetime_end_gmt (datetime_end_gmt)
				) {$charset_collate};";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';

		dbDelta( $sql );

	}

	/**
	 * Register the Event post type.
	 */
	public function register_post_types() : void {

		register_post_type(
			static::POST_TYPE,
			[
				'labels'        => [
					'name'               => _x( 'Events', 'Post Type General Name', 'gatherpress' ),
					'singular_name'      => _x( 'Event', 'Post Type Singular Name', 'gatherpress' ),
					'menu_name'          => __( 'Events', 'gatherpress' ),
					'all_items'          => __( 'All Events', 'gatherpress' ),
					'view_item'          => __( 'View Event', 'gatherpress' ),
					'add_new_item'       => __( 'Add New Event', 'gatherpress' ),
					'add_new'            => __( 'Add New', 'gatherpress' ),
					'edit_item'          => __( 'Edit Event', 'gatherpress' ),
					'update_item'        => __( 'Update Event', 'gatherpress' ),
					'search_items'       => __( 'Search Events', 'gatherpress' ),
					'not_found'          => __( 'Not Found', 'gatherpress' ),
					'not_found_in_trash' => __( 'Not found in Trash', 'gatherpress' ),
				],
				'show_in_rest'  => true,
				'public'        => true,
				'hierarchical'  => false,
				'menu_position' => 3,
				'supports'      => [
					'title',
					'editor',
					'thumbnail',
					'comments',
					'revisions',
				],
				'menu_icon'     => 'dashicons-calendar',
				'rewrite'       => [
					'slug'      => 'events',
				],
			]
		);

	}

	/**
	 * Delete event record from custom table when event is deleted.
	 *
	 * @param int $post_id
	 */
	public function delete_event( int $post_id ) : void {

		global $wpdb;

		if ( static::POST_TYPE !== get_post_type( $post_id ) ) {
			return;
		}

		$table = sprintf( static::TABLE_FORMAT, $wpdb->prefix, static::POST_TYPE );

		$wpdb->delete(
			$table,
			[
				'post_id' => $post_id,
			]
		);

	}

	/**
	 * Save the start and end datetimes for an event.
	 *
	 * @param array $params {
	 *     @type int     $post_id
	 *     @type string  $datetime_start
	 *     @type string  $datetime_end
	 *     @type string  $timezone
	 * }
	 *
	 * @return bool
	 */
	public function save_datetimes( array $params ) : bool {

		global $wpdb;

		$return  = false;
		$fields  = array_filter( $params, function( $key ) {
			return in_array(
				$key,
				[
					'post_id',
					'datetime_start',
					'datetime_end',
					'timezone',
				],
				true
			);
		}, ARRAY_FILTER_USE_KEY );

		if ( 1 > intval( $fields['post_id'] ) ) {
			return $return;
		}

		$fields['datetime_start_gmt'] = get_gmt_from_date( $fields['datetime_start'] );
		$fields['datetime_end_gmt']   = get_gmt_from_date( $fields['datetime_end'] );
		$fields['timezone']           = $fields['timezone'] = ! empty( $fields['timezone'] ) ? $fields['timezone'] : wp_timezone_string();
		$table                        = sprintf( static::TABLE_FORMAT, $wpdb->prefix, static::POST_TYPE );
		$exists                       = $wpdb->get_var(
			$wpdb->prepare(
				'SELECT post_id FROM ' . esc_sql( $table ) . ' WHERE post_id = %d',
				$fields['post_id']
			)
		);

		if ( ! empty( $exists ) ) {
			$return = $wpdb->update(
				$table,
				$fields,
				[ 'post_id' => $fields['post_id'] ]
			);

		} else {
			$return = $wpdb->insert( $table, $fields );
		}

		return (bool) $return;

	}

	/**
	 * Get display DateTime.
	 *
	 * @param int $post_id
	 *
	 * @return string
	 */
	public function get_display_datetime( int $post_id ) : string {

		if ( 0 >= $post_id ) {
			return '';
		}

		if ( $this->is_same_date( $post_id ) ) {
			$start = $this->get_datetime_start( $post_id, 'l, F j, Y g:i A' );
			$end   = $this->get_datetime_end( $post_id, 'g:i A T' );
		} else {
			$start = $this->get_datetime_start( $post_id, 'l, F j, Y, g:i A' );
			$end   = $this->get_datetime_end( $post_id, 'l, F j, Y, g:i A T' );
		}

		return sprintf( '%s to %s', $start, $end );

	}

	/**
	 * Check if start DateTime and end DateTime is same date.
	 *
	 * @param int $post_id
	 *
	 * @return bool
	 */
	public function is_same_date( int $post_id ) : bool {

		$datetime_start = $this->get_datetime_start( $post_id, 'Y-m-d' );
		$datetime_end   = $this->get_datetime_end( $post_id, 'Y-m-d' );

		if ( empty( $datetime_start ) || empty( $datetime_end ) ) {
			return false;
		}

		if ( $datetime_start === $datetime_end ) {
			return true;
		}

		return false;

	}

	/**
	 * Check if event is in the past.
	 *
	 * @param int $post_id
	 *
	 * @return bool
	 */
	public function has_event_past( int $post_id ) : bool {

		$data    = $this->get_datetime( $post_id );
		$end     = $data['datetime_end_gmt'];
		$current = time();

		if ( $current > strtotime( $end ) ) {
			return true;
		}

		return false;

	}

	/**
	 * Get datetime start.
	 *
	 * @param int    $post_id
	 * @param string $format
	 *
	 * @return string
	 */
	public function get_datetime_start( int $post_id, string $format = 'D, F j, g:ia T' ) : string {

		return $this->_get_formatted_date( $post_id, $format, 'datetime_start' );

	}


	/**
	 * Get datetime end.
	 *
	 * @param int    $post_id
	 * @param string $format
	 *
	 * @return string
	 */
	public function get_datetime_end( int $post_id, string $format = 'D, F j, g:ia T' ) : string {

		return $this->_get_formatted_date( $post_id, $format, 'datetime_end' );

	}

	/**
	 * Format date for display.
	 *
	 * @param int    $post_id
	 * @param string $format
	 * @param string $which
	 *
	 * @return string
	 */
	protected function _get_formatted_date( int $post_id, string $format = 'D, F j, g:ia T', string $which = 'datetime_start' ) : string {

		$server_timezone = date_default_timezone_get();
		$site_timezone   = wp_timezone_string();

		// If site timezone is a valid setting, set it for timezone, if not remove `T` from format.
		if ( ! preg_match( '/^-|\+/', $site_timezone ) ) {
			date_default_timezone_set( $site_timezone );
		} else {
			$format = str_replace( ' T', '', $format );
		}

		$dt   = $this->get_datetime( $post_id );
		$date = $dt[ $which ];

		if ( ! empty( $date ) ) {
			$ts   = strtotime( $date );
			$date = date( $format, $ts );
		}

		date_default_timezone_set( $server_timezone );

		return (string) $date;

	}

	/**
	 * Get the datetime from custom table.
	 *
	 * @todo Add caching.
	 *
	 * @param int $post_id
	 *
	 * @return array
	 */
	public function get_datetime( int $post_id ) : array {

		global $wpdb;

		$table = sprintf( static::TABLE_FORMAT, $wpdb->prefix, static::POST_TYPE );
		$data  = (array) $wpdb->get_results( $wpdb->prepare( "SELECT datetime_start, datetime_start_gmt, datetime_end, datetime_end_gmt FROM {$table} WHERE post_id = %d LIMIT 1", $post_id ) );
		$data  = ( ! empty( $data ) ) ? (array) current( $data ) : [];

		return array_merge(
			[
				'datetime_start'     => '',
				'datetime_start_gmt' => '',
				'datetime_end'       => '',
				'datetime_end_gmt'   => '',
			],
			$data
		);

	}

	/**
	 * Get all supported add to calendar links for event.
	 *
	 * @todo need to add location for all calendar methods when feature is done.
	 *
	 * @param int $post_id
	 *
	 * @return array
	 */
	public function get_calendar_links( int $post_id ) : array {

		if ( static::POST_TYPE !== get_post_type( $post_id ) ) {
			return [];
		}

		$event = get_post( $post_id );

		return [
			'google' => $this->_get_google_calendar_link( $event ),
			'isc'    => $this->_get_ics_calendar_download( $event ),
			'yahoo'  => $this->_get_yahoo_calendar_link( $event ),
		];

	}

	/**
	 * Get add to Google calendar link for event.
	 *
	 * @param \WP_Post $event
	 *
	 * @return string
	 */
	protected function _get_google_calendar_link( \WP_Post $event ) : string {

		$date_start = $this->_get_formatted_date( $event->ID, 'Ymd', 'datetime_start_gmt' );
		$time_start = $this->_get_formatted_date( $event->ID, 'His', 'datetime_start_gmt' );
		$date_end   = $this->_get_formatted_date( $event->ID, 'Ymd', 'datetime_end_gmt' );
		$time_end   = $this->_get_formatted_date( $event->ID, 'His', 'datetime_end_gmt' );
		$datetime   = sprintf( '%sT%sZ/%sT%sZ', $date_start, $time_start, $date_end, $time_end );

		return add_query_arg(
			[
				'action'   => 'TEMPLATE',
				'text'     => sanitize_text_field( $event->post_title ),
				'dates'    => sanitize_text_field( $datetime ),
				'details'  => sanitize_text_field( $event->post_content ),
				'location' => '',
				'sprop'    => 'name:',
			],
			'https://www.google.com/calendar/render/'
		);

	}

	/**
	 * Get add to Yahoo! calendar link for event.
	 *
	 * @param \WP_Post $event
	 *
	 * @return string
	 */
	protected function _get_yahoo_calendar_link( \WP_Post $event ) : string {

		$date_start     = $this->_get_formatted_date( $event->ID, 'Ymd', 'datetime_start_gmt' );
		$time_start     = $this->_get_formatted_date( $event->ID, 'His', 'datetime_start_gmt' );
		$datetime_start = sprintf( '%sT%sZ', $date_start, $time_start );

		// Figure out duration of event in hours and minutes: hhmm format.
		$diff_start = $this->_get_formatted_date( $event->ID, 'Y-m-d H:i:s', 'datetime_start_gmt' );
		$diff_end   = $this->_get_formatted_date( $event->ID, 'Y-m-d H:i:s', 'datetime_end_gmt' );
		$duration   = ( ( strtotime( $diff_end ) - strtotime( $diff_start ) ) / 60 / 60 );
		$full       = intval( $duration );
		$fraction   = ( $duration - $full );
		$hours      = str_pad( intval( $duration ), 2, '0', STR_PAD_LEFT );
		$minutes    = str_pad( intval( $fraction * 60 ), 2, '0', STR_PAD_LEFT );

		return add_query_arg(
			[
				'v'      => '60',
				'view'   => 'd',
				'type'   => '20',
				'title'  => sanitize_text_field( $event->post_title ),
				'st'     => sanitize_text_field( $datetime_start ),
				'dur'    => sanitize_text_field( (string) $hours . (string) $minutes ),
				'desc'   => sanitize_text_field( $event->post_content ),
				'in_loc' => '',
			],
			'https://calendar.yahoo.com/'
		);

	}

	/**
	 * Get ICS download for event.
	 *
	 * @param \WP_Post $event
	 *
	 * @return string
	 */
	protected function _get_ics_calendar_download( \WP_Post $event ) : string {

		$date_start     = $this->_get_formatted_date( $event->ID, 'Ymd', 'datetime_start_gmt' );
		$time_start     = $this->_get_formatted_date( $event->ID, 'His', 'datetime_start_gmt' );
		$date_end       = $this->_get_formatted_date( $event->ID, 'Ymd', 'datetime_end_gmt' );
		$time_end       = $this->_get_formatted_date( $event->ID, 'His', 'datetime_end_gmt' );
		$datetime_start = sprintf( '%sT%sZ', $date_start, $time_start );
		$datetime_end   = sprintf( '%sT%sZ', $date_end, $time_end );

		$args = [
			'BEGIN:VCALENDAR',
			'VERSION:2.0',
			'BEGIN:VEVENT',
			sprintf( 'URL:%s', esc_url_raw( get_permalink( $event->ID ) ) ),
			sprintf( 'DTSTART:%s', sanitize_text_field( $datetime_start ) ),
			sprintf( 'DTEND:%s', sanitize_text_field( $datetime_end ) ),
			sprintf( 'SUMMARY:%s', sanitize_text_field( $event->post_title ) ),
			sprintf( 'DESCRIPTION:%s', sanitize_text_field( $event->post_content ) ),
			sprintf( 'LOCATION:%s', '' ),
			'END:VEVENT',
			'END:VCALENDAR',
		];

		return 'data:text/calendar;charset=utf8,' . implode( '%0A', $args );

	}

	/**
	 * Set custom columns for Event post type.
	 *
	 * @param array $columns
	 *
	 * @return array
	 */
	public function set_custom_columns( array $columns ) : array {

		$placement = 2;
		$insert    = [
			'datetime' => __( 'Date & time', 'gatherpress' ),
		];

		return array_slice( $columns, 0, $placement, true ) + $insert + array_slice( $columns, $placement, null, true );

	}

	/**
	 * Populate custom columns for Event post type.
	 *
	 * @param string $column
	 * @param int    $post_id
	 */
	public function custom_columns( string $column, int $post_id ) : void {

		switch ( $column ) {

			case 'datetime' :
				echo esc_html( $this->get_display_datetime( $post_id ) );
				break;
		}
	}

	/**
	 * Make custom columns sortable for Event post type.
	 *
	 * @param array $columns
	 *
	 * @return array
	 */
	public function sortable_columns( array $columns ) : array {

		$columns['datetime'] = 'datetime';

		return $columns;

	}

}

// EOF
