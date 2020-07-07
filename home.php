<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package gatherpress
 */

get_header();
?>
<div class="grid grid-cols-3">
<div class="col-span-2 p-10">
	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<?php
			if ( have_posts() ) {

				if ( is_home() && ! is_front_page() ) {
					?>
					<header>
						<h1 class="page-title screen-reader-text">
							<?php single_post_title(); ?>
						</h1>
					</header>
					<?php
				}
				?>
				<?php
				do_action( 'gatherpress_before_content' );
				/* Start the Loop */
				while ( have_posts() ) {
					the_post();

					/*
						* Include the Post-Type-specific template for the content.
						* If you want to override this in a child theme, then include a file
						* called content-___.php (where ___ is the Post Type name) and that will be used instead.
						*/
					get_template_part( 'template-parts/archive/content', get_post_type() );

				}
				the_posts_navigation();
			} else {
				get_template_part( 'template-parts/content', 'none' );
			}
			?>
		</main><!-- #main -->
	</div><!-- #primary -->

</div>
<div class="col-span-1 p-10">
	<?php get_sidebar(); ?>
</div>
</div>

<?php
get_footer();
