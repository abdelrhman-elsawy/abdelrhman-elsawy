$(document).ready(function() {


    // Landing Slider Function
    if ($(".landing").length) {
        const mainDiv = document.getElementsByClassName('images-sliding-back');
        const slides = document.querySelectorAll('.images-sliding-back .slide');
        const imagesPagination = document.querySelectorAll('.images-slider-pagination .images img');
        const videosPagination = document.querySelectorAll('.images-slider-pagination .images video');
    
        const imageNumberSpans = document.querySelectorAll('.images-slider-pagination .image-number span');
        
        let currentSlide = 0;
        let intervalId;
        
        function setMediaSize() {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            let mainDivSize = 0; // Reset the mainDivSize each time the function is called
    
            slides.forEach((slide) => {
                const image = slide.querySelector('img');
                const video = slide.querySelector('video');
                if (image) {
                    image.style.width = `${screenWidth}px`;
                    image.style.height = `${screenHeight}px`;
                }
                if (video) {
                    video.style.width = `${screenWidth}px`;
                    video.style.height = `${screenHeight}px`;
                }
                mainDivSize += screenHeight; // Accumulate only one screenHeight per slide
            });
            mainDiv[0].style.width = `${mainDivSize}px`; // Directly set the calculated width
    
            imagesPagination.forEach((image) => {
                image.style.width = `${screenWidth * 0.1}px`;
                image.style.height = `${screenHeight * 0.1}px`;
            });
    
            videosPagination.forEach((video) => {
                video.style.width = `${screenWidth * 0.1}px`;
                video.style.height = `${screenHeight * 0.1}px`;
            });
        }
        
        function goToSlide(index) {
            if (index < 0 || index >= slides.length) return;
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(-${index * 100}%)`;
            });
            imagesPagination.forEach((image, i) => {
                if (i === index) {
                    image.classList.add('active');
                } else {
                    image.classList.remove('active');
                }
            });
    
            videosPagination.forEach((video, i) => {
                if (i === index) {
                    video.classList.add('active');
                } else {
                    video.classList.remove('active');
                }
            });
    
            imageNumberSpans.forEach((span, i) => {
                if (i === index) {
                    span.classList.add('active');
                } else {
                    span.classList.remove('active');
                }
            });
    
            currentSlide = index;
        }
        
        function startAutoSlider() {
            intervalId = setInterval(() => {
                const nextSlide = (currentSlide + 1) % slides.length;
                goToSlide(nextSlide);
            }, 5000);
        }
        
        function stopAutoSlider() {
            clearInterval(intervalId);
        }
        
        imagesPagination.forEach((image, index) => {
            image.addEventListener('click', () => {
                goToSlide(index);
                stopAutoSlider();
            });
        });
    
        videosPagination.forEach((video, index) => {
            video.addEventListener('click', () => {
                goToSlide(index);
                stopAutoSlider();
            });
        });
        
        imageNumberSpans.forEach((span, index) => {
            span.addEventListener('click', () => {
                goToSlide(index);
                stopAutoSlider();
            });
        });
        
        // Set initial media sizes
        setMediaSize();
        
        // Update media sizes when the window is resized
        window.addEventListener('resize', setMediaSize);
        
        // Start the auto slider
        startAutoSlider();
    }

    // portfolio slider function



    
    if ($('.portfolio').length) {

        // Initialize slick slider
        $('.portfolio-slider .slider').slick({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
        });

        // Custom previous button
        $('.portfolio .prev-slide').click(function(){
            $('.portfolio-slider .slider').slick('slickPrev');
        });

        // Custom next button
        $('.portfolio .next-slide').click(function(){
            $('.portfolio-slider .slider').slick('slickNext');
        });

    }



    // clients Slider function

    if ($('.clients-slider').length) {

        // Initialize slick slider
        $('.clients-slider .slider').slick({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 2,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
                dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
        });


    }



    // news slider function


    
    
    if ($('.news').length) {

        // Initialize slick slider
        $('.news-slider .slider').slick({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
        });


    }

    if($(".questions").length){
        $(".questions .question .header").click(function(){

            $(this).next().slideToggle();

            if($(this).children("i").hasClass("la-plus")){
                $(this).children("i").removeClass("la-plus").addClass("la-minus")
            }else{
                $(this).children("i").removeClass("la-minus").addClass("la-plus")

            }
        })
    }

    if($("nav").length){
        $("#open-nav").click(function(){
            $("nav .right ul").addClass("active");
        })

        $("#close-nav").click(function(){
            $("nav .right ul").removeClass("active");
        })
    }



});

