var main = function() {

	$(".wgal").backstretch([
		"img/sunny_day-01.svg",
		"img/partly_cloudy_day_01.svg",
		"img/heavy_rain-01.svg",
		"img/heavy_snow-01.svg",
		"img/thunder-01.svg",
		"img/clear_night-01.svg",
	], {duration: 2000, transition: "fade_in_out", transitionDuration: 500});

	$("main").backstretch("img/top.png");
	$(".gal").backstretch("img/slides/a_col.png");
	$(".hal").backstretch("img/slides/vid_col.png");
	$(".video").backstretch([{url: "https://www.youtube.com/embed/w4KiT_TqlIs", loop: true }]);
	$(".foot").backstretch([{url: "img/slides/bcg_slide-3.jpg", alignY: 'top'}]);
};

$(document).ready(main);