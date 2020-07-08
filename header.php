<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package gatherpress
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<?php wp_body_open(); ?>
	<div id="page" class="site grid grid-cols-3">
		<a class="skip-link screen-reader-text" href="#primary">
			<?php esc_html_e( 'Skip to content', 'gatherpress' ); ?>
		</a>
		<header id="masthead" class="site-header col-span-3 bg-gray-800 p-4">
			<div class="site-branding flex">
				<div class="">
					<?php echo wp_kses_post( get_custom_logo() ); ?>
				</div>
				<div class="text-white">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<h1 class="site-title text-6xl">
							<?php echo esc_html( get_bloginfo( 'name' ) ); ?>
						</h1>
						<h2 class="site-descriptions text-2xl">
							<?php echo esc_html( get_bloginfo( 'description' ) ); ?>
						</h2>
					</a>
				</div>
			</div>
			<nav id="site-navigation" class="main-navigation">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
					<?php esc_html_e( 'Primary Menu', 'gatherpress' ); ?>
				</button>
				<?php
				wp_nav_menu(
					[
						'theme_location' => 'menu-1',
						'menu_id'        => 'primary-menu',
					]
				);
				?>
			</nav><!-- #site-navigation -->
		</header>
