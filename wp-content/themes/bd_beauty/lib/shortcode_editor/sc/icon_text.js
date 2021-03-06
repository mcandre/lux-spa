var icons = [
	'applications.png',
	'apps.png',
	'arrow_down.png',
	'arrow_left.png',
	'arrow_right.png',
	'arrow_up.png',
	'badge_cancel.png',
	'badge_multiply.png',
	'badge_plus.png',
	'badge_tick.png',
	'basket.png',
	'basketball.png',
	'battery.png',
	'billing.png',
	'binoculars.png',
	'bird_green.png',
	'bird_twitter.png',
	'blueprint.png',
	'blueprint2.png',
	'blueprint3.png',
	'blueprint4.png',
	'blueprint5.png',
	'book.png',
	'book_fb.png',
	'bookmark.png',
	'box.png',
	'box_double_tape.png',
	'box_with_tape.png',
	'briefcase.png',
	'brushes.png',
	'bubble_chat.png',
	'bubble_twitter.png',
	'bubble_twitter_2.png',
	'bullseye.png',
	'burn.png',
	'burning_disc.png',
	'cabinet.png',
	'calculator_full.png',
	'calculator_operations.png',
	'calender_day.png',
	'calender_month.png',
	'camera.png',
	'cash.png',
	'cash_2.png',
	'cd_case.png',
	'chalkboard.png',
	'chalkboard2.png',
	'chat.png',
	'clipboard.png',
	'clipboard_b.png',
	'clock.png',
	'cloud.png',
	'coffee.png',
	'coffee_i_l_ny.png',
	'colour_picker.png',
	'colours_cmyk.png',
	'colours_rgb.png',
	'console.png',
	'contacts.png',
	'contacts2.png',
	'cork.png',
	'crate.png',
	'crate_download.png',
	'crate_upload.png',
	'credit_american_express.png',
	'credit_card.png',
	'credit_card_2.png',
	'credit_master_card.png',
	'credit_paypal.png',
	'credit_visa.png',
	'database.png',
	'diary.png',
	'dictionary.png',
	'disc_blu_ray.png',
	'disc_dvd.png',
	'disquette.png',
	'doc.png',
	'doc_single.png',
	'doc_yellow.png',
	'documents.png',
	'download_crate.png',
	'dribble.png',
	'earth.png',
	'electric_interruptor.png',
	'electric_socket.png',
	'electric_socket_2.png',
	'empty_document.png',
	'empty_document_delete.png',
	'empty_document_new.png',
	'envelope.png',
	'evernote.png',
	'facebook.png',
	'filmroll.png',
	'flag.png',
	'flask.png',
	'float.png',
	'folder.png',
	'folder_docs.png',
	'folder_downloads.png',
	'folder_movies.png',
	'folder_music.png',
	'folder_pictures.png',
	'folder_user.png',
	'folder_web.png',
	'gift.png',
	'glasses.png',
	'gmail.png',
	'gps.png',
	'hard_drive.png',
	'heart.png',
	'home.png',
	'identification_card.png',
	'imac.png',
	'iphone.png',
	'ipod.png',
	'key.png',
	'keychain.png',
	'keychain2.png',
	'laptop.png',
	'laptop_white.png',
	'leaf.png',
	'lightbulb.png',
	'lightbulb_off.png',
	'loudspeaker.png',
	'magic.png',
	'magnet.png',
	'mail.png',
	'mail2.png',
	'mailfront.png',
	'map.png',
	'metallic_briefcase.png',
	'moleskine.png',
	'money_gold.png',
	'money_silver.png',
	'monitor.png',
	'monitor_black.png',
	'movies.png',
	'music.png',
	'music_note_blue.png',
	'music_note_cian.png',
	'music_note_green.png',
	'music_note_pink.png',
	'nano_black.png',
	'nano_blue.png',
	'nano_green.png',
	'nano_orange.png',
	'nano_pink.png',
	'nano_red.png',
	'nano_white.png',
	'nano_yellow.png',
	'network_radar.png',
	'news.png',
	'notes.png',
	'orb_help.png',
	'orb_info.png',
	'orb_minus.png',
	'orb_plus.png',
	'orb_podcast.png',
	'orb_rss.png',
	'paint.png',
	'paint_tools.png',
	'pen.png',
	'pen_tool.png',
	'pencil.png',
	'pencil_yellow.png',
	'picture.png',
	'pictures.png',
	'player.png',
	'player_back.png',
	'player_ff.png',
	'player_fordward.png',
	'player_pause.png',
	'player_play.png',
	'player_rew.png',
	'player_stop.png',
	'plugins.png',
	'post.png',
	'power.png',
	'printer.png',
	'printer_modern.png',
	'prize.png',
	'project.png',
	'project2.png',
	'recicle_bin.png',
	'rss.png',
	'ruler.png',
	'ruler_2.png',
	'safari.png',
	'safe_box.png',
	'script.png',
	'shield.png',
	'shleves.png',
	'shop.png',
	'shopping_bag.png',
	'shopping_bag1.png',
	'shopping_bag2.png',
	'shopping_bag3.png',
	'sign_direction.png',
	'signal_attention.png',
	'signal_stop.png',
	'signal_yield.png',
	'skype.png',
	'smartphone.png',
	'sofa.png',
	'star.png',
	'statistics.png',
	'statistics_piechart.png',
	'streaming.png',
	'system.png',
	'system_monitoring.png',
	'tablet_design.png',
	'tag.png',
	'tagb.png',
	'text.png',
	'ticket.png',
	'tools.png',
	'traffic_cone.png',
	'twitter.png',
	'usb.png',
	'user.png',
	'wall.png',
	'wallet.png',
	'wallet2.png',
	'write_document.png',
	'zoom.png', 
];


scnShortcodeMeta = {
  attributes: [{
    label: "Icon",
    id: "icon",
		controlType: "select-control", 
		options:     icons
  }, {
    label: "Custom Icon",
    id: "custom_icon",
    help: "Values: none (for no icon), or full URL to a custom icon."
  }, {
    label: "Icon Position",
    id: "icon_position",
		controlType: "select-control", 
		options:     ['left', 'top']
  }, {
    label: "Box",
    id: "box",
		controlType: "select-control", 
		options:     ['false', 'true'],
		help: "Show box around content?"
  }],
  defaultContent: "<p>[heading type='h3' no_top_padding='true']Your Heading[/heading]</p><p>Your content goes here.</p>",
  shortcode: "icon_text"
};