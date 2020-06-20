/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	addFilter,
} from '@wordpress/hooks';

import {
	Fragment,
} from '@wordpress/element';

import {
    InspectorControls,
} from '@wordpress/block-editor';

import {
    createHigherOrderComponent,
    withState
} from '@wordpress/compose';

import {
    Panel,
    PanelBody,
    PanelRow,
    TextControl,
    ToggleControl,
} from '@wordpress/components';

import classnames from 'classnames';

addFilter(
    'blocks.registerBlockType',
    'gatherpress/add-code-attributes',
    addCodeAttributes
);

addFilter(
    'editor.BlockEdit',
    'gatherpress/add-code-inspector-controls',
    addCodeInspectorControls
);

addFilter(
    'blocks.getSaveElement',
    'gatherpress/modify-code-save-settings',
    modifyCodeSaveSettings
);

function addCodeAttributes(settings, name) {
    if ('core/code' !== name) return settings;

    settings.supports = lodash.merge({}, settings.supports, {
        align: ['full', 'wide']
    });
    settings.attributes.align = {
        type: 'string',
        default: 'full'
    };
    settings.attributes.highContrast = {
        type: 'boolean',
        default: false
    };
    return settings;
}

const MyTextControl = withState( {
    className: 'basic-css',
} )( ( { className, setState } ) => ( 
    <TextControl
        label="Additional CSS Class"
        value={ className }
        onChange={ ( className ) => setState( { className } ) }
    />
) );
function addCodeInspectorControls(BlockEdit) {
    const withInspectorControls = createHigherOrderComponent(BlockEdit => {
        return props => {
            if ('core/code' !== props.name) {
                return <BlockEdit {...props} />;
            }

            return (
            <Fragment>
                <div
                className={classnames({
                    'high-contrast': props.attributes.highContrast
                })}
                >
                <BlockEdit {...props} />
                </div>
                <InspectorControls>
                    <PanelBody
                        title={
                            __('Custom Code Settings', 'gatherpress')
                        }
                        icon="welcome-widgets-menus"
                        initialOpen={ true }
                        >
                        <PanelRow>
                            <MyTextControl />
                        </PanelRow>
                        <PanelRow>
                            <ToggleControl
                                label={__('High Contrast', 'gatherpress')}
                                checked={props.attributes.highContrast}
                                onChange={highContrast => props.setAttributes({ highContrast })}
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
            </Fragment>
            );
        };
    });
    return withInspectorControls(BlockEdit);
}

function modifyCodeSaveSettings(el, block, attributes) {
    if ('core/code' === block.name && attributes.highContrast) {
        el.props.className = classnames(el.props.className, {
            'high-contrast': attributes.highContrast
        });
    }
    return el;
}
