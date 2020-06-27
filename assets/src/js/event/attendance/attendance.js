import React, { Component } from 'react';
import { __ } from '@wordpress/i18n';

export function updateAttendanceList( attendanceList ) {

	this.setState( { attendanceList } );

}

export function updateActiveNavigation( activeNavigation ) {

	document.getElementById( 'nav-' + activeNavigation + '-tab' ).click();

}

export class Attendance extends Component {

	constructor( props ) {
		super( props );

		updateAttendanceList = updateAttendanceList.bind( this );

		this.state = {
			attendanceList: GatherPress.attendees,
		};

		this.pages = [
			{
				name: __( 'Attending', 'gatherpress' ),
				slug: 'attending',
			},
			{
				name: __( 'Waitlist', 'gatherpress' ),
				slug: 'waitlist',
			},
			{
				name: __( 'Not Attending', 'gatherpress' ),
				slug: 'not_attending',
			},
		];

		for ( let i = 0; i < this.pages.length; i++ ) {
			let item = this.pages[ i ];

			if ( GatherPress.current_user_status === item.slug ) {
				this.state.activeTab = i;
				break;
			}
		}
	}

	tabUpdate( e ) {
		e.preventDefault();
		let tab = e.target.dataset.id;
		for ( let i = 0; i < this.pages.length; i++ ) {
			let item = this.pages[ i ];

			if ( tab === item.slug ) {
				this.setState({
					activeTab: i
				});
				break;
			}
		}
	}

	displayNavigation() {
		let nav     = [];

		for ( let i = 0; i < this.pages.length; i++ ) {
			let item = this.pages[ i ],
				active = ( i === this.state.activeTab ) ? 'border-l border-t border-r rounded-t active' : '';

			nav.push(
				<li
					className = '-mb-px mr-1'
				>
					<a
						ref           = { input => this.navItem = input }
						key           = { item.slug }
						className     = { 'bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold ' + active }
						id            = { 'nav-' + item.slug + '-tab' }
						data-id       = { item.slug }
						data-toggle   = 'tab'
						href          = { '#nav-' + item.slug }
						role          = 'tab'
						aria-controls = { 'nav-' + item.slug }
						// aria-selected = { ( '' === item.active ) ? 'false' : 'true' }
						onClick       = { ( e ) => this.tabUpdate( e ) }
					>
						{ item.name }
					</a>
				</li>
			);
		}

		return nav;

	}

	displayContent() {
		let content = [];

		for ( let i = 0; i < this.pages.length; i++ ) {
			let item = this.pages[i],
				active = ( i === this.state.activeTab ) ? 'block' : 'hidden';

			content.push(
				<div
					key             = { item.slug }
					className       = { 'tab-pane ' + active }
					id              = { 'nav-' + item.slug }
					role            = 'tabpanel'
					aria-labelledby = { 'nav-' + item.slug + '-tab' }
				>
					<div
						key       = { item.slug }
						className = 'd-flex flex-row flex-wrap'
					>
						{ this.getAttendees( item.slug ) }
					</div>
				</div>
			)
		}

		return content;

	}

	getAttendees( slug ) {

		// if ( 'undefined' === typeof this.state.attendanceList[ slug ] ) {
		// 	return;
		// }

		const attendeeData = this.state.attendanceList[ slug ].attendees;

		let attendees = [];

		for ( let i = 0; i < attendeeData.length; i++ ) {
			let attendee = attendeeData[ i ];

			attendees.push(
				<div
					key       = { attendee.id }
					className = 'p-2'
				>
					<a
						href = { attendee.profile }
					>
						<img
							className = 'img-thumbnail'
							alt       = { attendee.name }
							title     = { attendee.name }
							src       = { attendee.photo }
						/>
					</a>
					<h5
						className = 'mt-2 mb-0'
					>
						<a
							href = { attendee.profile }
						>
							{ attendee.name }
						</a>
					</h5>
					<h6
						className = 'text-muted'
					>
						{ attendee.role }
					</h6>
				</div>
			);
		}

		return attendees;

	}

	render() {
		return(
			<div
				className = 'mt-4'
			>
				<nav>
					<ul
						className = 'flex border-b'
						id        = 'attendance-nav'
						role      = 'tablist'
					>
						{ this.displayNavigation() }
					</ul>
				</nav>
				<div
					className = 'tab-content p-3'
					id        = 'attendance-content'
				>
					{ this.displayContent() }
				</div>
			</div>
		);
	}
}
