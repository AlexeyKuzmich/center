$(document).ready(function() {

  var c = console.log;

  // slider height
  function caruselHeightDetect(){
    var caruselHeight = $(window).height() * .6;
    $("#mainSliderC .item").css("height", caruselHeight);
    c("caruselHeight" + caruselHeight);
  };
  caruselHeightDetect();

  $(window).resize(function(){
    caruselHeightDetect();
  });



  // parallax
  $(".parallax-window").parallax({imageSrc: "images/parallax/paralax1.jpg"});



  // scroll to top
  $(window).scroll(function() {
    var height = $(window).height();
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