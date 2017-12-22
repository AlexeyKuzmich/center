function sliderHeightDetect() {
  var sliderHeight = $(window).height() * .7,
      sliderItemHeight = $(".owl-mainSlider .item");
  sliderItemHeight.css("height", sliderHeight);
};


// adaptive menu
function adjustMenu() {
  ww = document.body.clientWidth + 17;
  var $directionItem = $(".direction .item");
  var counter = 0;

  if (ww < 768) {

    $(".toggleMenu").css("display", "block");

    $(".toggleMenu").click(function(e) {
      e.preventDefault();
      if ( counter === 0 ) {
        $(this).css("transform", "rotate(180deg)");
        $(".nav").addClass("activeMenu");
        counter = 1;
      } else {
        $(this).css("transform", "rotate(0deg)");
        $(".nav").removeClass("activeMenu");
        counter = 0;
      }
    });

    $(".nav li").unbind('mouseenter mouseleave');
    $(".nav li a.parent")
      .unbind('click')
        .bind('click', function(e) {
      // Необходимоо привязать к элементу ссылки для предотвращения "всплывания"
      e.preventDefault();
      $(this)
        .parent("li")
          .toggleClass("hover");
    });

    $directionItem.each(function() {
      $(this)
        .removeClass("largeScreen")
          .removeAttr("style");
    });

  } else if ( ww >= 768 ) {

    // topInfo scroll
    $(window).scroll(function() {
      var $nav = $("nav");
      if ( $(this).scrollTop() > 150 ) {
        $nav.addClass("fixedMenu");
      } else {
        $nav.removeClass("fixedMenu");
      }
    });
    
    $(".toggleMenu").css("display", "none");
    $(".nav")
      .show()
        .css("display", "block");

    $(".nav li a").unbind('click');
    $(".nav li")
      .removeClass("hover")
        .unbind('mouseenter mouseleave')
          .bind('mouseenter mouseleave', function() {
      // Необходимо привязать к элементу li для предотвращения запуска события mouseleave при перемещении курсора мыши над подменю
      $(this).toggleClass('hover');
    });

    $directionItem.each(function() {
      $(this).addClass("largeScreen");
    });

  }
}


// EqualHeight
function setEqualHeight(columns) {
  var tallestColumn = 0;
  columns.each(function() {
    columns.removeAttr("style");
    currentHeight = $(this).height();
    if ( currentHeight > tallestColumn ) {
      tallestColumn = currentHeight;
    }
  });
  columns.height( tallestColumn );
}



// parallaxImage loading depending on screen size
function parallaxImageDetect() {
  var ww = $(window).width(),
      image = "";
  if (ww <= 360) {
    image = "images/test/3.jpg";
  } else if (ww > 360 && ww <= 767) {
    image = "images/test/2.jpg";
  } else {
    image = "images/test/1.jpg";
  }
  console.log("imageParallax = " + image);
  return image;
}


//****************************** ONLOAD ******************************
$(document).ready(function() {
  $(".greeting").css("opacity", 1);
  $("#preload")
    .delay(15)
      .fadeOut(15);


  var /*ww = document.body.clientWidth,*/
  c = console.log;

  sliderHeightDetect();
  adjustMenu();
  setEqualHeight( $(".largeScreen") );



  // navigation
  $(".nav li a").each(function() {
    if ( $(this).next().length > 0 ) {
      $(this).addClass("parent");
    }
  });



  // mainSlider
  $(".owl-mainSlider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1
  });




  // owl-doctors  
  var $owl = $(".owl-doctors");
  $(".owl-doctors").owlCarousel({
    onRefresh: function () { // установка одинаковой высоты owl-item
        $owl.find(".owl-item").height("");
    },
    onRefreshed: function () {
        $owl.find(".owl-item").height($owl.height() + 45);
    },
    loop: true,
    margin: 10,
    nav: false,
    touchDrag: true,
    autoplay: false,
    responsive:{
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      575: {
        items: 3
      },
      767: {
        items: 4
      },
      991: {
        items: 5
      },
      1199: {
        items: 6
      }
    }
  });
  // исчезают значки навигации (причина непонятна). решение:
  var $owlNav = $owl.find('.owl-nav');
  $owlNav.removeClass('disabled');
  $owl.on('changed.owl.carousel', function(event) {
    $owlNav.removeClass('disabled');
  });
  // убрать текст с кнопок навигации
  $(".owl-prev").text("");
  $(".owl-next").text("");




  // parallax
  $(".parallax-window").parallax({imageSrc: parallaxImageDetect()}); // в parallaxImageDetect() определяестся загружаемое изображение в зависимости от ширины экрана




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



  //tagCloud
  if ( !$("#myCanvas").tagcanvas({
    textColour : "#fff",
    outlineThickness : 1,
    maxSpeed : 0.05,
    depth : .8
  })) {
    // TagCanvas failed to load
    $("#myCanvasContainer").hide();
  }



  // resize
  $(window).on("resize orientationchange", function() {
    /*ww = document.body.clientWidth;*/
    adjustMenu();
    sliderHeightDetect();
    setEqualHeight( $(".largeScreen") );
  });

}); //$(document).ready(function()