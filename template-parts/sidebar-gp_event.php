<?php
$event    = GatherPress\Inc\Event::get_instance();
$members  = count_users()['total_users'];
$logo     = get_custom_logo();
$calendar = $event->get_calendar_links( get_the_ID() );
?>
<section>
	<div class="flex justify-between">
		<div class="w-1/5">
			<?php echo wp_kses_post( $logo ); ?>
		</div>
		<div class="w-9/12">
			<h3 class="text-3xl">
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
	<h4 class="text-xl mt-4">
		<?php echo esc_html( $event->get_display_datetime( get_the_ID() ) ); ?>
	</h4>
	<div class="group inline-block relative mt-4">
		<button class="bg-gray-700 text-gray-200 font-semibold py-2 px-4 rounded inline-flex items-center" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			<span class="mr-1">
				<?php echo esc_html_e( 'Add to calendar', 'gatherpress' ); ?>
			</span>
			<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
			</svg>
		</button>
		<ul class="absolute right-0 hidden text-gray-700 pt-1 group-hover:block">
			<li>
				<a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" target="_blank" href="<?php echo esc_url( $calendar['google'] ); ?>">
					<?php esc_html_e( 'Google Calendar', 'gatherpress' ); ?>
				</a>
			</li>
			<li>
				<a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="<?php echo esc_attr( $calendar['isc'] ); ?>">
					<?php esc_html_e( 'iCal Calendar', 'gatherpress' ); ?>
				</a>
			</li>
			<li>
				<a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="<?php echo esc_attr( $calendar['isc'] ); ?>">
					<?php esc_html_e( 'Outlook Calendar', 'gatherpress' ); ?>
				</a>
			</li>
			<li>
				<a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" target="_blank" href="<?php echo esc_url( $calendar['yahoo'] ); ?>">
					<?php esc_html_e( 'Yahoo! Calendar', 'gatherpress' ); ?>
				</a>
			</li>
		</ul>
	</div>
</section>
