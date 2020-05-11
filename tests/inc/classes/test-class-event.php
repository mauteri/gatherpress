<?php
namespace GatherPress\Tests\Inc;

use GatherPress\Inc\Event;

/**
 * @coversDefaultClass GatherPress\Inc\Event
 */
class Test_Event extends \WP_UnitTestCase {

	/**
	 * @covers ::get_calendar_links
	 * @covers ::_get_google_calendar_link
	 * @covers ::_get_ics_calendar_download
	 * @covers ::_get_yahoo_calendar_link
	 */
	public function test_get_calendar_links() {

		$instance = Event::get_instance();
		$post_id  = $this->factory->post->create(
			[
				'post_title'   => 'Unit Test Event',
				'post_type'    => 'gp_event',
				'post_content' => 'Unit Test description.',
			]
		);
		$params   = [
			'post_id'        => $post_id,
			'datetime_start' => '2020-05-11 15:00:00',
			'datetime_end'   => '2020-05-11 17:00:00',
		];

		$instance->save_datetimes( $params );

		$output  = $instance->get_calendar_links( $post_id );
		$expects = [
			'google' => 'https://www.google.com/calendar/render/?action=TEMPLATE&text=Unit Test Event&dates=20200511T150000Z/20200511T170000Z&details=Unit Test description.&location&sprop=name:',
			'isc'    => 'data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:http://example.org/?gp_event=unit-test-event%0ADTSTART:20200511T150000Z%0ADTEND:20200511T170000Z%0ASUMMARY:Unit Test Event%0ADESCRIPTION:Unit Test description.%0ALOCATION:%0AEND:VEVENT%0AEND:VCALENDAR',
			'yahoo'  => 'https://calendar.yahoo.com/?v=60&view=d&type=20&title=Unit Test Event&st=20200511T150000Z&dur=0200&desc=Unit Test description.&in_loc',
		];

		$this->assertSame( $expects, $output );

	}
}

// EOF
