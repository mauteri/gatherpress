<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package gatherpress
 */
$event = GatherPress\Inc\Event::get_instance();
?>

<article class="mb-4 pb-4 border-b">
	<a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
		<?php
		the_post_thumbnail( 'post-thumbnail', [
			'alt' => the_title_attribute( [
				'echo' => false,
			] ),
			'class'=> 'card-img-top',
			'style' => 'height:auto',
		] );
		?>
	</a>
	<div>
		<h5 class="text-xl"><?php echo esc_html( $event->get_datetime_start( get_the_ID() ) ); ?></h5>
		<h2 class="text-3xl">
			<a class="<?php echo esc_attr( GatherPress\Inc\Helper::anchor_classes() ); ?>" href="<?php the_permalink(); ?>">
				<?php the_title(); ?>
			</a>
		</h2>
		<p>
			<?php echo wp_kses_post( get_the_excerpt() ); ?>
		</p>
	</div>
</article>
