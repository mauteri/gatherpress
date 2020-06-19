
  const paddingEditor = wp.compose.createHigherOrderComponent(function(
    BlockEdit
  ) {
    return function(props) {
      const padding = props.attributes.padding || 0;
      handleChange = name => newValue => {
        if (props) {
          props.setAttributes({ [name]: newValue });
        }
      };
      return el(
        Fragment,
        {},
        el(BlockEdit, props),
        el(
          editor.InspectorControls,
          {},
          el(
            components.PanelBody,
            {
              title: "Padding",
              className: "",
              initialOpen: false
            },
            el("p", {}, "Padding"),
            el(components.TextControl, {
              value: padding,
              onChange: this.handleChange("padding")
            })
          )
        )
      );
    };
  },
  "paddingStyle");

  wp.hooks.addFilter(
    "editor.BlockEdit",
    "my-plugin/padding-style",
    paddingStyle
  );

  function AddPaddingAttribute(element, blockType, attributes) {
    Object.assign(blockType.attributes, {
      padding: {
        type: "string"
      }
    });

    return element;
  }

  wp.hooks.addFilter(
    "blocks.getSaveElement",
    "my-plugin/add-padding-attr",
    AddPaddingAttribute
  );

  function AddPaddingStyle(props, blockType, attributes) {
    if (attributes.padding) {
      props.style = lodash.assign(props.style, { padding: attributes.padding });
    }
    return props;
  }

  wp.hooks.addFilter(
    "blocks.getSaveContent.extraProps",
    "my-plugin/add-background-color-style",
    AddPaddingStyle
  );