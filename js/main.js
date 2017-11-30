/* PERINATAL CENTER */

$(document).ready(function() {
  var ww = document.body.clientWidth,
      c = console.log;

  // topInfo scroll
/*  $(window).scroll(function() {
    var $nav = $("nav");
    if ( $(this).scrollTop() > 170 ) {
      $nav.addClass("fixedMenu");
    } else {
      $nav.removeClass("fixedMenu");
    }
  });*/

  // navigation
  $(".nav li a").each(function() {
    if ( $(this).next().length > 0 ) {
      $(this).addClass("parent");
    }
  });



  //toolTip
      $('[data-toggle="tooltip"]').tooltip();



  // resize
  $(window).bind('resize orientationchange', function() {
    ww = document.body.clientWidth;
    adjustMenu();
    caruselHeightDetect();
  });



  // adaptive menu
  function adjustMenu() {
    ww = document.body.clientWidth + 17;
    var counter = 0;

    if (ww < 768) {

      /*$(".departmentHint").hide();*/

      $(".toggleMenu").css("display", "block");

      $(".toggleMenu").click(function(e) {
        e.preventDefault();
        if ( counter === 0 ) {
          /*console.log("counter = " + counter);*/
          $(this)
              /*.addClass("activeButton")*/
                  .css("transform", "rotate(180deg)");
          $(".nav").addClass("activeMenu");
          counter = 1;
        } else {
          /*console.log("counter = " + counter);*/
          $(this)
              /*.removeClass("activeButton")*/
                  .css("transform", "rotate(0deg)");
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
    } else if ( ww >= 768 ) {

/*      $(".nav li li a").hover(function() {
        $(".nav li li a + .departmentHint").fadeIn();
      }, function() {
        $(".nav li li a + .departmentHint").fadeOut();
      });*/

      // topInfo scroll
      $(window).scroll(function() {
        var $nav = $("nav");
        if ( $(this).scrollTop() > 170 ) {
          $nav.addClass("fixedMenu");
        } else {
          $nav.removeClass("fixedMenu");
        }
      });
      
      $(".toggleMenu").css("display", "none");
      $(".nav")
          .show()
              .css("display", "block");

      $(".nav li").removeClass("hover");
      $(".nav li a").unbind('click');
      $(".nav li")
          .removeClass("hover")
              .unbind('mouseenter mouseleave')
                  .bind('mouseenter mouseleave', function() {
        // Необходимо привязать к элементу li для предотвращения запуска события mouseleave при перемещении курсора мыши над подменю
        $(this).toggleClass('hover');
      });
    }
  }
  adjustMenu();



  // slider
  function caruselHeightDetect() {
    var caruselHeight = $(window).height() * .6;
    $("#mainSlider .item").css("height", caruselHeight);
  };
  caruselHeightDetect();
  


  // owlCarousel
  $(".owl-doctors").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: false,
      autoplayTimeout: 1000,

      responsive:{
          0: {
              items: 1
          },
          575: {
              items: 2
          },
          767: {
              items: 3
          },
          991: {
              items: 4
          },
          1199: {
              items: 6
          }
      }
  });
  $(".owl-nav").addClass("hidden-xs");
  $(".owl-nav .owl-prev").text("<");
  $(".owl-nav .owl-next").text(">");


  // parallax
  $(".parallax-window").parallax({imageSrc: "images/parallax/paralax1.jpg"});



  // scroll to top
  $(window).scroll(function() {
    var height = $(window).height(),
        $scrollToTop = $(".scrollToTop");
    if ( $(this).scrollTop() > height ) {
      $scrollToTop.fadeIn();
    } else {
      $scrollToTop.fadeOut();
    }
  });

  $(".scrollToTop").click(function() {
    $("body, html").animate({scrollTop: 0}, 500);
  });

}); //$(document).ready(function()