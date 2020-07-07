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
<header class="bg-gray-800 p-4">
	<div class="flex">
		<div class="">
			<?php echo wp_kses_post( get_custom_logo() ); ?>
		</div>
		<div class="text-white">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<h1 class="text-6xl">
					<?php echo esc_html( get_bloginfo( 'name' ) ); ?>
				</h1>
				<h2 class="text-2xl">
					<?php echo esc_html( get_bloginfo( 'description' ) ); ?>
				</h2>
			</a>
		</div>
	</div>
</header>

<?php do_action( 'gatherpress_after_header' ); ?>

<div id="content" class="site-content">
