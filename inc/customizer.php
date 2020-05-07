<?php
/**
 * gatherpress Theme Customizer
 *
 * @package gatherpress
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function gatherpress_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-title a',
				'render_callback' => 'gatherpress_customize_partial_blogname',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector'        => '.site-description',
				'render_callback' => 'gatherpress_customize_partial_blogdescription',
			)
		);
	}
}
add_action( 'customize_register', 'gatherpress_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function gatherpress_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function gatherpress_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function gatherpress_customize_preview_js() {
	wp_enqueue_script( 'gatherpress-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'gatherpress_customize_preview_js' );

/**
 * Output CSS for background image with wp_add_inline_style
 */
function gatherpress_customizer_css() {
	$handle = 'gatherpress-style';
	wp_enqueue_style( $handle, get_stylesheet_directory_uri() . '/style.css' );

	$accent_color = get_theme_mod( 'gatherpress_accent_color' );

	$css = ( $accent_color !== '' ) ? sprintf(
		'
		.site-header{
			background-color : %s;
		}
	',
		$accent_color
	) : '';

	if ( $css ) {
		wp_add_inline_style( $handle, $css );
	}
}
add_action( 'wp_enqueue_scripts', 'gatherpress_customizer_css', 100 );

/**
 * gatherpress_social_media Add fields to customizer for Social Media outlets
 *
 * @param [type] $wp_customize
 * @return void
 */
function gatherpress_social_media( $wp_customize ) {
	$wp_customize->add_setting( 'gp_instagram', [ 'default' => 'https://instagram.com' ] );
	$wp_customize->add_setting( 'gp_twitter', [ 'default' => 'https://twitter.com' ] );
	$wp_customize->add_setting( 'gp_youtube', [ 'default' => 'https://youtube.com' ] );
	$wp_customize->add_setting( 'gp_facebook', [ 'default' => 'https://facebook.com' ] );
	$wp_customize->add_setting( 'gp_pinterest', [ 'default' => 'https://pinterest.com' ] );

	$wp_customize->add_panel(
		'gatherpress_panel',
		array(
			'title'       => __( 'GatherPress Panel', 'gatherpress' ),
			'priority'    => 20,
			'description' => __( 'Customizer location for GatherPress settings.', 'gatherpress' ),
		)
	);

	$wp_customize->get_section( 'colors' )->panel           = 'gatherpress_panel';
	$wp_customize->get_section( 'header_image' )->panel     = 'gatherpress_panel';
	$wp_customize->get_section( 'background_image' )->panel = 'gatherpress_panel';

	$wp_customize->add_section(
		'gp_social_media',
		array(
			'title'       => __( 'Social Media', 'gatherpress' ),
			'priority'    => 90,
			'panel'       => 'gatherpress_panel',
			'description' => __( 'Enter the URL to your accounts for each social media for the icon to appear in the header.', 'gatherpress' ),
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'gp_instagram',
			array(
				'label'    => __( 'Instagram', 'gatherpress' ),
				'section'  => 'gp_social_media',
				'settings' => 'gp_instagram',
			)
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'gp_twitter',
			array(
				'label'    => __( 'Twitter', 'gatherpress' ),
				'section'  => 'gp_social_media',
				'settings' => 'gp_twitter',
			)
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'gp_youtube',
			array(
				'label'    => __( 'YouTube', 'gatherpress' ),
				'section'  => 'gp_social_media',
				'settings' => 'gp_youtube',
			)
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'gp_facebook',
			array(
				'label'    => __( 'Facebook', 'gatherpress' ),
				'section'  => 'gp_social_media',
				'settings' => 'gp_facebook',
			)
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'gp_pinterest',
			array(
				'label'    => __( 'Pinterest', 'gatherpress' ),
				'section'  => 'gp_social_media',
				'settings' => 'gp_pinterest',
			)
		)
	);
}
add_action( 'customize_register', 'gatherpress_social_media' );

