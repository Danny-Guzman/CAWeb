<?php

/*

	This function is only used with the predefined layouts

	to extract certain fields embedded into the layouts and

	update post custom meta



	Mode Explanation

	0 = (Default) Strip everything from the post content except the value of the embedded_attr

	1 = Strip everything from the post content except the content from the module of the embedded_attr

	2 = Same as number 1, except it returns an excerpt of at least 45 words

	3 = Same as 0, except it will return the value of the swapped_attr

*/

function retrieve_layout_attr($content, $embedded_attr = "", $mode = 0, $swapped_attr = ""){
	$val = '';


	if("" != strpos($content, $embedded_attr) ){



		switch($mode){

			case 0:

			$val = substr($content, strpos($content, $embedded_attr)+ strlen( $embedded_attr) +2);

			$val = substr($val , 0, strpos($val ,'"'));

			break;

			case 1:

			case 2:

				$val = substr($content, strpos($content, $embedded_attr));

				$val = substr($val , strpos($val, ']') + 1);

				$val = trim(substr($val , 0, strpos($val ,'[')));



				if(str_word_count($val) > 45){
					$words =  explode(" ", $val);
					$word_limit = array_splice($words,0, 45);

					$val =  implode(" ", $word_limit) . '...';

				}

			break;

			case 3:

			$val = substr($content, strpos($content, $embedded_attr) +  3 + strlen( $embedded_attr) * 2);

			$val =substr($val, strpos($val, $swapped_attr ) +  strlen( $swapped_attr) + 2)  ;

			//$val = substr($val , strpos($val , $swapped_attr ) + strlen( $swapped_attr ) +2);

			$val = substr($val , 0, strpos($val ,'"'));

			break;

		}



	}

	return $val;

}



function ca_save_post_list_meta($post_id, $post){

	$fields = array('ca_course_location','ca_course_desc','ca_course_time', 'ca_news_excerpt', 'ca_news_image');

	$cats = wp_get_post_categories($post_id);

	$tags = wp_get_post_tags( $post_id, array( 'fields' => 'ids' ) );

	$content = $post->post_content;



	foreach($fields as $key){

		delete_post_meta($post_id, $key);

	}



	switch(retrieve_layout_attr($content, 'ca_layout')){

		case "Course Detail":

			array_push($cats , get_cat_ID('Courses'));



			update_post_meta($post_id, 'ca_course_location',retrieve_layout_attr($content, 'ca_course_location',1));

			update_post_meta($post_id, 'ca_course_time',retrieve_layout_attr($content, 'ca_course_time',1));

			update_post_meta($post_id, 'ca_course_desc',retrieve_layout_attr($content, 'ca_course_desc',2));

			update_post_meta($post_id, 'ca_course_image',retrieve_layout_attr($content, 'ca_course_image',3, 'image_url'));

			break;

		case "News Detail":


			array_push($cats , get_cat_ID('News'));
			update_post_meta($post_id, 'ca_news_excerpt',retrieve_layout_attr($content, 'ca_news_excerpt',1));

			update_post_meta($post_id, 'ca_news_image',retrieve_layout_attr($content, 'ca_news_image',3, 'image'));

			break;

	}



	wp_set_object_terms( $post_id, $cats , 'category');

}



add_action( 'save_post', 'ca_save_post_list_meta', 10, 2 );



function ca_predefined_layouts() {

 	// delete default layouts

	// delete all default layouts w/o new built_for meta

	et_pb_delete_predefined_layouts();

	// delete all default layouts w/ new built_for meta

	et_pb_delete_predefined_layouts('post');

	et_pb_delete_predefined_layouts('page');



ca_get_layouts();

}



add_action('admin_init', 'ca_predefined_layouts');



/* Collect CA Predefined Layouts

	Sample structure for layouts

$ca_layouts[] = array(

'name' => 'Layout Name',

'content' => <<<EOT

Layout Content

EOT

);

*/

