$(document).ready(function() {

        // *****************************************************************


        // Loading Screen Function

            const loadingFill = document.getElementById('loading-bar-fill');
        
            // Initial progress set to 0%
            let progress = 0;
            loadingFill.style.width = progress + '%';
        
            // Incremental update function
            function updateProgress(increment) {
            progress += increment;
            if (progress > 100) progress = 100; // Ensure progress doesn't exceed 100%
            loadingFill.style.width = progress + '%';
            }
        
            // Simulated incremental updates (you might tie these updates to actual events or milestones)
            const simulateUpdates = () => {
            const increments = [10, 20, 30, 40]; // Example increments
            increments.forEach((increment, index) => {
                setTimeout(() => updateProgress(increment), 1000 * index); // Simulate progress
            });
            };
        
            simulateUpdates();
        
            // When the window has fully loaded, complete the progress bar
            window.onload = function() {
            progress = 100;
            loadingFill.style.width = progress + '%';
        
            // Hide the loading screen and show the content
            setTimeout(() => { // Timeout for demonstration purposes, to see the completion
                document.getElementById('loading-screen').style.display = 'none';
            }, 500); // Short delay to ensure user sees the progress bar complete
            };

        // *****************************************************************


        //  Side nav Sub menu toggle


        if ($('.sub-menu').length && $('.open-sub-menu').length) {


            // Close all sub-menus initially
            $('.sub-menu').slideUp(0);
    
            // Toggle sub-menu on click
            $('.open-sub-menu').click(function() {
                var $this = $(this); // Cache the current button
                var $subMenu = $this.next('.sub-menu'); // Get the next sub-menu
            
                // Slide up all sub-menus except the one related to the clicked button
                $('.sub-menu').not($subMenu).slideUp().prev('.open-sub-menu').removeClass('active').find('i').removeClass('la-angle-up').addClass('la-angle-down');
            
                // Toggle the current sub-menu
                $subMenu.slideToggle(function() {
                    // Check if the sub-menu is now visible
                    if ($subMenu.is(':visible')) {
                        // Sub-menu is open, add 'active' class and change icon to 'up'
                        $this.addClass('active').children('i').removeClass('la-angle-down').addClass('la-angle-up');
                    } else {
                        // Sub-menu is closed, remove 'active' class and change icon to 'down'
                        $this.removeClass('active').children('i').removeClass('la-angle-up').addClass('la-angle-down');
                    }
                });
            });
    
        }
    
            
            //  Side nav Sub menu toggle
    
            
            // *****************************************************************
    
    
    
            //  Control Side nav toggle
    


        //  Control Side nav toggle

        if ($('.side-nav').length) {

            // Open side nav
            $('#open-side-menu').click(function() {
                $('.side-nav').addClass('active');
            });
    
            // Close side nav
            $('#close-side-menu').click(function() {
                $('.side-nav').removeClass('active');
            });
    
            //  Control Side nav toggle
    
        // Clicking outside the .inner-short-cut container
        $(".container").on('click', function(e) {
            // Check if the clicked area is not .inner-short-cut or a descendant of .inner-short-cut
            if (!$(e.target).closest('nav').length) {
                // If the click is outside, remove the active class
                $('.side-nav').removeClass('active');
            }
        });

        // Prevent event from firing when clicking inside .inner-short-cut
        // to ensure the click outside logic doesn't apply when interacting with the contents
        $('nav').on('click', function(e) {
            e.stopPropagation();
        });

        }
            // *****************************************************************
    
    
            //  Change the top for Side nav toggle
    
            
            if ($('.side-nav').length) {
    
            var initialTop = 76; // The initial top value for .side-nav
    
            // Function to adjust .side-nav position based on scroll
            function adjustNavPosition() {
                if ($(window).scrollTop() > 0) {
                    // User has scrolled down, set top to 0
                    $('.side-nav').css('top', '0');
                } else {
                    // User is at the top of the page, set top back to initial value
                    $('.side-nav').css('top', initialTop + 'px');
                }
            }
        
            // Listen for scroll event
            $(window).scroll(adjustNavPosition);
        
            // Also adjust position when the page is initially loaded in case of a reload at a scrolled position
            adjustNavPosition();
        
            // Your existing click handlers
            $('#open-side-menu').click(function() {
                $('.side-nav').addClass('active');
            });
        
            $('#close-side-menu').click(function() {
                $('.side-nav').removeClass('active');
            });
        
    
        }
            //  Change the top for Side nav toggle
    
            // *****************************************************************
    
            //  Langs Toggle Menu
            // Toggle 'active' class for the langs-menu when the open-langs-menu button is clicked
            if ($('#open-langs-menu').length) {

                $('#open-langs-menu').click(function() {
                    $('#langs-menu').toggleClass('active');
                });
    
                        // Clicking outside the .inner-short-cut container
                    $(".container").on('click', function(e) {
                        // Check if the clicked area is not .inner-short-cut or a descendant of .inner-short-cut
                        if (!$(e.target).closest('.nav-element').length) {
                            // If the click is outside, remove the active class
                            $('#langs-menu').removeClass('active');
                        }
                    });
    
                    // Prevent event from firing when clicking inside .inner-short-cut
                    // to ensure the click outside logic doesn't apply when interacting with the contents
                    $('.nav-element').on('click', function(e) {
                        e.stopPropagation();
                    });
    
            }
    
    
            //  Langs Toggle Menu
    
            // *****************************************************************

            
            

        //  adv search Toggle Menu

            // Toggle 'active' class for the adv-search when the open-adv-search button is clicked
            if ($('#open-adv-search').length) {

                $('#open-adv-search').click(function() {
                    $('#adv-search').toggleClass('active');
                });

                $(".container").on('click', function(e) {
                    // Check if the clicked area is not .inner-short-cut or a descendant of .inner-short-cut
                    if (!$(e.target).closest('.nav-element').length) {
                        // If the click is outside, remove the active class
                        $('#adv-search').removeClass('active');
                    }
                });

                // Prevent event from firing when clicking inside .inner-short-cut
                // to ensure the click outside logic doesn't apply when interacting with the contents
                $('.nav-element').on('click', function(e) {
                    e.stopPropagation();
                });

                
            }

        //  adv search Toggle Menu

         // *****************************************************************


           // Start Leaving website alert function

            const popup = document.getElementById('externalLinkPopup');
            const continueButton = document.getElementById('continueButton');
            const cancelButton = document.getElementById('cancelButton');
            let externalUrl = '';
        
            document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function(e) {
                const host = window.location.hostname;
                const linkHost = new URL(this.href).hostname;
        
                if (host !== linkHost) {
                e.preventDefault(); // Prevent the default link behavior
                externalUrl = this.href; // Save the URL
                popup.style.display = 'flex'; // Show the popup
                }
            });
            });
        
            continueButton.addEventListener('click', function() {
            window.open(externalUrl, '_blank').focus();
            popup.style.display = 'none'; // Hide the popup
            });
        
            cancelButton.addEventListener('click', function() {
            popup.style.display = 'none'; // Just close the popup
            });

        // End Leaving Website alert function




    // *****************************************************************


    

    // toggle Inner short cuts functtion

    $(".open-inner-shortcut").click(function(){
        $(this).next(".inner-short-cut").toggleClass("active");
    })

    
    $(".close-inner-shortcut").click(function(){
        $(".inner-short-cut").removeClass("active");
    })

     // Clicking outside the .inner-short-cut container
    $(".container").on('click', function(e) {
        // Check if the clicked area is not .inner-short-cut or a descendant of .inner-short-cut
        if (!$(e.target).closest('.inner-short-cut').length) {
            // If the click is outside, remove the active class
            $('.inner-short-cut').removeClass('active');
        }
    });

    // Prevent event from firing when clicking inside .inner-short-cut
    // to ensure the click outside logic doesn't apply when interacting with the contents
    $('.inner-short-cut').on('click', function(e) {
        e.stopPropagation();
    });




    // toggle Inner short cuts functtion

    // *****************************************************************

    
        // happy faces functtion

  // Listen for changes on any radio button within a .face container
  $('.face input[type="radio"]').change(function() {

    // If the radio is checked
    if ($(this).is(':checked')) {
        $(this).parent().parent().find("img:nth-child(2)").css('display', 'none');
        $(this).parent().parent().find("img:nth-child(1)").css('display', 'block');

        // Hide the first img element in the same .face container
        $(this).siblings('img').eq(0).css('display', 'none');
        // Optionally, if you want to show the second image only when the radio is checked:
        $(this).siblings('img').eq(1).css('display', 'block');
    } else {

        // This else part is optional and depends on whether you want to toggle the visibility back.
        // Show the first img element if the radio is unchecked (for toggling visibility)
        $(this).siblings('img').eq(0).css('display', 'block');
        // Hide the second img again
        $(this).siblings('img').eq(1).css('display', 'none');
    }
});

