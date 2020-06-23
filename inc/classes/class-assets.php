<?php

namespace GatherPress\Inc;

use \GatherPress\Inc\Traits\Singleton;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Assets {

	use Singleton;

	protected $_build = GATHERPRESS_CORE_URL . '/assets/build/';

	/**
	 * Assets constructor.
	 */
	protected function __construct() {

		$this->_setup_hooks();

	}

	/**
	 * Setup hooks.
	 */
	protected function _setup_hooks() : void {

		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ] );
		add_action( 'enqueue_block_editor_assets', [ $this, 'block_enqueue_scripts' ] );

	}

	/**
	 * Enqueue frontend styles and scripts.
	 */
	public function enqueue_scripts() : void {

		$attendee = Attendee::get_instance();
		$event    = Event::get_instance();

		wp_enqueue_style( 'gatherpress-style-css',  $this->_build . 'style.css', [], GATHERPRESS_THEME_VERSION );

		wp_enqueue_style( 'gatherpress-bootstrap-css', $this->_build . 'bootstrap_css.css', [], GATHERPRESS_THEME_VERSION );

		wp_enqueue_script( 'gatherpress-bootstrap-js', $this->_build . 'bootstrap_js.js', [ 'jquery' ], GATHERPRESS_THEME_VERSION, true );

		if ( is_singular( 'gp_event' ) ) {
			global $post;

			wp_enqueue_script(
				'gatherpress-event-single-js',
				$this->_build . 'event_single.js',
				[
					'wp-i18n',
					'wp-element',
				],
				GATHERPRESS_THEME_VERSION,
				true
			);

			$user_id         = get_current_user_id();
			$attendee_status = $attendee->get_attendee( $post->ID, $user_id );

			wp_localize_script(
				'gatherpress-event-single-js',
				'GatherPress',
				[
					'has_event_past'      => $event->has_event_past( $post->ID ),
					'event_rest_api'      => home_url( 'wp-json/gatherpress/v1/event/' ),
					'nonce'               => wp_create_nonce( 'wp_rest' ),
					'post_id'             => $GLOBALS['post']->ID,
					'attendees'           => $attendee->get_attendees( $post->ID ),
					'current_user_status' => $attendee_status['status'] ?? '',
				]
			);
		}
	}

	/**
	 * Enqueue backend styles and scripts.
	 */
	public function admin_enqueue_scripts() : void {

		wp_enqueue_style( 'gatherpress-admin-css', $this->_build . 'admin.css', [], GATHERPRESS_THEME_VERSION );

	}

	/**
	 * Enqueue block styles and scripts.
	 */
	public function block_enqueue_scripts() : void {

		$post_id = $GLOBALS['post']->ID;

		wp_enqueue_style( 'gatherpress-editor-css', $this->_build . 'editor.css', [ 'wp-edit-blocks' ], GATHERPRESS_THEME_VERSION );

		wp_enqueue_script(
			'gatherpress-index-js',
			$this->_build . 'index.js',
			[
				'wp-blocks',
				'wp-i18n',
				'wp-element',
				'wp-plugins',
				'wp-edit-post',
			],
			GATHERPRESS_THEME_VERSION
		);

		wp_localize_script(
			'gatherpress-index-js',
			'GatherPress',
			[
				'nonce'            => wp_create_nonce( 'wp_rest' ),
				'post_id'          => $post_id,
				'event_datetime'   => Event::get_instance()->get_datetime( $post_id ),
				'event_announced'  => ( get_post_meta( $post_id, 'gp-event-announce', true ) ) ? 1 : 0,
				'default_timezone' => sanitize_text_field( wp_timezone_string() ),
			]
		);

	}

}

// EOF
