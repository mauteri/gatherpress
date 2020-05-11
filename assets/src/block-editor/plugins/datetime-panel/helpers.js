import apiFetch from '@wordpress/api-fetch';
import { updateDateTimeStart } from './datetime-start/label'
import { updateDateTimeEnd } from './datetime-end/label'

export const dateTimeFormat = 'YYYY-MM-DDTHH:mm:ss';

// Checks if the post type is for events.
export function isEventPostType() {
	const getPostType = wp.data.select( 'core/editor' ).getCurrentPostType(); // Gets the current post type.

	return ( getPostType === 'gp_event' );
}


export function validateDateTimeStart( dateTime ) {
	const dateTimeEndNumeric = moment( GatherPress.event_datetime.datetime_end ).valueOf();
	const dateTimeNumeric    = moment( dateTime ).valueOf();

	if ( dateTimeNumeric >= dateTimeEndNumeric ) {
		const dateTimeEnd = moment( dateTimeNumeric ).add( 2, 'hours' ).format( dateTimeFormat );
		updateDateTimeEnd( dateTimeEnd );
	}
}

export function validateDateTimeEnd( dateTime ) {
	const dateTimeStartNumeric = moment( GatherPress.event_datetime.datetime_start ).valueOf();
	const dateTimeNumeric      = moment( dateTime ).valueOf();

	if ( dateTimeNumeric <= dateTimeStartNumeric ) {
		const dateTimeStart = moment( dateTimeNumeric ).add( 2, 'hours' ).format( dateTimeFormat );
		updateDateTimeStart( dateTimeStart );
	}
}

// @todo hack approach to enabling Save buttons after update
// https://github.com/WordPress/gutenberg/issues/13774
export function enableSave() {
	wp.data.dispatch( 'core/editor' ).editPost( { meta: { _non_existing_meta: true } } );
}

// @todo maybe put this is a save_post hook.
// https://www.ibenic.com/use-wordpress-hooks-package-javascript-apps/
// Then move button enabler
export function saveDateTime() {
	let isSavingPost     = wp.data.select( 'core/editor' ).isSavingPost(),
	isAutosavingPost = wp.data.select( 'core/editor' ).isAutosavingPost();

	if ( isSavingPost && ! isAutosavingPost ) {
		apiFetch(
		{
			path: '/gatherpress/v1/event/datetime/',
			method: 'POST',
			data: {
				post_id: GatherPress.post_id,
				datetime_start: moment(GatherPress.event_datetime.datetime_start).format('YYYY-MM-DD HH:mm:ss'),
				datetime_end: moment(GatherPress.event_datetime.datetime_end).format('YYYY-MM-DD HH:mm:ss'),
				_wpnonce: GatherPress.nonce,
			},
		}
		).then((res) => {
			// Saved.
		});
	}
}
