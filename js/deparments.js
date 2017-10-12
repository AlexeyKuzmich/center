$(document).ready(function() {

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