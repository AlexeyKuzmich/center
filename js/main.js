$(document).ready(function() {

  var c = console.log;

  /* NAVIGATION */
  //menu - :hover vs :notNover
  function hover() {
    var hov = $(".hover");
    if ($(window).width() > 767) {
      hov.addClass("hover");
    } else {
      hov.removeClass("hover");
    }
  }
  hover();// see $(window).resize();

  $(".toggleButton").click(function() {
    var $toggleButton = $(this),
        ww = $(window).width() - 67;
    $toggleButton.toggleClass("activeButton");
    $(".nav").toggleClass("activeMenu");
    if ($toggleButton.hasClass("activeButton")) {
      $toggleButton.css("left", ww);
    } else {
      $toggleButton.css("left",8);
    }
  });





  /* SLIDER */
  // slider height
  function caruselHeightDetect() {
    var caruselHeight = $(window).height() * .6;
    $("#mainSliderC .item").css("height", caruselHeight);
  };
  caruselHeightDetect();// see $(window).resize();

  $(window).resize(function() {
    caruselHeightDetect();
    hover();
  });



  // parallax
  $(".parallax-window").parallax({imageSrc: "images/parallax/paralax1.jpg"});



  // scroll to top
  $(window).scroll(function() {
    var height = $(window).height() / 2;
    if($(this).scrollTop() > height) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });

  $(".scrollToTop").click(function() {
    $("body, html").animate({scrollTop: 0}, 500);
  });



  
});