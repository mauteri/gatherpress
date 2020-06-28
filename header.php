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
	<h1 class="text-4xl">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="text-white">
			<?php bloginfo( 'name' ); ?>
		</a>
	</h1>
</header>

<?php do_action( 'gatherpress_after_header' ); ?>

<div id="content" class="site-content">
