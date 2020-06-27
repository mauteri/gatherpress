<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package gatherpress
 */

?>

		</div><!-- #content -->

		<footer id="colophon" class="site-footer bg-gray-800 grid grid-cols-2 gap-4 p-4 text-sm">
			<div class="text-left">
				<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'gatherpress' ) ); ?>" class="text-white hover:underline">
					<?php esc_html_e( 'Proudly powered by WordPress', 'gatherpress' ); ?>
				</a>
			</div>
			<div class="text-gray-500 text-right">
				<?php printf( esc_html__( 'Copyright &copy; %d GatherPress. All rights reserved.', 'gatherpress' ), date( 'Y' ) ); ?>
			</div>
		</footer>
	</div><!-- #page -->

	<?php wp_footer(); ?>

	</body>
</html>
