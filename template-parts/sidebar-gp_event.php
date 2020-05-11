<?php
$event    = GatherPress\Inc\Event::get_instance();
$members  = count_users()['total_users'];
$logo     = get_custom_logo();
$calendar = $event->get_calendar_links( get_the_ID() );
?>
<section>

	<div class="media mb-4">
		<div class="media-image mr-3">
			<?php echo wp_kses_post( $logo ); ?>
		</div>
		<div class="media-body">
			<h3 class="mt-0">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<?php echo esc_html( get_bloginfo( 'name' ) ); ?>
				</a>
			</h3>
			<p>
				<?php echo esc_html( sprintf( _n( '%s Member', '%s Members', $members, 'gatherpress' ), $members ) ); ?>
			</p>
		</div>
	</div>
</section>
<section>
	<h4 class="h5">
		<?php echo esc_html( $event->get_display_datetime( get_the_ID() ) ); ?>
	</h4>
	<div class="dropdown show mt-4">
		<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			<?php echo esc_html_e( 'Add to calendar', 'gatherpress' ); ?>
		</a>
		<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
			<a class="dropdown-item" target="_blank" href="<?php echo esc_url( $calendar['google'] ); ?>">
				<?php esc_html_e( 'Google Calendar', 'gatherpress' ); ?>
			</a>
			<a class="dropdown-item" href="<?php echo esc_attr( $calendar['isc'] ); ?>">
				<?php esc_html_e( 'iCal Calendar', 'gatherpress' ); ?>
			</a>
			<a class="dropdown-item" href="<?php echo esc_attr( $calendar['isc'] ); ?>">
				<?php esc_html_e( 'Outlook Calendar', 'gatherpress' ); ?>
			</a>
			<a class="dropdown-item" target="_blank" href="<?php echo esc_url( $calendar['yahoo'] ); ?>">
				<?php esc_html_e( 'Yahoo! Calendar', 'gatherpress' ); ?>
			</a>
		</div>
	</div>
</section>
