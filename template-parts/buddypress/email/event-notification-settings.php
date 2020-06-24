<table class="notification-settings" id="event-notification-settings">
	<thead>
		<tr>
			<th class="icon">&nbsp;</th>
			<th class="title"><?php esc_html_e( 'Events', 'gatherpress' ); ?></th>
			<th class="yes"><?php esc_html_e( 'Yes', 'gatherpress' ); ?></th>
			<th class="no"><?php esc_html_e( 'No', 'gatherpress' ); ?></th>
		</tr>
	</thead> 
	<tbody>
		<tr id="event-notification-settings-announce">
			<td>&nbsp;</td>
			<td>
				<?php esc_html_e( 'A new event is announced.', 'gatherpress' ); ?>
			</td>
			<td class="yes">
				<input type="radio" name="notifications[notification_event_announce]" id="notification-event-announce-yes" value="yes" <?php checked( $announce, 'yes', true ); ?> />
				<label for="notification-event-announce-yes" class="bp-screen-reader-text">
					<?php esc_html_e( 'Yes, send email', 'gatherpress' ); ?>
				</label>
			</td>
			<td class="no">
				<input type="radio" name="notifications[notification_event_announce]" id="notification-event-announce-no" value="no" <?php checked( $announce, 'no', true ); ?> />
				<label for="notification-event-announce-no" class="bp-screen-reader-text">
					<?php esc_html_e( 'No, do not send email', 'gatherpress' ); ?>
				</label>
			</td>
		</tr>
	</tbody>
</table>
