/**
 * SAVE: GatherPress Todo List
 */
import { RichText } from '@wordpress/block-editor';

const Save = ( props ) => {
	const {
		attributes: {
			content,
		},
		className,
	} = props;

	return (
		<>
			<h3>ToDo List</h3>
			<RichText.Content
				className={ className }
				tagName="ul"
				multiline="li"
				value={ content }
			/>
		</>
	);
};

export default Save;
