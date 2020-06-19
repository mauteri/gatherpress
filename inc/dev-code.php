<?php

add_filter( 'render_block', 'gather_underwind_show_block_type', 10, 2 );
function gather_underwind_show_block_type( $block_content, $block ) {
	if ( true === WP_DEBUG ) {
		$block_content = "<div class='wp-block' data-blockType='{$block['blockName']}'>{$block_content}<h5 style=\"color:salmon\">{$block['blockName']}</h5></div>";
	}
	return $block_content;
}
