const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
 
addFilter(
  "blocks.registerBlockType",
  "gatherpress/extending-register-block-type",
  extendWithRegisterBlockType
);
 
function extendWithRegisterBlockType(settings, name) {
 
  // Check for block type
  if ("core/code" === name) {
 
    // Change the block title
    settings.title = __("Code Snippet", "gatherpress");
 
    // Change the block description
    settings.description = __(
      "Use for maximum codiness 💃",
      "gatherpress"
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