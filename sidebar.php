<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package gatherpress
 */

if ( ! is_active_sidebar( 'sidebar-1' ) && 'gp_event' !== get_post_type() ) {
	return;
}
?>

<aside id="secondary" class="sidebar-area <?php gp_classes( 'gatherpress_sidebar_area', 'col-span-1 p-10 ' ); ?>">
	<?php
	if ( is_single() ) {
		get_template_part( 'template-parts/sidebar', get_post_type() );
	}
	?>
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside><!-- #secondary -->
