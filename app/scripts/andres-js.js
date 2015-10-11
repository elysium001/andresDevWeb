$(function() {

	// variables 
	var browserWidth = $(window).width();
	var isMobile = browserWidth < 600 ? true : false;
	var isTablet = browserWidth < 1025 && browserWidth > 767 ? true : false;
	var isNormal = browserWidth > 1024 ? true : false;

	// third slide city function!
	var city = "";

	$.get("http://ipinfo.io", function(response) {
		city = response.city + "'s";
		$("#city-name").text(city);
	}, "jsonp");


	// smooth anchor scroll
	$('a[href*="#webtopic"]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

	// image preloading
	var curImg = new Image();
	curImg.src = "/images/meandg.png";
	var curImg2 = new Image();
	curImg2.src = "/images/meandgblur.png";




});