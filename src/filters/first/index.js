/**
 * Internal dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, RadioControl } = wp.components;

const withMyAttributeControl = wp.compose.createHigherOrderComponent(BlockEdit => {
    return props => {
        if (props.name !== "gather-underwind/container") {
            return <BlockEdit {...props} />;
        }

        const { setAttributes, attributes } = props;

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__("My Panel")}>
                        <RadioControl
                            label={__("My attribute")}
                            selected={attributes.custom.example_attribute_name}
                            options={[
                                {
                                    value: "value_A",
                                    label: "Value A"
                                },
                                {
                                    value: "value_B",
                                    label: "Value B"
                                }
                            ]}
                            onChange={value =>
                                setAttributes({
                                    custom: {
                                        // Its important to pass the whole object.
                                        ...attributes.custom,
                                        example_attribute_name: value
                                    }
                                })
                            }
                        />
                    </PanelBody>
                </InspectorControls>
                <BlockEdit {...props} />
            </Fragment>
        );
    };
}, "withMyAttributeControl");

wp.hooks.addFilter(
    "editor.BlockEdit",
    "gather-underwind/container",
    withMyAttributeControl
);