function ca_get_layouts(){

$ca_layouts = array();







$ca_layouts[] = array(

'name' => 'Course Detail',

'content' => <<<EOT

[/et_pb_section][et_pb_section admin_label="Section" fullwidth="on" specialty="off" ca_layout="Course Detail" ][et_pb_fullwidth_header admin_label="Course Title" title="Course Title"  subhead="Subheading text." background_layout="light" text_orientation="left" header_fullscreen="off" header_scroll_down="off" background_color="rgba(239,239,239,0.78)" parallax="off" parallax_method="off" content_orientation="center" image_orientation="center" custom_button_one="off" button_one_letter_spacing="0" button_one_use_icon="default" button_one_icon_placement="right" button_one_on_hover="on" button_one_letter_spacing_hover="0" custom_button_two="off" button_two_letter_spacing="0" button_two_use_icon="default" button_two_icon_placement="right" button_two_on_hover="on" button_two_letter_spacing_hover="0"] [/et_pb_fullwidth_header][/et_pb_section][et_pb_section admin_label="section"][et_pb_row admin_label="row"][et_pb_column type="2_3"][et_pb_ca_panel admin_label="Description"  ca_course_desc="ca_course_desc" panel_layout="none" show_button="off"]



Course description goes here. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.



[/et_pb_ca_panel][/et_pb_column][et_pb_column type="1_3"][et_pb_blurb admin_label="Highlights" url_new_window="off" use_icon="on" font_icon="%%57%%" icon_color="#33af1d" use_circle="off" circle_color="#7EBEC5" use_circle_border="off" circle_border_color="#7EBEC5" icon_placement="left" animation="left" background_layout="light" text_orientation="left" use_icon_font_size="off" use_border_color="off" border_color="#ffffff" border_style="solid"]



Participants will receive:





Certificate of Participation





One hour MCLE credit





One hour HRCI credit





[/et_pb_blurb][/et_pb_column][/et_pb_row][et_pb_row admin_label="Row"][et_pb_column type="4_4"][et_pb_team_member admin_label="Instructor" name="Instructor Name"  position="Position title and agency" ca_course_image="ca_course_image" image_url="https://dev.wptesting.org/files/2016/08/image-blank.jpg"  animation="left" background_layout="light" facebook_url="#" twitter_url="#" google_url="#" linkedin_url="#" use_border_color="off" border_color="#ffffff" border_style="solid" ]



Instructor bio goes here. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam.



[/et_pb_team_member][/et_pb_column][/et_pb_row][et_pb_row admin_label="Row"][et_pb_column type="1_3"][et_pb_blurb admin_label="Date and Time" ca_course_time="ca_course_time" title="Date and Time" url_new_window="off" use_icon="on" font_icon="%%373%%" icon_color="rgba(12,113,195,0.79)" use_circle="off" circle_color="#7EBEC5" use_circle_border="off" circle_border_color="#7EBEC5" icon_placement="left" animation="left" background_layout="light" text_orientation="left" use_icon_font_size="off" use_border_color="off" border_color="#ffffff" border_style="solid"]



Day, MM/DD/YY at 10:00 AM



[/et_pb_blurb][/et_pb_column][et_pb_column type="1_3"][et_pb_blurb admin_label="Cost" title="Cost" url_new_window="off" use_icon="on" font_icon="%%155%%" icon_color="#7cda24" use_circle="off" circle_color="#7EBEC5" use_circle_border="off" circle_border_color="#7EBEC5" icon_placement="left" animation="left" background_layout="light" text_orientation="left" use_icon_font_size="off" use_border_color="off" border_color="#ffffff" border_style="solid"]



Registration Type: Open

Cost: Free



[/et_pb_blurb][/et_pb_column][et_pb_column type="1_3"][et_pb_blurb admin_label="Location" ca_course_location="ca_course_location" title="Location" url_new_window="off" use_icon="on" font_icon="%%122%%" icon_color="#e09900" use_circle="off" circle_color="#7EBEC5" use_circle_border="off" circle_border_color="#7EBEC5" icon_placement="left" animation="left" background_layout="light" text_orientation="left" use_icon_font_size="off" use_border_color="off" border_color="#ffffff" border_style="solid"]



Capitol Building

1315 10th St, Sacramento, CA 95814



[/et_pb_blurb][/et_pb_column][/et_pb_row][et_pb_row admin_label="Row"][et_pb_column type="4_4"][et_pb_map admin_label="Map" mouse_wheel="on" mobile_dragging="on" use_grayscale_filter="off" address="1315 10th St, Sacramento, CA 95814, USA" address_lat="38.5765874" address_lng="-121.49324530000001" zoom_level="16"] [et_pb_map_pin title="Capitol Building" pin_address="1315 10th St, Sacramento, CA 95814, USA" pin_address_lat="38.5765874" pin_address_lng="-121.49324530000001"]



apple-touch-icon-144x1441315 10th St

Sacramento, CA 95814

(555) 111-1212



[/et_pb_map_pin] [/et_pb_map][/et_pb_column][/et_pb_row][/et_pb_section]

EOT

);



$ca_layouts[] = array(

'name' => 'Event Detail',

'content' => <<<EOT

[et_pb_section admin_label="Section" fullwidth="on" specialty="off"][et_pb_fullwidth_header admin_label="Event Title" title="Event Title" subhead="Subheading text." background_layout="light" text_orientation="left" header_fullscreen="off" header_scroll_down="off" background_color="rgba(239,239,239,0.78)" parallax="off" parallax_method="off" content_orientation="center" image_orientation="center" custom_button_one="off" button_one_letter_spacing="0" button_one_use_icon="default" button_one_icon_placement="right" button_one_on_hover="on" button_one_letter_spacing_hover="0" custom_button_two="off" button_two_letter_spacing="0" button_two_use_icon="default" button_two_icon_placement="right" button_two_on_hover="on" button_two_letter_spacing_hover="0"] [/et_pb_fullwidth_header][/et_pb_section][et_pb_section admin_label="section"][et_pb_row admin_label="Row"][et_pb_column type="2_3"][et_pb_text admin_label="Description" background_layout="light" text_orientation="left" use_border_color="off" border_color="#ffffff" border_style="solid"]



Event description goes here. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.



[/et_pb_text][et_pb_team_member admin_label="Presenter" name="Presenter Name" position="Position title and agency" image_url="https://dev.wptesting.org/files/2016/08/image-blank.jpg" animation="left" background_layout="light" facebook_url="#" twitter_url="#" google_url="#" linkedin_url="#" use_border_color="off" border_color="#ffffff" border_style="solid"]



Presenter bio goes here. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam.



[/et_pb_team_member][/et_pb_column][et_pb_column type="1_3"][et_pb_blurb admin_label="Highlights" url_new_window="off" use_icon="on" font_icon="%%57%%" icon_color="#33af1d" use_circle="off" circle_color="#7EBEC5" use_circle_border="off" circle_border_color="#7EBEC5" icon_placement="left" animation="left" background_layout="light" text_orientation="left" use_icon_font_size="off" use_border_color="off" border_color="#ffffff" border_style="solid"]



Participants will receive:





Certificate of Participation





One hour MCLE credit





One hour HRCI credit





[/et_pb_blurb][et_pb_blurb admin_label="Date and Time" title="Date and Time" url_new_window="off" use_icon="on" font_icon="%%373%%" icon_color="rgba(12,113,195,0.79)" use_circle="off" circle_color="#7EBEC5" use_circle_border="off" circle_border_color="#7EBEC5" icon_placement="left" animation="left" background_layout="light" text_orientation="left" use_icon_font_size="off" use_border_color="off" border_color="#ffffff" border_style="solid"]



Day, MM/DD/YY at 10:00 AM



[/et_pb_blurb][et_pb_blurb admin_label="Cost" title="Cost" url_new_window="off" use_icon="on" font_icon="%%155%%" icon_color="#7cda24" use_circle="off" circle_color="#7EBEC5" use_circle_border="off" circle_border_color="#7EBEC5" icon_placement="left" animation="left" background_layout="light" text_orientation="left" use_icon_font_size="off" use_border_color="off" border_color="#ffffff" border_style="solid"]



Registration Type: Open

Cost: Free



[/et_pb_blurb][et_pb_blurb admin_label="Location" title="Location" url_new_window="off" use_icon="on" font_icon="%%122%%" icon_color="#e09900" use_circle="off" circle_color="#7EBEC5" use_circle_border="off" circle_border_color="#7EBEC5" icon_placement="left" animation="left" background_layout="light" text_orientation="left" use_icon_font_size="off" use_border_color="off" border_color="#ffffff" border_style="solid"]



Capitol Building

1315 10th St, Sacramento, CA 95814



[/et_pb_blurb][et_pb_map admin_label="Map" mouse_wheel="on" mobile_dragging="on" use_grayscale_filter="off" address="1315 10th St, Sacramento, CA 95814, USA" address_lat="38.5765874" address_lng="-121.49324530000001" zoom_level="16"] [et_pb_map_pin title="Capitol Building" pin_address="1315 10th St, Sacramento, CA 95814, USA" pin_address_lat="38.5765874" pin_address_lng="-121.49324530000001"]



apple-touch-icon-144x1441315 10th St

Sacramento, CA 95814

(555) 111-1212



[/et_pb_map_pin] [/et_pb_map][/et_pb_column][/et_pb_row][/et_pb_section]

EOT

);





$ca_layouts[] = array(

'name' => 'Job Detail',

'content' => <<<EOT

[et_pb_section admin_label="Section" fullwidth="on" specialty="off"][et_pb_fullwidth_header admin_label="Job Title" title="Job Title" background_layout="light" text_orientation="left" header_fullscreen="off" header_scroll_down="off" background_color="rgba(239,239,239,0.78)" parallax="off" parallax_method="off" content_orientation="center" image_orientation="center" custom_button_one="off" button_one_letter_spacing="0" button_one_use_icon="default" button_one_icon_placement="right" button_one_on_hover="on" button_one_letter_spacing_hover="0" custom_button_two="off" button_two_letter_spacing="0" button_two_use_icon="default" button_two_icon_placement="right" button_two_on_hover="on" button_two_letter_spacing_hover="0"]

Agency Name

123 Address, City, State



Published: Date



[/et_pb_fullwidth_header][/et_pb_section][et_pb_section admin_label="section"][et_pb_row admin_label="Row"][et_pb_column type="1_2"][et_pb_blurb admin_label="Position Type and Salary" url_new_window="off" use_icon="on" icon_color="#02bfe7" use_circle="off" circle_color="#7EBEC5" use_circle_border="off" circle_border_color="#7EBEC5" icon_placement="left" animation="left" background_layout="light" text_orientation="left" use_icon_font_size="off" use_border_color="off" border_color="#ffffff" border_style="solid" font_icon="%%373%%"]



Full Time, Swing, M-F, HH:MM AM — HH:MM PM

Salary Range: x,xxx — x,xxx

Position Number: RPA #11-111-111

Duty Statement (PDF)



[/et_pb_blurb][et_pb_blurb admin_label="Final Filing Date" url_new_window="off" use_icon="on" icon_color="#d34a37" use_circle="off" circle_color="#7EBEC5" use_circle_border="off" circle_border_color="#7EBEC5" icon_placement="left" animation="left" background_layout="light" text_orientation="left" use_icon_font_size="off" use_border_color="off" border_color="#ffffff" border_style="solid" font_icon="%%167%%"]



Final Filing Date: MM/DD/YYYY



[/et_pb_blurb][/et_pb_column][et_pb_column type="1_2"][et_pb_blurb admin_label="Apply To" url_new_window="off" use_icon="on" icon_color="#fdb81e" use_circle="off" circle_color="#7EBEC5" use_circle_border="off" circle_border_color="#7EBEC5" icon_placement="left" animation="left" background_layout="light" text_orientation="left" use_icon_font_size="off" use_border_color="off" border_color="#ffffff" border_style="solid" font_icon="%%109%%"]



Apply To:

Agency or Department Name Attn: First Last

Street Name and Number

City, State Zip



[/et_pb_blurb][et_pb_blurb admin_label="Questions" url_new_window="off" use_icon="on" icon_color="#35bbaa" use_circle="off" circle_color="#7EBEC5" use_circle_border="off" circle_border_color="#7EBEC5" icon_placement="left" animation="left" background_layout="light" text_orientation="left" use_icon_font_size="off" use_border_color="off" border_color="#ffffff" border_style="solid" font_icon="%%83%%"]



Questions

Contact Name and phone



[/et_pb_blurb][/et_pb_column][/et_pb_row][et_pb_row admin_label="Row"][et_pb_column type="4_4"][et_pb_text admin_label="Job Description" background_layout="light" text_orientation="left" use_border_color="off" border_color="#ffffff" border_style="solid"]

Job Description



Job description goes here. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Donec sed odio dui.



Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.



[/et_pb_text][et_pb_text admin_label="Desired Skills and Experience" background_layout="light" text_orientation="left" use_border_color="off" border_color="#ffffff" border_style="solid"]

Desired Skills and Experience







Morbi leo risus, porta ac consectetur ac, vestibulum at eros.





Sed posuere consectetur est at lobortis.





Donec sed odio dui.





Sed posuere consectetur est at lobortis.





[/et_pb_text][/et_pb_column][/et_pb_row][et_pb_row admin_label="Row"][et_pb_column type="1_2"][et_pb_blurb admin_label="Additional Information" title="Additional Information" url_new_window="off" use_icon="on" font_icon="%%28%%" icon_color="rgba(12,113,195,0.8)" use_circle="off" circle_color="#7EBEC5" use_circle_border="off" circle_border_color="#7EBEC5" icon_placement="left" animation="left" background_layout="light" text_orientation="left" use_icon_font_size="off" use_border_color="off" border_color="#ffffff" border_style="solid"]



Any additional information goes here. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum.



[/et_pb_blurb][/et_pb_column][et_pb_column type="1_2"][et_pb_blurb admin_label="About this Department" title="About this Department" url_new_window="off" use_icon="on" font_icon="%%144%%" icon_color="rgba(124,218,36,0.91)" use_circle="off" circle_color="#7EBEC5" use_circle_border="off" circle_border_color="#7EBEC5" icon_placement="left" animation="left" background_layout="light" text_orientation="left" use_icon_font_size="off" use_border_color="off" border_color="#ffffff" border_style="solid"]



Information about this department goes here. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.



[/et_pb_blurb][/et_pb_column][/et_pb_row][/et_pb_section]

EOT

);



$ca_layouts[] = array(

'name' => 'News Detail',

'content' => <<<EOT

[et_pb_section admin_label="section" ca_layout="News Detail"][et_pb_row admin_label="row"][et_pb_column type="4_4"][et_pb_post_title admin_label="Post Title" title="on" meta="on" author="off" date="on" categories="off" comments="off" featured_image="off" featured_placement="below" parallax_effect="on" parallax_method="on" text_orientation="left" text_color="dark" text_background="off" text_bg_color="rgba(255,255,255,0.9)" module_bg_color="rgba(255,255,255,0)" title_all_caps="off" use_border_color="off" border_color="#ffffff" border_style="solid"] [/et_pb_post_title][et_pb_microdata admin_label="News - Microdata" microdata_input="excerpt" person_info_button="off" location_info_button="off" use_icon="off" icon_color="#7EBEC5" ca_news_image="ca_news_image" image="https://caweb.wptesting.org/files/2016/08/image-blank.jpg" icon_placement="left" animation="off" add_social_share="off" title_size="p" image_custom_size_button="on" image_width="150" image_height="100" ca_news_excerpt="ca_news_excerpt"]



Full Article Text – Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.



[/et_pb_microdata][/et_pb_column][/et_pb_row][/et_pb_section]

EOT

);





$ca_layouts[] = array(

'name' => 'Profile Detail',

'content' => <<<EOT



[et_pb_section admin_label="Section" fullwidth="on" specialty="off"][et_pb_fullwidth_header admin_label="Name" title="Firstname Lastname" subhead="Job Title" background_layout="light" text_orientation="left" header_fullscreen="off" header_scroll_down="off" background_color="rgba(239,239,239,0.78)" parallax="off" parallax_method="off" content_orientation="center" image_orientation="center" custom_button_one="off" button_one_letter_spacing="0" button_one_use_icon="default" button_one_icon_placement="right" button_one_on_hover="on" button_one_letter_spacing_hover="0" custom_button_two="off" button_two_letter_spacing="0" button_two_use_icon="default" button_two_icon_placement="right" button_two_on_hover="on" button_two_letter_spacing_hover="0"] [/et_pb_fullwidth_header][/et_pb_section][et_pb_section admin_label="section"][et_pb_row admin_label="row"][et_pb_column type="4_4"][et_pb_team_member admin_label="Profile and Bio" image_url="https://dev.wptesting.org/files/2016/08/image-blank.jpg" animation="left" background_layout="light" facebook_url="#" twitter_url="#" google_url="#" linkedin_url="#" use_border_color="off" border_color="#ffffff" border_style="solid"]



Profile and bio info goes here. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.



Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.



Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.



[/et_pb_team_member][/et_pb_column][/et_pb_row][/et_pb_section]

EOT

);





$meta = array(

		'_et_pb_predefined_layout'   => 'on',

		'_et_pb_built_for_post_type' => 'post',

	);



if ( isset( $ca_layouts ) && is_array( $ca_layouts ) ) {

		foreach ( $ca_layouts as $ca_layout ) {

			et_pb_create_layout( $ca_layout ['name'], $ca_layout ['content'], $meta );

		}

	}

}


?>
