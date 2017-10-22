$(document).ready(function() {

  var c = console.log;

  // topInfo scroll
  $(window).scroll(function() {
    var $nav = $("nav");
    if ( $(this).scrollTop() > 200 ) {
      $nav.addClass("fixedElement");
    } else {
      $nav.removeClass("fixedElement");
    }
  });

  $(".scrollToTop").click(function() {
    $("body, html").animate({scrollTop: 0}, 500);
  });

  // navigation
  $(".nav li").each(function() {
    if ( $(this).children().length > 1 ) {
      $(this).addClass("parent");
    }
  });

  // active menu element
  $(".nav a").click(function() {
    $("a").removeClass("active");
    $(this).addClass("active");
  });

  // adaptive menu
  function adjustMenu() {
    var ww = $(document).width() - 80,
        $toggleButton = $("#toggleButton"),
        $nav = $(".nav"),
        $parent = $(".nav > li.parent"),
        $child = $(".nav > li.parent > ul");

    if ( ww < 768 ) {
      $parent.removeClass("hover");

      $toggleButton.click(function() {
        $toggleButton.toggleClass("activeButton");
        $nav.toggleClass("activeMenu");
            if ($toggleButton.hasClass("activeButton")) {
              $toggleButton.css({
                "left": ww,
                "transform": "rotate(-90deg)"
              });
          } else {
              $toggleButton.css({
                "left": 10,
                "transform": "rotate(90deg)"
              });
          }
      });

      $child.hide();

      $parent.click(function() {
        $child.slideToggle();
      });

    } else if ( ww >= 768 ) {
        $toggleButton.removeClass("activeButton");
        $nav.removeClass("activeMenu");
        $parent.addClass("hover");
    }
  }
  adjustMenu();


  $(window).bind("resize orientationchange", function() {
    var ww = $(document).width();
    adjustMenu();
    caruselHeightDetect();
  });



  // slider
  function caruselHeightDetect() {
    var caruselHeight = $(window).height() * .6;
    $("#mainSlider .item").css("height", caruselHeight);
  };
  caruselHeightDetect();
  


  // parallax
  $(".parallax-window").parallax({imageSrc: "images/parallax/paralax1.jpg"});



  // scroll to top
  $(window).scroll(function() {
    var height = $(window).height(),
        $scrollToTop = $("#scrollToTop");
    if ( $(this).scrollTop() > height ) {
      $scrollToTop.fadeIn();
    } else {
      $scrollToTop.fadeOut();
    }
  });

  $("#scrollToTop").click(function() {
    $("body, html").animate({scrollTop: 0}, 500);
  });

}); //$(document).ready(function()



  