/**
 * EDIT: GatherPress Todo List
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Edit = ( props ) => {
	const {
		attributes: {
			content,
		},
		className,
		setAttributes,
	} = props;

	// Update field content on change.
	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	};

	return (
		<>
			<h3>Today's List</h3>
			<RichText
				tagName="p"
				// multiline="li"
				className={ className }
				onChange={ onChangeContent }
				value={ content }
				placeholder={ __( 'GatherPress Todo List Demo...', 'gatherpress-todo' ) }
			/>
		</>
	);
};

export default Edit;
