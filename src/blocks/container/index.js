/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	registerBlockType,
} from '@wordpress/blocks';

import {
	InnerBlocks
} from '@wordpress/block-editor';

registerBlockType( 'gatherpress/container', {
	title: __( 'Starter Container', 'gatherpress' ),

	description: __( 'Provide custom container.' ),

	keywords: [
		__( 'container' ),
		__( 'wrapper' ),
		__( 'section' ),
	],

	supports: {
		align: [ 'wide', 'full' ],
		anchor: true,
		html: false,
	},

	category: 'gatherpress',

	icon: 'editor-kitchensink',

	attributes: {
		content: {
			type: 'string',
		},
	},

	edit: ( props ) => {
		const { className } = props;

		return (
			<div className={ className }>
				<InnerBlocks renderAppender={ InnerBlocks.ButtonBlockAppender } />
			</div>
		);
	},

	save: ( props ) => {
		const { className } = props;

		return (
			<div className={ className }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