// happy faces functtion


    // *****************************************************************

    // Voice Search Functions
    $(".record-toggle").click(function() {
        var $showImage = $(".voice-search .show-image");
        var $showImage2 = $(".voice-search .content img:nth-child(3)");

        if ($showImage.css("display") === "none") {
            $showImage.css("display", "block");
            $showImage2.css("display", "none");

        } else {
            $showImage.css("display", "none");
            $showImage2.css("display", "block");

        }
    });

    $(".open-voice-search").click(function(){
        $(".voice-search").addClass("active")
    })


         // Clicking outside the .inner-short-cut container
            $(".voice-search").on('click', function(e) {
            // Check if the clicked area is not .inner-short-cut or a descendant of .inner-short-cut
            if (!$(e.target).closest('.voice-search-content').length) {
                // If the click is outside, remove the active class
                $('.voice-search').removeClass('active');
            }
        });
    
        // Prevent event from firing when clicking inside .inner-short-cut
        // to ensure the click outside logic doesn't apply when interacting with the contents
        $('.voice-search-content').on('click', function(e) {
            e.stopPropagation();
        });
    
    

        var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognition.lang = 'ar-EG'; // Default to Arabic (Egypt). Change as needed or implement a language switch.
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
    
        $(".record-toggle").click(function() {
            // Ask user to accept mic access
            recognition.start();
        });
    
        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript; // Get the transcript of the spoken words
            $('.talk-value').text(transcript); // Set the transcript as the text of the `.talk-value` element
        };
    
        recognition.onerror = function(event) {
            console.error("Speech recognition error", event.error);
        };
    
        recognition.onend = function() {
            // Recognition ends
            var $showImage = $(".voice-search .show-image");
            var $showImage2 = $(".voice-search .content img:nth-child(3)");

            $showImage.css("display", "none");
            $showImage2.css("display", "block");

            
        };



    // Voice Search Functions



      // *****************************************************************

    // Toggle text options screens Function

    // Initially set the first button and screen as active
    if ($(".text-options-btns button").length && $(".text-options-screens .screen").length) {

        $(".text-options-btns button").first().addClass('active');
        $(".text-options-screens .screen").first().addClass('active');
        
        $(".text-options-btns button").on("click", function() {
            // Remove 'active' class from all buttons and screens
            $(".text-options-btns button").removeClass('active');
            $(".text-options-screens .screen").removeClass('active');
            
            // Add 'active' class to the clicked button
            $(this).addClass('active');
            
            // Get the index of the clicked button
            var index = $(this).index();
            
            // Add 'active' class to the corresponding screen
            $(".text-options-screens .screen").eq(index).addClass('active');
        });
    }

    // Toggle text options screens Function






    // *****************************************************************

    if ($(".accessibility-content").length) {

  
        // here all accessibility function
    
        $(".accessibility-content .option button").click(function(){
            $(this).parent().toggleClass("active");
        })
    
    
    
        // zoom in
    
        var zoomLevel = 1; // Normal zoom level
        $("#zoom-in-website").click(function() {
            zoomLevel = (zoomLevel === 1) ? 1.2 : 1; // Toggle zoom level between normal and 1.2x
            $('body').css({
                'zoom': zoomLevel,
                'height': zoomLevel === 1 ? '' : '100vh' // Reset height to default when zoom is normal
            });
        
            // Assuming there are two images, one shown and one hidden with .hide class
            var $imgVisible = $(this).find("img:not(.hide)");
            var $imgHidden = $(this).find("img.hide");
        
            // Swap the visibility of the two images
            $imgVisible.hide().removeClass('show');
            $imgHidden.show().addClass('show').removeClass('hide');
        
            // Update classes for next toggle
            $imgVisible.addClass('hide');
            $imgHidden.removeClass('hide');
        });
    
        //contrast
    
        // Initially, the contrast is not increased
        var isContrastIncreased = false;
    
        $("#contrast-website").click(function(){
            if(isContrastIncreased){
                // Reset contrast to default
                $('section').css('filter', '');
                $('nav').css('filter', '');
    
                $('body').css('height', "inherit");
    
                isContrastIncreased = false;
            } else {
                // Increase contrast
                $('section').css('filter', 'contrast(1.5)');
                $('nav').css('filter', 'contrast(1.5)');
    
    
                isContrastIncreased = true;
            }
        });
    
    
    
        //read website 
        let isTextToSpeechEnabled = false;
    
    
        // Read website button
        // Event listener for the button click
        document.getElementById('read-website').addEventListener('click', function() {
            // Toggle the text-to-speech feature
            isTextToSpeechEnabled = !isTextToSpeechEnabled;
            // Inform the user that the feature is enabled or disabled
            alert(`Text-to-Speech is now ${isTextToSpeechEnabled ? "enabled" : "disabled"}.`);
        });
    
        // Function to read the selected text
        function readSelectedText() {
            if (!isTextToSpeechEnabled) return; // Do nothing if the feature is not enabled
    
            var text = window.getSelection().toString().trim(); // Get selected text and trim whitespace
            if (text) {
                var msg = new SpeechSynthesisUtterance();
                msg.text = text;
                msg.lang = 'en'; // Assuming the content is in Arabic
                window.speechSynthesis.speak(msg);
            }
        }
    
        // Event listener for text selection change
        document.addEventListener('selectionchange', function() {
            // Check if there's a significant delay between selection and speaking
            readSelectedText();
        });
    
    
    
    
        // let isTextToSpeechEnabled = false;
    
        // document.getElementById('read-website').addEventListener('click', function() {
        //     isTextToSpeechEnabled = !isTextToSpeechEnabled;
        //     alert(`Text-to-Speech is now ${isTextToSpeechEnabled ? "enabled" : "disabled"}.`);
        // });
        
        // document.addEventListener('selectionchange', function() {
        //     if (!isTextToSpeechEnabled) return;
        //     let text = window.getSelection().toString().trim();
        //     if (text) {
        //         speakText(text);
        //     }
        // });
        
        // function speakText(text) {
        //     // Placeholder URL - Replace with your text-to-speech service URL
        //     const apiUrl = 'https://api.texttospeech.com/synthesize';
        //     fetch(apiUrl, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             // Add headers as required by the service
        //         },
        //         body: JSON.stringify({
        //             text: text,
        //             lang: 'ar', // Specify the language if required by the API
        //             // Include other API parameters as needed
        //         })
        //     })
        //     .then(response => response.blob())
        //     .then(blob => {
        //         const audioUrl = URL.createObjectURL(blob);
        //         const audio = new Audio(audioUrl);
        //         audio.play();
        //     })
        //     .catch(error => console.error('Error:', error));
        // }
        
    
    
        //one color website
    
        var toggleButton = document.getElementById('one-color-website');
    
        toggleButton.addEventListener('click', function() {
            $("section").toggleClass('black-and-white');
            $("nav").toggleClass('black-and-white');
    
        });
        
    
        //cursor 
    
    
        var cursorToggleButton = document.getElementById('cursor-bigger');
    
        cursorToggleButton.addEventListener('click', function() {
            // This example toggles a class for a larger built-in cursor style.
            // Replace 'large-cursor-builtin' with 'large-cursor' if using a custom image
            document.body.classList.toggle('large-cursor-builtin');
        });
    
    
    
        // bigger headlines
    
        var highlightHeadersButton = document.getElementById('highlight-headers');
    
        highlightHeadersButton.addEventListener('click', function() {
            document.body.classList.toggle('highlighted-headlines');
        });
    
        // bigger links
    
        var highlightLinksButton = document.getElementById('highlight-links');
    
        highlightLinksButton.addEventListener('click', function() {
            document.body.classList.toggle('highlighted-links');
        });
    
    
        //line height increase
    
            var lineHeightButton = document.getElementById('increase-line-height');
        
            lineHeightButton.addEventListener('click', function() {
                document.body.classList.toggle('increased-line-height');
            });
        
    
        // show images alt 
    
        var toggleDescriptionsBtn = document.getElementById('show-images-ult');
    
        toggleDescriptionsBtn.addEventListener('click', function() {
            document.querySelectorAll('img').forEach(function(img) {
                var description = img.nextElementSibling;
    
                // Check if the description already exists
                if (description && description.classList.contains('img-description')) {
                    // Remove the description if it exists
                    description.remove();
                } else {
                    // Create a new span element for the description
                    var descriptionText = img.getAttribute('alt');
                    var descriptionElement = document.createElement('span');
                    descriptionElement.classList.add('img-description');
                    descriptionElement.innerText = descriptionText;
    
                    // Position the descriptionElement after the img in the DOM
                    img.parentNode.insertBefore(descriptionElement, img.nextSibling);
                }
            });
        });
    
    
    
        // show - hide images 
    
        var hideImagesButton = document.getElementById('hide-images');
    
        hideImagesButton.addEventListener('click', function() {
            document.querySelectorAll('img').forEach(function(img) {
                img.classList.toggle('hide-images');
            });
        });
    
    
    
        //color opacity
    
        var toggleSaturationButton = document.getElementById('color-opacity');
    
        toggleSaturationButton.addEventListener('click', function() {
            $("section").toggleClass('desaturate');
            $("nav").toggleClass('desaturate');
    
        });
    
    
    
        // word spacing input 
    
        var letterSpacingSlider = document.getElementById('range-letter-spacing');
    
    
        letterSpacingSlider.addEventListener('input', function() {
            $('body').removeClass('normal');
    
            var spacingValue = letterSpacingSlider.value + 'px';
            document.body.style.wordSpacing = spacingValue;
        });
    
    
        //line height input 
    
        var lineHeightSlider = document.getElementById('range-line-height');
    
        // Adjust line height based on slider input
        lineHeightSlider.addEventListener('input', function() {
            $('body').removeClass('normal');
    
            // Convert the slider value to a suitable line-height value
            var lineHeightValue = lineHeightSlider.value + 'px';
            document.body.style.lineHeight = lineHeightValue;
        });
    
    
        // font size 
    
        var fontSizeSlider = document.getElementById('range-font-size');
    
        // Adjust font size based on slider input
        fontSizeSlider.addEventListener('input', function() {
            var fontSizeValue = fontSizeSlider.value + 'px';
            // Select all targeted elements
            var elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, ul li, a, button');
            // Loop through the NodeList
            elements.forEach(function(element) {
                element.style.setProperty('font-size', fontSizeValue, 'important');
            });
        });
    
    
        //reset all options 
    
        function resetAccessibilityOptions() {
            // Reset zoom
            $('body').css('zoom', 1);
            $('body').addClass('normal');
    
        
            // Reset contrast and desaturation
            $('section').css('filter', '');
            $('nav').css('filter', '');
    
            // Remove classes for other accessibility features
            document.body.classList.remove('black-and-white', 'large-cursor-builtin', 'highlighted-headlines', 'increased-line-height');
        
            // Hide image descriptions if they are visible
            document.querySelectorAll('.img-description').forEach(function(description) {
                description.remove();
            });
        
            // Show images if they were hidden
            document.querySelectorAll('img').forEach(function(img) {
                img.classList.remove('hide-images');
            });
        
            // Cancel any ongoing speech synthesis
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
            }
    
            var elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, ul li, a, button');
            // Loop through the NodeList
            elements.forEach(function(element) {
                element.style.setProperty('font-size', '', 'important');
            });
    
            
            $(".accessibility-content .option").removeClass("active")
    
    
        }
        
        // Attach the reset function to the reset button
        document.querySelector('.reset-options').addEventListener('click', resetAccessibilityOptions);
    
    
    
    }
        // *****************************************************************
    



            // side nav opened page code

    // Get current page URL without the domain part
    var currentPage = window.location.pathname.split('/').pop();

    // Check if currentPage is empty or 'index.html', mark the first main menu item as active
    if (currentPage === '/' || currentPage === 'index.html') {
        $('.main-menu > li:first-child > a').addClass('active');
    } else {

        // Iterate through each anchor tag in the sub-menu
        $('.sub-menu a').each(function() {
            var menuItem = $(this).attr('href');

            // Check if the menuItem's href matches the current page
            if (menuItem === `./`+ currentPage) {
                console.log(menuItem)

                // Add 'active' class to the parent button of this sub-menu
                $(this).closest('li').parent().parent().closest('li').find('button').addClass('active');
                $(this).closest('li').parent().parent().slideDown('active');
            }
        });
    }


    // side nav opened page code

    // *****************************************************************



});

