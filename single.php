<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package gatherpress
 */

get_header();
?>
	<main id="primary" class="site-main <?php gp_classes( 'gatherpress_site_main', 'col-span-2 p-10' ); ?>">
		<?php
		while ( have_posts() ) {
			the_post();

			get_template_part( 'template-parts/content', get_post_type() );

		} // End of the loop.

		// If comments are open or we have at least one comment, load up the comment template.
		if ( comments_open() || get_comments_number() ) {
			?>
			<div class="col-span-3 p-10">
				<?php comments_template(); ?>
			</div>
			<?php
		}
		?>
	</main><!-- #main -->
<?php
get_sidebar();
get_footer();
