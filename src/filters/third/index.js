const { addFilter } = wp.hooks;
 
import classnames from "classnames";
 
addFilter(
    "blocks.getBlockDefaultClassName",
    "gather-underwind/custom-cover-block-class-name",
    customCoverClassName
);
 
function customCoverClassName( className, name ) {
    if ( "core/cover" === name ) {
        // This will OVERRIDE the class
        // return "my-block-cover";

        // This will ADD a class
        return classnames( className, "my-block-cover" );
    }
    return className;
}
