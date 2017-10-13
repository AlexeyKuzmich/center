$(document).ready(function() {

  var c = console.log;

  /* NAVIGATION */
  //menu - :hover vs :notNover
  function hoveredUl() {
    var hov = $(".liHovered");
    if ($(window).width() > 767) {
      hov.addClass("hovered");
    } else {
      hov.removeClass("hovered");
    }
  }
  hoveredUl();// see $(window).resize();

  $(".ToggleButton").click(function(){
    $(".mainNav").toggleClass("activeMenu");
  });

  $(".liHovered").click(function(){
    $(".liHovered > ul").toggleClass("activePart");
  });



  /* SLIDER */
  // slider height
  function caruselHeightDetect(){
    var caruselHeight = $(window).height() * .6;
    $("#mainSliderC .item").css("height", caruselHeight);
  };
  caruselHeightDetect();// see $(window).resize();

  $(window).resize(function(){
    caruselHeightDetect();
    hoveredUl();
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