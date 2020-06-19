const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody } = wp.components;
import { Panel, PanelBody, PanelRow } from '@wordpress/components';

const MyPanel = () => (
    <Panel header="My Panel">
        <PanelBody
            title="My Block Settings"
            icon="welcome-widgets-menus"
            initialOpen={ true }
        >
            <PanelRow>
                My Panel Inputs and Labels
            </PanelRow>
        </PanelBody>
    </Panel>
);

const withInspectorControls =  createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody>
                        My custom control
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, "withInspectorControl" );
 
wp.hooks.addFilter(
    'editor.BlockEdit',
    'core/code/with-inspector-controls',
    withInspectorControls
);
