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

			$slug      = sprintf( 'attendee-%d', $post->ID );
			$all       = get_term_by( 'slug', $slug, Attendee::TAXONOMY );
			$attending = get_term_by( 'slug', sprintf( '%s-attending', $slug ), Attendee::TAXONOMY );

			$all_ids       = get_objects_in_term( $all->term_id, Attendee::TAXONOMY );
			$attending_ids = get_objects_in_term( $attending->term_id, Attendee::TAXONOMY );

			$all_users       = [];
			$attending_users = [];

			if ( ! empty( $all_ids ) && is_array( $all_ids ) ) {
				foreach ( $all_ids as $id ) {
					$all_users[] = get_userdata( $id );
				}
			}

			if ( ! empty( $attending_ids ) && is_array( $attending_ids ) ) {
				foreach ( $attending_ids as $id ) {
					$attending_users[] = get_userdata( $id );
				}
			}

			wp_localize_script(
				'gatherpress-event-single-js',
				'GatherPress',
				[
					'event_rest_api' => home_url( 'wp-json/gatherpress/v1/event/' ),
					'nonce'          => wp_create_nonce( 'wp_rest' ),
					'post_id'        => $GLOBALS['post']->ID,
//					'attendance'     => [
//						'all'       => $all_users,
//						'attending' => $attending_users,
//					]
					'attendance'    => Attendee::get_instance()->get_attendees( $post->ID ),
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
				'nonce'          => wp_create_nonce( 'wp_rest' ),
				'post_id'        => $GLOBALS['post']->ID,
				'event_datetime' => Event::get_instance()->get_datetime( $GLOBALS['post']->ID ),
			]
		);

	}

}

// EOF
