<?php
/**
 * Second Gather functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Gather_UnderWind
 */

if ( ! defined( 'GATHER_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( 'GATHER_VERSION', '1.0.0' );
}

if ( ! function_exists( 'gather_underwind_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function gather_underwind_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Second Gather, use a find and replace
		 * to change 'gather-underwind' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'gather-underwind', get_template_directory_uri() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'primary-menu' => esc_html__( 'Primary', 'gather-underwind' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'gather_underwind_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'gather_underwind_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function gather_underwind_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'gather_underwind_content_width', 640 );
}
add_action( 'after_setup_theme', 'gather_underwind_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function gather_underwind_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'gather-underwind' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'gather-underwind' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'gather_underwind_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function gather_underwind_scripts() {
	$url = untrailingslashit( get_template_directory_uri() );
	wp_register_style( 'gather-underwind-style', get_stylesheet_uri(), array(), GATHER_VERSION );
	wp_style_add_data( 'gather-underwind-style', 'rtl', 'replace' );

	wp_enqueue_script( 'gather-underwind-navigation', get_template_directory_uri() . '/js/navigation.js', array(), GATHER_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	wp_enqueue_script(
		'gather-underwind-tailwind',
		$url . '/build/tailwind.js',
		array(
			'jquery',
		)
	);
	wp_enqueue_style(
		'gather-underwind-tailwind',
		$url . '/build/tailwind.css',
		array( 'gather-underwind-style' )
	);
	wp_enqueue_style(
		'gather-underwind-underscores',
		$url . '/build/underscores.css'
	);
}
add_action( 'wp_enqueue_scripts', 'gather_underwind_scripts' );

add_action( 'init', 'load_gather_underwind_init' );
/**
 * load_gather_underwind_init
 *
 * Acticvate php files found in folders
 *
 * @return null
 */
function load_gather_underwind_init() {
	if ( file_exists( __DIR__ . '/inc' ) && is_dir( __DIR__ . '/inc' ) ) {
		foreach ( glob( __DIR__ . '/inc/*.php' ) as $filename ) {
			include $filename;
		}
	}
}


function gather_underwind_editor_assets() {
	$url = untrailingslashit( get_template_directory_uri() );

	// Scripts.
	wp_enqueue_script(
		'gather-underwind-js',
		$url . '/build/index.js',
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-plugins',
			'wp-edit-post',
		)
	);
	// Styles.
	wp_enqueue_style(
		'gather-underwind-editor',
		$url . '/build/editor.css',
		array( 'wp-edit-blocks' )
	);
}

add_action( 'enqueue_block_editor_assets', 'gather_underwind_editor_assets' );

/**
 * [gather_underwind_assets] Hook assets into the editor.
 *
 * @return [type] [description]
 */
function gather_underwind_assets() {
	$url = untrailingslashit( get_template_directory_uri() );

	wp_enqueue_style(
		'gather-underwind-frontend',
		$url . '/build/blocks.css'
	);
}

add_action( 'enqueue_block_assets', 'gather_underwind_assets' );

/**
 * Adding a block category creates a Panel
 * body  {
 *  background: rgba(128, 0, 0, .4);
 * }
 */
function create_gather_underwind_panel( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'gather-underwind',
				'title' => __( 'Gather UnderWind Panel', 'gather-underwind' ),
			),
		)
	);
}
add_filter( 'block_categories', 'create_gather_underwind_panel', 10, 2 );
