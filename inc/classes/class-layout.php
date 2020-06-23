<?php

namespace GatherPress\Inc;

use \GatherPress\Inc\Traits\Singleton;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Layout {

	use Singleton;

	/**
	 * Layout constructor.
	 */
	protected function __construct() {

		$this->_setup_hooks();

	}

	protected function _setup_hooks() {

		add_action( 'gatherpress_after_header', [ $this, 'homepage_carousel' ] );

	}

	public function homepage_carousel() {

		if ( is_home() ) {
			echo Helper::render_template(
				GATHERPRESS_CORE_PATH . '/template-parts/homepage-carousel.php',
				[]
			);
		}
	}

}

// EOF
