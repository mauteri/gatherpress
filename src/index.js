/**
 * Internal dependencies
 */

import './blocks';
import './filters';

// svg code
import gatherPressIcon from './gatherpress-icon';

// alter the icon slot
wp.blocks.updateCategory( 'gather-underwind', {
    icon: gatherPressIcon
} );