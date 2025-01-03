$(document).ready(function () {
  $(".faqs .faq .header").click(function () {
    $(this).next().slideToggle();
    $(this).parent().toggleClass("active");
    $(this).children("i").toggleClass("active");

    $(".faqs .faq .header").not(this).next().slideUp();
  });

  $(" #open-langs").click(function () {
    $(".langs-dropdown").slideToggle();
  });


  if (window.matchMedia("(max-width: 950px)").matches) {
    $("nav .open-nav").click(function () {
      $(".nav-elements").slideDown();
    });
  
    $("nav .close-nav").click(function () {
      $(".nav-elements").slideUp();
    });
  
    $(".nav-elements ul li").click(function () {
      $(".nav-elements").slideUp();
    });
  
    $(".nav-elements ul li a").click(function () {
      $(".nav-elements").slideUp();
    });
  }



  if ($(".partners-slider").length) {
    $(".partners-slider").slick({
      dots: false,
      infinite: false,
      arrows: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    $(".partners .prev-btn").click(function () {
      $(".partners-slider").slick("slickPrev");
      updateButtonState(".partners-slider", ".partners .prev-btn", ".partners .next-btn");
    });
  
    $(".partners .next-btn").click(function () {
      $(".partners-slider").slick("slickNext");
      updateButtonState(".partners-slider", ".partners .prev-btn", ".partners .next-btn");
    });
  
    updateButtonState(".partners-slider", ".partners .prev-btn", ".partners .next-btn");
  }

  if ($(".tags-slider").length) {
    $(".tags-slider").slick({
      dots: false,
      infinite: false,
      arrows: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    $(".tags .prev-btn").click(function () {
      $(".tags-slider").slick("slickPrev");
      updateButtonState(".tags-slider", ".tags .prev-btn", ".tags .next-btn");
    });
  
    $(".tags .next-btn").click(function () {
      $(".tags-slider").slick("slickNext");
      updateButtonState(".tags-slider", ".tags .prev-btn", ".tags .next-btn");
    });
  
    updateButtonState(".tags-slider", ".tags .prev-btn", ".tags .next-btn");
  }

  if ($(".rates-slider").length) {
    $(".rates-slider").slick({
      dots: false,
      infinite: false,
      arrows: false,
      centerPadding: "60px",
      centerMode: true,
      speed: 300,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "0",
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerPadding: "0",

            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerPadding: "0",

            slidesToScroll: 1,
          },
        },
      ],
    });


    $(".rates .prev-btn").click(function () {
      $(".rates-slider").slick("slickPrev");
      updateButtonState(".rates-slider", ".rates .prev-btn", ".rates .next-btn");
    });
  
    $(".rates .next-btn").click(function () {
      $(".rates-slider").slick("slickNext");
      updateButtonState(".rates-slider", ".rates .prev-btn", ".rates .next-btn");
    });
  
    updateButtonState(".rates-slider", ".rates .prev-btn", ".rates .next-btn");

  }

  function updateButtonState(sliderSelector, prevBtnSelector, nextBtnSelector) {
    const slickInstance = $(sliderSelector).slick("getSlick");
  
    if (slickInstance.currentSlide === 0) {
      $(prevBtnSelector).attr("disabled", true);
    } else {
      $(prevBtnSelector).attr("disabled", false);
    }
  
    if (slickInstance.currentSlide === slickInstance.slideCount - slickInstance.options.slidesToShow) {
      $(nextBtnSelector).attr("disabled", true);
    } else {
      $(nextBtnSelector).attr("disabled", false);
    }
  }
  


  $(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    
    if(scrollTop > 100){
        $("nav").addClass("fixed-nav");
        $(".logo img").attr("src", "./images/logocolored.svg");
    } else {
        $("nav").removeClass("fixed-nav");
        $(".logo img").attr("src", "./images/logo.svg");
    }
  });

  
});
