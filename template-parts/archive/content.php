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

<article class="mb-4 border-bottom">
	<a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
		<?php
		the_post_thumbnail(
			'post-thumbnail',
			[
				'alt'   => the_title_attribute(
					[
						'echo' => false,
					]
				),
				'class' => 'card-img-top',
				'style' => 'height:auto',
			]
		);
		?>
	</a>
	<div>
		<h5><?php echo esc_html( $event->get_datetime_start( get_the_ID() ) ); ?></h5>
		<h2>
			<a href="<?php the_permalink(); ?>">
				<?php the_title(); ?>
			</a>
		</h2>
		<p>
			<?php echo wp_kses_post( get_the_excerpt() ); ?>
		</p>
	</div>
</article>
