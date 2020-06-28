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
<div class="grid grid-cols-3">
	<div id="primary" class="col-span-2 p-10">
		<main id="main" class="site-main container">
			<?php
			while ( have_posts() ) {
				the_post();

				get_template_part( 'template-parts/content', get_post_type() );

			} // End of the loop.
			?>
		</main><!-- #main -->
	</div><!-- #primary -->
	<div class="col-span-1 p-10">
		<?php get_sidebar(); ?>
	</div>
	<?php
	// If comments are open or we have at least one comment, load up the comment template.
	if ( comments_open() || get_comments_number() ) {
		?>
		<div class="col-span-3 p-10">
			<?php comments_template(); ?>
		</div>
		<?php
	}
	?>
</div>
<?php
get_footer();
