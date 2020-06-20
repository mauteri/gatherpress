import React, { Component } from 'react';
import { __ } from '@wordpress/i18n';

import { updateAttendanceList, updateActiveNavigation } from './attendance';

export class AttendanceButton extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			inputValue: this.attendanceStatus( GatherPress.current_user_status )
		};
	}

	attendanceStatus( status ) {

		switch ( status ) {
			case 'attending':
				return __( 'Attending', 'gatherpress' );
			case 'not_attending':
				return __( 'Not Attending', 'gatherpress' );
			case 'waitlist':
				return __( 'On Waitlist', 'gatherpress' );
		}

		return __( 'Attend', 'gatherpress' );

	}

	changeSelection( evt ) {

		evt.preventDefault();

		let status = evt.target.getAttribute( 'data-value' );

		this.updateStatus( status );

	}

	updateStatus( status ) {

		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-WP-Nonce': GatherPress.nonce,
			},
			body: JSON.stringify({
				status: status,
				post_id: GatherPress.post_id,
				_wpnonce: GatherPress.nonce
			})
		};
		fetch(
			GatherPress.event_rest_api + 'attendance', requestOptions
		).then( results => {
			return results.json();
		}).then( data => {

			if ( data.success ) {
				this.setState({
					inputValue: this.attendanceStatus( data.status )
				});

				updateAttendanceList( data.attendees );
				updateActiveNavigation( data.status );
			}

		});
	}

	render() {
		const hasEventPast = ( '1' === GatherPress.has_event_past ) ? 'disabled' : '';

		return(
			<div
				className  = 'btn-group'
			>
				<div
					className  = 'btn-group'
					role       = 'group'
				>
					<div
						className = 'btn-group'
						role      = 'group'
					>
						<button
							type          = 'button'
							className     = { 'btn btn-primary btn-lg dropdown-toggle ' + hasEventPast }
							data-toggle   = 'dropdown'
							aria-haspopup = 'true'
							aria-expanded = 'false'
						>

							{ this.state.inputValue }
						</button>
						<div
							className       = 'dropdown-menu'
						>
							<a
								className  = 'dropdown-item'
								href       = '#'
								data-value = 'attending'
								onClick    = { ( evt ) => this.changeSelection( evt ) }
							>
								{ __( 'Yes, I would like to attend this event.', 'gatherpress' ) }
							</a>
							<a
								className  = 'dropdown-item'
								href       = '#'
								data-value = 'not_attending'
								onClick    = { ( evt ) => this.changeSelection( evt ) }
							>
								{ __( 'No, I cannot attend this event.', 'gatherpress' ) }
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
