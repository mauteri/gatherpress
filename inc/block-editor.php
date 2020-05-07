<?php
/**
 * Helps instantiate the Block Selector Panel.
 *
 * Currently also contains some diagnostic code.
 */

/**
 * https://jeanbaptisteaudras.com/en/2020/03/disable-block-editor-default-fullscreen-mode-in-wordpress-5-4/
 */
function jba_disable_editor_fullscreen_by_default() {
	$script = "jQuery( window ).load(function() { const isFullscreenMode = wp.data.select( 'core/edit-post' ).isFeatureActive( 'fullscreenMode' ); if ( isFullscreenMode ) { wp.data.dispatch( 'core/edit-post' ).toggleFeature( 'fullscreenMode' ); } });";
	wp_add_inline_script( 'wp-blocks', $script );
}
add_action( 'enqueue_block_editor_assets', 'jba_disable_editor_fullscreen_by_default' );

// add_filter( 'render_block', 'show_the_block_constituents', 10, 2 );
/**
 * [show_the_block_constituents] Debug code for showing the parts of WP Blocks
 *
 * @param  [string] $block_content
 * @param  [array]  $block
 * @return [string]
 */
function show_the_block_constituents( $block_content, $block ) {
	if ( true === WP_DEBUG && current_user_can( 'administrator' ) ) {
		$block_content = "<div class='wp-block' data-blockType='{$block['blockName']}'>{$block_content}</div>" . ( 'string' === gettype( $block['blockName'] ) ? '<pre><xmp> $block_content = ' . gettype( $block_content ) . " {$block['blockName']} " . print_r( $block, true ) . '</xmp></pre>' : '' );
	}
	return $block_content;
}

/**
 * Adding a block category creates a Panel
 */
function create_gatherpress_blocks_panel( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'gatherpress',
				'title' => __( 'GatherPress Blocks Panel', 'gatherpress' ),
			),
		)
	);
}
add_filter( 'block_categories', 'create_gatherpress_blocks_panel', 10, 2 );

