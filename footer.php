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


		<footer id="colophon" class="site-footer <?php gp_classes( 'gatherpress_site_footer', 'col-span-3 bg-gray-800' ); ?>">
			<div class="site-info <?php gp_classes( 'gatherpress_site_info', 'grid grid-cols-2 gap-4 p-4 text-sm' ); ?>">
				<div class="text-left">
					<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'gatherpress' ) ); ?>" class="text-white hover:underline">
						<?php esc_html_e( 'Proudly powered by WordPress', 'gatherpress' ); ?>
					</a>
				</div>
				<div class="text-gray-500 text-right">
					<?php printf( esc_html__( 'Copyright &copy; %d GatherPress. All rights reserved.', 'gatherpress' ), date( 'Y' ) ); ?>
				</div>
			</div>
		</footer>
	</div><!-- #page -->

	<?php wp_footer(); ?>

	</body>
</html>
