const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
 
addFilter(
  "blocks.registerBlockType",
  "gather-underwind/extending-register-block-type",
  extendWithRegisterBlockType
);
 
function extendWithRegisterBlockType(settings, name) {
 
  // Check for block type
  if ("core/code" === name) {
 
    // Change the block title
    settings.title = __("Code Snippet", "gather-underwind");
 
    // Change the block description
    settings.description = __(
      "Use for maximum codiness 💃",
      "gather-underwind"
    );
 
    // Change block icon
    settings.icon = "admin-tools";
 
    // Change supports
    settings.supports = lodash.merge( {}, settings.supports, {
      html: true,
      anchor: true
    });
 
  }
 
  return settings;
 
}