// Custom block registration example using the filter.
wp.hooks.addFilter("melonpanBlockContainer.createBlock", "my-plugin/my-block", blocks => {
    return blocks.concat({
        // Default block registration properties. For more available properties:
        // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
        blocktype_props: {
            name: "melonpan/sample-block",
            title: "Sample Block",
            icon: "carrot",
            category: "melonpan"
        },
        // These properties will be passed to the InnerBlocks component. For more info:
        // https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/components/inner-blocks/README.md
        innerblocks_props: {
            template: [["core/quote"], ["core/image"]],
            templateLock: false,
            allowedBlocks: ["core/quote", "core/image"]
        },
        // Use this property to add extra props to the container, content or background divs.
        extra_props: {
            container: {
                id: "my_sample_id",
                className: "my_sample_container_class another_class"
            },
            content: {},
            background: { className: "my_sample_bg_class", style: { opacity: 0.5 } }
        },
        // This is the list of all the available properties and their default values.
        // Settings are opt-in so only the ones that are passed will be used.
        // If an empty object is passed (for example, background_color:{}) the default values will apply.
        // Set the "show_control" property to false if you want to apply the setting
        // with the default value but hide the control from the editor.
        settings: {
            // For more info check the section "Adding a custom attribute".
            custom: {
                example_attribute_name: { default: "value_A" },
                another_example_attribute_name: { default: true }
            },
            align: {
                default: "",
                options: ["left", "center", "right", "wide", "full"]
            },
            content_align: {
                show_control: true,
                default: "center"
            },
            content_maxwidth: {
                show_control: true,
                default: 800,
                min: 300,
                max: 1300
            },
            content_color: {
                show_control: true,
                default: "",
                colors: [
                    { name: "black", color: "#000000" },
                    { name: "white", color: "#ffffff" }
                ]
            },
            background_color: {
                show_control: true,
                default: "",
                colors: [
                    { name: "banana", color: "#fce198" },
                    { name: "sandia", color: "#f68c78" },
                    { name: "melocoton", color: "#ffc5b4" },
                    { name: "pistacho", color: "#bdb76b" },
                    { name: "ciruela", color: "#bd8f8f" },
                    { name: "naranja", color: "#ff7f50" },
                    { name: "endrina", color: "#708090" },
                    { name: "black", color: "#000000" },
                    { name: "white", color: "#ffffff" }
                ]
            },
            background_image: {},
            background_fixed: {
                show_control: true,
                default: false
            },
            background_color_opacity: {
                show_control: true,
                default: 50,
                min: 0,
                max: 100
            },
            border_color: {
                show_control: true,
                default: "",
                colors: [
                    { name: "black", color: "#000000" },
                    { name: "white", color: "#ffffff" }
                ]
            },
            border_color_opacity: {
                show_control: true,
                default: 15,
                min: 0,
                max: 100
            },
            border_width: {
                show_control: true,
                default: 0
            },
            shadow_color: {
                show_control: true,
                default: "",
                colors: [
                    { name: "black", color: "#000000" },
                    { name: "white", color: "#ffffff" }
                ]
            },
            shadow_color_opacity: {
                show_control: true,
                default: 15,
                min: 0,
                max: 100
            },
            shadow_width: {
                show_control: true,
                default: 0
            },
            // There are several sets of padding settings which can be combined.
            // For example: padding_top, padding_bottom and padding_leftright.
            padding: {
                show_control: true,
                default: 20,
                min: 0,
                max: 100
            },
            padding_top: {
                show_control: true,
                default: 20,
                min: 0,
                max: 200
            },
            padding_bottom: {
                show_control: true,
                default: 20,
                min: 0,
                max: 200
            },
            padding_left: {
                show_control: true,
                default: 20,
                min: 0,
                max: 100
            },
            padding_right: {
                show_control: true,
                default: 20,
                min: 0,
                max: 100
            },
            padding_topbottom: {
                show_control: true,
                default: 20,
                min: 0,
                max: 200
            },
            padding_leftright: {
                show_control: true,
                default: 20,
                min: 0,
                max: 100
            },
            // The following paddings will apply to screens smaller
            // than 600px in width, overriding the previous paddings.
            padding_small_screen: {
                show_control: true,
                default: 20,
                min: 0,
                max: 100
            },
            padding_top_small_screen: {
                show_control: true,
                default: 20,
                min: 0,
                max: 200
            },
            padding_bottom_small_screen: {
                show_control: true,
                default: 20,
                min: 0,
                max: 200
            },
            padding_left_small_screen: {
                show_control: true,
                default: 20,
                min: 0,
                max: 100
            },
            padding_right_small_screen: {
                show_control: true,
                default: 20,
                min: 0,
                max: 100
            },
            padding_topbottom_small_screen: {
                show_control: true,
                default: 20,
                min: 0,
                max: 200
            },
            padding_leftright_small_screen: {
                show_control: true,
                default: 20,
                min: 0,
                max: 100
            }
        },
        // Experimental: If you need to update the block to a new version
        // because either the "settings" or the "extra_props" objects changed,
        // pass those objects as they were before the change, inside an object.
        // Then wrap all the different versions inside an array.
        deprecated: [
            {
                // Old version of the block.
                extra_props: {
                    // ...
                },
                settings: {
                    // ...
                }
            },
            {
                // Another old version of the block.
                extra_props: {
                    // ...
                },
                settings: {
                    // ...
                }
            }
        ]
    });
});