import { registerBlockType } from '@wordpress/blocks';
import { withSelect } from '@wordpress/data';

registerBlockType( 'gatherpress/latest-post', {
    title: 'Latest post',
    icon: 'megaphone',
	category: 'gatherpress',

    edit: withSelect( ( select ) => {
        return {
            posts: select( 'core' ).getEntityRecords( 'postType', 'post' ),
        };
    } )( ( { posts, className } ) => {
        if ( ! posts ) {
            return 'Loading...';
        }

        if ( posts && posts.length === 0 ) {
            return 'No posts';
        }

        const post = posts[ 0 ];

        return <a className={ className } href={ post.link }>
            { post.title.rendered }
        </a>;
    } ),
} );
