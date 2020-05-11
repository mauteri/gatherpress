import React, { Component } from 'react';
import { dateI18n, __experimentalGetSettings } from '@wordpress/date';
import { enableSave, validateDateTimeEnd } from '../helpers';

export function updateDateTimeEnd( dateTime, setState = null ) {
	validateDateTimeEnd( dateTime );

	GatherPress.event_datetime.datetime_end = dateTime;

	this.setState({
		dateTime: dateTime
	});

	if ( null !== setState ) {
		setState( { dateTime } );
	}

	enableSave();
}

export function getDateTimeEnd() {
	return this.state.dateTime;
}

export class DateTimeEndLabel extends Component {
	constructor( props ) {
		super( props );


		this.state = {
			dateTime: GatherPress.event_datetime.datetime_end,
		};
	}

	render() {
		updateDateTimeEnd = updateDateTimeEnd.bind( this );
		getDateTimeEnd    = getDateTimeEnd.bind( this );

		const settings = __experimentalGetSettings();

		return(
			dateI18n(
				`${ settings.formats.date } ${ settings.formats.time }`,
				this.state.dateTime
			)
		)
	}
}
