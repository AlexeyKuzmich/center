$(document).ready(function() {

  var c = console.log;

  /* NAVIGATION */
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


  function adjustMenu() {
    var ww = $(document).width(),
        $toggleButton = $(".toggleButton"),
        $nav = $(".nav"),
        $parent = $(".nav > li.parent");

    if ( ww < 768 ) {
      $parent.removeClass("hover");

      /*$(".nav > li.parent > ul").hide();*/

      $toggleButton.click(function() {
        $toggleButton.toggleClass("activeButton");
        $nav.toggleClass("activeMenu");

        /*$parent.click(function() {
          $(".nav > li.parent > ul").toggle();
        });*/
      });

    } else if ( ww >= 768 ) {
        $toggleButton.removeClass("activeButton");
        $nav.removeClass("activeMenu");
        $parent.addClass("hover");
    }

    /*function temp_func() {
      if (!$child.is(":hover") ) {
        $child.hide();
      }
    }
      temp_func();
    setTimeout(temp_func(), 500);*/
  }
  adjustMenu();


  $(window).bind("resize orientationchange", function() {
    var ww = $(document).width();
    adjustMenu();
    caruselHeightDetect();
  });



/*  function toggle() {
    var $toggle = $(".toggleButton"),
        ww = $(window).width() - 67;
    $toggle.click(function() {
      $toggle.toggleClass("activeButton");
      $(".nav").toggleClass("activeMenu");
      if ($toggle.hasClass("activeButton")) {
        $toggle.css("left", ww);
      } else {
        $toggle.css("left", 8);
      }
    });
  }
  toggle();*/



  /* SLIDER */
  // slider height
  function caruselHeightDetect() {
    var caruselHeight = $(window).height() * .6;
    $("#mainSliderC .item").css("height", caruselHeight);
  };
  caruselHeightDetect(); // see $(window).resize();

  


  // parallax
  $(".parallax-window").parallax({imageSrc: "images/parallax/paralax1.jpg"});



  // scroll to top
  $(window).scroll(function() {
    var height = $(window).height() / 2;
    if ( $(this).scrollTop() > height ) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });

  $(".scrollToTop").click(function() {
    $("body, html").animate({scrollTop: 0}, 500);
  });

}); //$(document).ready(function()



  