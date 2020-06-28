<?php
$event           = GatherPress\Inc\Event::get_instance();
$upcoming_events = GatherPress\Inc\Query::get_instance()->get_upcoming_events();

if ( $upcoming_events->have_posts() ) {
	?>
	<h2 class="text-3xl mb-4">
		<?php echo esc_html_e( 'Upcoming Events' ); ?>
	</h2>
	<?php
	while ( $upcoming_events->have_posts() ) {
		$upcoming_events->the_post();
		get_template_part( 'template-parts/archive/content', get_post_type() );
	}
}

wp_reset_query();
