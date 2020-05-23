<?php

namespace GatherPress\Inc;

use \GatherPress\Inc\Traits\Singleton;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Email {

	use Singleton;

	/**
	 * BuddyPress constructor.
	 */
	protected function __construct() {

		$this->_setup_hooks();

	}

	/**
	 * Setup hooks.
	 */
	protected function _setup_hooks() : void {

		add_action( 'admin_init', [ $this, 'setup_email_templates' ] );

	}

	/**
	 * Basically a copy of bp_core_install_emails() for our creation of custom templates.
	 */
	public function setup_email_templates() : void {

		if ( is_multisite() && ! is_main_site() ) {
			return;
		}

		$key          = 'gp_email_templates';
		$templates    = get_option( $key, [] );
		$defaults     = [
			'post_status' => 'publish',
			'post_type'   => bp_get_email_post_type(),
		];
		$emails       = $this->_email_get_schema();
		$descriptions = $this->_email_get_type_schema( 'description' );
		$cache_key    = md5( json_encode( $emails ) ) . md5( json_encode( $descriptions ) );

		if ( $templates['cache_key'] === $cache_key ) {
			return;
		}

		$templates['cache_key'] = $cache_key;

		// Add these emails to the database.
		foreach ( $emails as $id => $email ) {
			// Some emails are multisite-only.
			if ( ! is_multisite() && isset( $email['args'] ) && ! empty( $email['args']['multisite'] ) ) {
				continue;
			}

			$args = bp_parse_args( $email, $defaults, 'install_email_' . $id );

			if (
				! intval( $templates[ $id ] )
				|| false === get_post_status( $templates[ $id ] )
			) {
				$post_id = wp_insert_post( $args );
			}

			if ( ! $post_id ) {
				continue;
			}

			$templates[ $id ] = $post_id;

			$tt_ids = wp_set_object_terms( $post_id, $id, bp_get_email_tax_type() );

			foreach ( $tt_ids as $tt_id ) {
				$term = get_term_by( 'term_taxonomy_id', (int) $tt_id, bp_get_email_tax_type() );

				wp_update_term(
					(int) $term->term_id,
					bp_get_email_tax_type(),
					[
						'description' => $descriptions[ $id ],
					]
				);
			}
		}

		update_option( $key, $templates );

	}

	protected function _email_get_schema() : array {

		return [
			'gp-event-announce' => [
				'post_title'   => __( '[{{{site.name}}}] posted new event', 'gatherpress' ),
				'post_content' => __( "{{event.name}} has been announced:\n\n<a href=\"{{{event.url}}}\">Go to the event page</a>.", 'gatherpress' ),
				'post_excerpt' => __( "{{event.name}} has been announced:\n\n<a href=\"{{{event.url}}}\">Go to the event page</a>.", 'gatherpress' ),
			],
		];

	}

	protected function _email_get_type_schema( string $field = 'description' ) : array {

		$types = [
			'gp-event-announce' => [
				'description'	=> __( 'A new event was announced.', 'gatherpress' ),
				'unsubscribe'	=> [
					'meta_key'	=> 'notification_event_announce',
					'message'	=> __( 'You will no longer receive emails when one of your groups announces an event.', 'gatherpress' ),
				],
			],
		];

		if ( 'all' !== $field ) {
			return wp_list_pluck( $types, $field );
		}

		return $types;

	}

	/**
	 * Announce new event to all members.
	 *
	 * @todo will need to send this to a queue to process for large groups.
	 *
	 * @param int $post_id
	 *
	 * @return bool
	 */
	public function announce_event( int $post_id ) : bool {

		$users = get_users();

		foreach ( $users as $user ) {

			if ( 'no' === bp_get_user_meta( (int) $user->ID, 'notification_event_announce', true ) ) {
				continue;
			}

			$unsubscribe_args = array(
				'user_id'           => $user->ID,
				'notification_type' => 'gp-event-announce',
			);

			$args = array(
				'tokens' => array(
					'site.name'   => esc_html( bp_get_site_name() ),
					'event.name'  => esc_html( get_the_title( $post_id ) ),
					'event.url'   => esc_url( get_the_permalink( $post_id ) ),
					'unsubscribe' => esc_url( bp_email_get_unsubscribe_link( $unsubscribe_args ) ),
				),
			);

			// @todo manage some sort of log.
			$sent = bp_send_email( 'gp-event-announce', $user->ID, $args );

		}

		return true;

	}

}

//EOF
