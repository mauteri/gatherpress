<?php
$event           = GatherPress\Inc\Event::get_instance();
$upcoming_events = GatherPress\Inc\Query::get_instance()->get_upcoming_events();
 
if ( $upcoming_events->have_posts() ) {
	?>
	<div id="carouselUpcomingEvents" class="carousel slide" data-ride="carousel">
		<ol class="carousel-indicators">
			<?php
			$i = 0;
			while ( $upcoming_events->have_posts() ) {
				$upcoming_events->the_post();
				$active = ( 0 === $i ) ? 'active' : '';
				?>
				<li data-target="#carouselUpcomingEvents" data-slide-to="<?php echo intval( $i ); ?>" class="<?php echo esc_attr( $active ); ?>"></li>
				<?php
				$i++;
			}
			?>
		</ol>
		<div class="carousel-inner">
			<?php
			$i = 0;
			while ( $upcoming_events->have_posts() ) {
				$upcoming_events->the_post();
				$active = ( 0 === $i ) ? 'active' : '';
				?>
				<div class="<?php echo esc_attr( 'carousel-item ' . $active ); ?>">
					<svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
						<rect width="100%" height="100%" fill="#666"></rect>
					</svg>
					<div class="carousel-caption">
						<h5><?php echo esc_html( $event->get_datetime_start( get_the_ID() ) ); ?></h5>
						<h1><?php the_title(); ?></h1>
						<p><?php the_excerpt(); ?></p>
						<p>
							<a class="btn btn-lg btn-primary" href="<?php echo esc_url( get_the_permalink() ); ?>" role="button">
								<?php esc_html_e( 'Attend', 'gatherpress' ); ?>
							</a>
						</p>
					</div>
				</div>
				<?php
				$i++;
			}
			?>
		</div>
		<a class="carousel-control-prev" href="#carouselUpcomingEvents" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="sr-only">
				<?php esc_html_e( 'Previous', 'gatherpress' ); ?>
			</span>
		</a>
		<a class="carousel-control-next" href="#carouselUpcomingEvents" role="button" data-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="sr-only">
				<?php esc_html_e( 'Next', 'gatherpress' ); ?>
			</span>
		</a>
	</div>
	<?php
}

wp_reset_query();
