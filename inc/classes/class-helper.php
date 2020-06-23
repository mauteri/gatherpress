<?php

namespace GatherPress\Inc;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Helper {

	/**
	 * Render template.
	 *
	 * @param string $path
	 * @param array  $variables
	 *
	 * @return string
	 */
	public static function render_template( string $path, array $variables = [] ) : string {

		if ( ! file_exists( $path ) ) {
			return '';
		}

		if ( ! empty( $variables ) ) {
			extract( $variables, EXTR_SKIP );
		}

		ob_start();

		require $path; // better to fail with an error than to continue with incorrect/weird data

		return ob_get_clean();

	}

}

//EOF
