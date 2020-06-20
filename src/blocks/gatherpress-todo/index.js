/**
 * REGISTER: GatherPress Todo List.
 */
import edit from './edit';
import save from './save';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'gatherpress/gatherpress-todo', {
	title: __( 'GatherPress Todo List', 'gatherpress-todo' ),
	icon: 'edit',
	category: 'common',
	keywords: [
		__( 'GatherPress', 'gatherpress-todo' ),
		__( 'gatherpress-todo', 'gatherpress-todo' ),
	],
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	edit,
	save,
} );
