$(document).ready(function () {
  $(".faqs .faq .header").click(function () {
    $(this).next().slideToggle();
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
    });

    $(".partners .next-btn").click(function () {
      $(".partners-slider").slick("slickNext");
    });
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
    });

    $(".tags .next-btn").click(function () {
      $(".tags-slider").slick("slickNext");
    });
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

    // Custom previous button
    $(".rates .prev-btn").click(function () {
      $(".rates-slider").slick("slickPrev");
    });

    // Custom next button
    $(".rates .next-btn").click(function () {
      $(".rates-slider").slick("slickNext");
    });
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
