$(document).ready(function() {
  var ww = document.body.clientWidth;

  $(".nav li a").each(function() {
    if ($(this).next().length > 0) {
      $(this).addClass("parent");
    }
  });

  $(window).bind('resize orientationchange', function() {
    ww = document.body.clientWidth;
    adjustMenu();
  });

  function adjustMenu() {
    var counter = 0;

    if (ww < 768) {

      $(".toggleMenu").css("display", "inline-block");

      $(".toggleMenu").click(function(e) {
        e.preventDefault();
        if ( counter === 0 ) {
          console.log("counter = " + counter);
          $(this).addClass("active");
          $(".nav").addClass("activeMenu");
          counter = 1;
        } else if ( counter === 1 ) {
          console.log("counter = " + counter);
          $(this).removeClass("active");
          $(".nav").removeClass("activeMenu");
          counter = 0;
        }
        
      });

      $(".nav li").unbind('mouseenter mouseleave');
      $(".nav li a.parent").unbind('click').bind('click', function(e) {
        // Необходимоо привязать к элементу ссылки для предотвращения "всплывания"
        e.preventDefault();
        $(this).parent("li").toggleClass("hover");
      });
    } else if (ww >= 768) {
      $(".toggleMenu").css("display", "none");
      $(".nav").show();

      $(".nav").css("display", "block");

      $(".nav li").removeClass("hover");
      $(".nav li a").unbind('click');
      $(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
        // Необходимо привязать к элементу li для предотвращения запуска события mouseleave при перемещении курсора мыши над подменю
        $(this).toggleClass('hover');
      });
    }
  }
  adjustMenu();

});