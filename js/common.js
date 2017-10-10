$(document).ready(function() {

  // slider height
  function caruselHeightDetect(){
    var caruselHeight = $(window).height() * 2 / 3;
    $("#mainSliderC .item").css("height", caruselHeight);
    console.log("caruselHeight" + caruselHeight);
  };
  caruselHeightDetect();
  $(window).resize(function(){
    caruselHeightDetect();
  });


  // parallax
  $('.parallax-window').parallax({imageSrc: "images/parallax/bg1.jpg"});

});