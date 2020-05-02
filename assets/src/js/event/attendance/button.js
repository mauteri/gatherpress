import React, { Component } from 'react';
import { __ } from '@wordpress/i18n';

export class AttendanceButton extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			inputValue: this.attendanceStatus( GatherPress.current_user_status )
		};
	}

	attendanceStatus( status ) {

		if ( status.includes( 'attending' ) ) {
			return __( 'Attending', 'gatherpress' );
		} else if ( status.includes( 'not-attending' ) ) {
			return __( 'Not Attending', 'gatherpress' );
		} else if ( status.includes( 'waitlist' )  ) {
			return __( 'On Waitlist', 'gatherpress' );
		}

		return __( 'Attend', 'gatherpress' );

	}

	changeSelection( evt ) {

		evt.preventDefault();

		let status = evt.target.getAttribute( 'data-value');

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
			let attendanceStatus = this.attendanceStatus( [ data.status ] );
			this.setState({
				inputValue: attendanceStatus
			});
		});
	}

	render() {
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
							className     = 'btn btn-primary btn-lg dropdown-toggle'
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
								data-value = 'not-attending'
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
