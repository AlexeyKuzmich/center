
var ww = document.body.clientWidth,
		$toggleMenu = $(".toggleMenu"),
 		$nav = $(".nav");

$(document).ready(function() {
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	});
	
	$toggleMenu.click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$nav.slideToggle();
	});
	adjustMenu();
});

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 768) {

		$(".nav li").unbind('hover');
		$(".nav li a.parent").unbind('click').bind('click', function() {
			// must be attached to anchor element to prevent bubbling
			$(this).parent("li").toggleClass("hover");
		});
	}
	else if (ww >= 768) {
		$toggleMenu.css("display", "none");
		$nav.slideDown();
		$(".nav li").removeClass("hover");
		$(".nav li a").unbind('click');
		$(".nav li").unbind('hover').bind('hover', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		});
	}
}