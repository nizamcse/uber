$(document).ready(function() {
        
    var pageTitle = document.title;
    
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-7157694-53','auto');
    ga('send', 'pageview');            
    
    
});

$(window).on("load", function() {   // WAIT UNTIL ALL CONTENT IS LOADED
   
    var pageTitle = document.title;
    
    var randomPalette = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
        
    $(".color-palette-font").each( function() {
       $(this).addClass("color-palette-" + randomPalette + "-font");
    });
    
    $(".color-palette-font-cta").each( function() {
       $(this).addClass("color-palette-" + randomPalette + "-font-cta");
    });
    
    $(".color-palette-font-cta-outline").each( function() {
       $(this).addClass("color-palette-" + randomPalette + "-font-cta-outline");
    });
    
    $(".color-palette-border").each( function() {
       $(this).addClass("color-palette-" + randomPalette + "-border");
    });
    
    $(".color-palette-border-light").each( function() {
       $(this).addClass("color-palette-" + randomPalette + "-border-light");
    });
    
    $(".color-palette-bg-cta").each( function() {
       $(this).addClass("color-palette-" + randomPalette + "-bg-cta");
    });
    
    $(".color-palette-bg").each( function() {
       $(this).addClass("color-palette-" + randomPalette + "-bg");
    });
    
    $(".color-palette-social-icons").each( function() {
       $(this).addClass("color-palette-" + randomPalette + "-social-icons");
    });
    
    $(".pattern-st0").each( function() {
       $(this).attr("class", "color-palette-" + randomPalette + "-pattern pattern-st0");
    });
    
    $(".pattern-st1").each( function() {
       $(this).attr("class", "color-palette-" + randomPalette + "-pattern pattern-st1");
    });
    
    $(".color-palette-illo-1").each( function() {
       var thisClassName = $(this).attr("class");
       $(this).attr("class", thisClassName + " color-palette-" + randomPalette + "-illo-1");
    });
    
    $(".color-palette-illo-2").each( function() {
       var thisClassName = $(this).attr("class");
       $(this).attr("class", thisClassName + " color-palette-" + randomPalette + "-illo-2");
    });
    
    $(".color-palette-illo-3").each( function() {
       var thisClassName = $(this).attr("class");
       $(this).attr("class", thisClassName + " color-palette-" + randomPalette + "-illo-3");
    });
    
    $("p").each( function() {
       $(this).addClass("color-palette-" + randomPalette + "-selection");
    });
    
    $(".pattern-tile").attr("style", "fill: url(#pattern-" + randomPalette + ") #fff;");
    
    $(".color-palette-app-icon-bg").each( function() {
       $(this).attr("class", "color-palette-" + randomPalette + "-app-icon-bg");
    });
    
    $(".color-palette-illo-stroke-1").each( function() {
       var thisClassName = $(this).attr("class");
       $(this).attr("class", thisClassName + " color-palette-" + randomPalette + "-illo-stroke-1");
    });
    
    $(".color-palette-illo-stroke-2").each( function() {
       var thisClassName = $(this).attr("class");
       $(this).attr("class", thisClassName + " color-palette-" + randomPalette + "-illo-stroke-2");
    });
    
    $(".color-palette-illo-stroke-3").each( function() {
       var thisClassName = $(this).attr("class");
       $(this).attr("class", thisClassName + " color-palette-" + randomPalette + "-illo-stroke-3");
    });
    
    $(".color-palette-app-icon-depth").each( function() {
       $(this).attr("class", "color-palette-" + randomPalette + "-app-icon-depth");
    });
    
    $(".color-palette-app-icon-pattern").each( function() {
       var thisClassName = $(this).attr("class");
       $(this).attr("class", thisClassName + " color-palette-" + randomPalette + "-app-icon-pattern");
    });
    
    $("body").attr("data-color-palette-id", randomPalette);    
    
    var heroMontageVideo = "<span id='hero-montage-video-wrapper' class='fade-out cubic-easeinout--medium'><video width='auto' height='100%' class='palm--hidden portable--hidden cubic-easeinout--fast' poster='wp-content/uploads/videos/hero-montage.jpg' loop><source src='wp-content/uploads/videos/hero-montage.webm' type='video/webm'><source src='wp-content/uploads/videos/hero-montage.mp4' type='video/mp4'></video></span>";

    var moodboardVideo = "<video width='100%' height='auto' class='opacity-65 palm--hidden portable--hidden cubic-easeinout--fast' poster='wp-content/uploads/videos/moodboards.jpg' loop><source src='wp-content/uploads/videos/moodboards.webm' type='video/webm'><source src='wp-content/uploads/videos/moodboards.mp4' type='video/mp4'></video>";    
    
    $("#hero-montage").append(heroMontageVideo);
    $("#moodboard-video-wrapper").append(moodboardVideo);
    
    $("#hero-montage-video-wrapper").removeClass("fade-out");
    
    $(document).scrollTop(0);
    var currentScroll = $(document).scrollTop();
    $(".loading-bit-hero, #loading-wrapper").addClass("fade-out");
    $("#loading-wrapper").css({"z-index": "-1"});
    $("#grid-wrapper").removeClass("grid-overflow");
    
    setTimeout(function() {
        $( "#loading-wrapper" ).remove();
    }, 1250);
    
        
    // HERO BUILD
    
    if ( (window.location.href.lastIndexOf('#') != window.location.href.length - 1) && ( (window.location.href.split("#").length != 1) ) ) { // #something        
        
        openModal();
        
    }
    
    if (window.location.href.split("#").length == 1) {  // no #
    
        heroBuild();
    
    }
    
    if (window.location.href.lastIndexOf('#') === window.location.href.length - 1) { // # only
        
        heroBuild();
        
    }
    
    function heroBuild() {
             
        setTimeout(function() {

            $("#hero-title .text-animate").addClass("text-mask-reveal");
            $("#bit-content").removeClass("bottom-reveal");
            $("#hero-montage, #social, #hero-montage-pattern").removeClass("top-reveal");
            $("#hero-arrow").removeClass("bottom-reveal-fadeless");
            $(".hero-bg").removeClass("bottom-reveal-fadeless");
            $("#our-brand").removeClass("bottom-reveal");
            $(".icon_uber").removeClass("top-reveal");

            $(".gutter-l").removeClass("left-reveal");
            $(".gutter-r").removeClass("right-reveal");
            }, 100);
    }
        
    
    // LETTER PULL
    
    function letterPull() {
    
        $(".letter-pull").each( function() {
            var textString = $(this).html();
            var character = $(this).text().charAt(0);

            if ( $(this).hasClass("news") ) {
                $(this).addClass("letter-pull--news");
            }

            if (character == character.toUpperCase()) {

                character = character.toLowerCase();
                $(this).addClass("letter-pull--upper-" + character);

            } else if (character == character.toLowerCase()) {

                character = character.toLowerCase();
                $(this).addClass("letter-pull--lower-" + character);

            }

            if (!isNaN(character)) {
                $(this).addClass("letter-pull--" + character);
            }

            if (textString.slice(0,5) == "&amp;") {
                $(this).addClass("letter-pull--ampersand");
            }
        });
        
    }
    
    letterPull();
    
    // COLOR PALETTE
    
    var randomPalette = $("body").attr("data-color-palette-id");
        
//    $(".color-palette-font").each( function() {
//       $(this).addClass("color-palette-" + randomPalette + "-font");
//    });
//    
//    $(".color-palette-font-cta").each( function() {
//       $(this).addClass("color-palette-" + randomPalette + "-font-cta");
//    });
//    
//    $(".color-palette-font-cta-outline").each( function() {
//       $(this).addClass("color-palette-" + randomPalette + "-font-cta-outline");
//    });
//    
//    $(".color-palette-border").each( function() {
//       $(this).addClass("color-palette-" + randomPalette + "-border");
//    });
//    
//    $(".color-palette-border-light").each( function() {
//       $(this).addClass("color-palette-" + randomPalette + "-border-light");
//    });
//    
//    $(".color-palette-bg-cta").each( function() {
//       $(this).addClass("color-palette-" + randomPalette + "-bg-cta");
//    });
//    
//    $(".color-palette-bg").each( function() {
//       $(this).addClass("color-palette-" + randomPalette + "-bg");
//    });
    
//    $(".pattern-st0").each( function() {
//       $(this).attr("class", "color-palette-" + randomPalette + "-pattern pattern-st0");
//    });
//    
//    $(".pattern-st1").each( function() {
//       $(this).attr("class", "color-palette-" + randomPalette + "-pattern pattern-st1");
//    });
//    
//    $(".color-palette-illo-1").each( function() {
//       $(this).addClass("color-palette-" + randomPalette + "-illo-1");
//    });
//    
//    $(".color-palette-illo-2").each( function() {
//       $(this).addClass("color-palette-" + randomPalette + "-illo-2");
//    });
//    
        $("p").each( function() {
           $(this).addClass("color-palette-" + randomPalette + "-selection");
        });
//    
//    $("#illo-city .st4").each( function() {
//       $(this).attr("class", "color-palette-" + randomPalette + "-illo-2");
//    });
//    
//    $("#illo-city .st3").each( function() {
//       $(this).attr("class", "color-palette-" + randomPalette + "-illo-1");
//    });
//    
//    $("#mobile-city .mobilecity-st1").each( function() {
//       $(this).attr("class", "color-palette-" + randomPalette + "-illo-2");
//    });
//    
//    $("#mobile-city .mobilecity-st7").each( function() {
//       $(this).attr("class", "color-palette-" + randomPalette + "-illo-1");
//    });
    
//    $(".pattern-tile").attr("style", "fill: url(#pattern-" + randomPalette + ") #fff;");
    
//    $(".color-palette-app-icon-bg").each( function() {
//       $(this).attr("class", "color-palette-" + randomPalette + "-app-icon-bg");
//    });
//    
//    $(".color-palette-app-icon-depth").each( function() {
//       $(this).attr("class", "color-palette-" + randomPalette + "-app-icon-depth");
//    });
//    
//    $(".color-palette-app-icon-pattern").each( function() {
//       var thisClassName = $(this).attr("class");
//       $(this).attr("class", thisClassName + " color-palette-" + randomPalette + "-app-icon-pattern");
//    });
    
    
    // LINK UNDERLINE 
    
    $(".link-underline").each( function() {
        $(this).append("<span class='display--block position--absolute align--bottom bg-uber-white height--2px whole left-reveal-fadeless cubic-easeinout--snap link-underline-effect'></span>");
    });
    
    $(".link-underline").hover( function() {
        $(this).children(".link-underline-effect").removeClass("left-reveal-fadeless");    
    }, function() {
        $(this).children(".link-underline-effect").addClass("left-reveal-fadeless");
    });
   
    
    // BUTTON RIGHT ARROW
    
    $(".button-right-arrow").each( function() {
        $(this).addClass("layout__item vertical--baseline push-left--icon cubic-easeinout--snap");
        $(this).append("<i class='icon icon_right-arrow-thin'></i>");
    });    
    
    $(".button").hover(function() {
        $(this).children(".push-left--icon").addClass("arrow-button-hover");
    }, function() {
        $(this).children(".push-left--icon").removeClass("arrow-button-hover");
    });
    
    // LINE-HEIGHT
    
    function lineHeight() {
    
        $(".text-mask").each( function() {
            var lineHeight = $(this).children(".text-animate").css("line-height");
            $(this).css("height",lineHeight);
        });
        
    }
    
    lineHeight();
    

    // WINDOW RESIZE
    
    $( window ).resize(function() {
        
        // FIX LINE HEIGHTS
        lineHeight();
        
        if ($(window).width() <= 768) {
            $(".parallax-wrapper").removeAttr("style");
            mobileEffects();
//            heroBuild();
        } else {
            parallaxEffects();
        }
        
    });        
    
    // HERO TITLE CAROUSEL
    var IEversion = detectIE();
    
    
    if (IEversion !== false) {
    } else {
        
        var carouselFirstReset = $("#carousel-first").html();
        var carouselSecondReset = $("#carousel-second").html();

        $( "<li class='hero-title-carousel-reveal cubic-easeinout--fast'>" + $("#carousel-first li:first").html() + "</li>" ).insertAfter( "#carousel-first li:last" );

        $( "<li class='hero-title-carousel-reveal cubic-easeinout--fast delay-075s'>" + $("#carousel-second li:first").html() + "</li>" ).insertAfter( "#carousel-second li:last" );
        
        
        var carouselCount = $("#carousel-first > li").length;

        var n = 1;

        (function titleCarousel (i) {

          setTimeout(function () {

            if ( i == 1 ) {

                $("#carousel-first li:nth-last-child(2)").addClass("hero-title-carousel-hide");
                $("#carousel-second li:nth-last-child(2)").addClass("hero-title-carousel-hide");

                $("#carousel-first li:last").removeClass("hero-title-carousel-reveal");
                $("#carousel-second li:last").removeClass("hero-title-carousel-reveal");

            } else {

                $("#carousel-first li:nth-of-type(" + n + ")").addClass("hero-title-carousel-hide");
                $("#carousel-first li:nth-of-type(" + (n+1) + ")").removeClass("hero-title-carousel-reveal");

                $("#carousel-second li:nth-of-type(" + n + ")").addClass("hero-title-carousel-hide");
                $("#carousel-second li:nth-of-type(" + (n+1) + ")").removeClass("hero-title-carousel-reveal");
            }


            if (--i) {          // If i > 0, keep going
              titleCarousel(i);       // Call the loop again, and pass it the current value of i
              n++;  
            } else {

                n = 1;
                $("#carousel-first").html( carouselFirstReset );
                $("#carousel-second").html( carouselSecondReset );
                $( "<li class='hero-title-carousel-reveal cubic-easeinout--fast'>" + $("#carousel-first li:first").html() + "</li>" ).insertAfter( "#carousel-first li:last" );

                $( "<li class='hero-title-carousel-reveal cubic-easeinout--fast delay-075s'>" + $("#carousel-second li:first").html() + "</li>" ).insertAfter( "#carousel-second li:last" );
                i = carouselCount;
                titleCarousel(i); 
            }
          }, 2750);
        })(carouselCount);    
        
    

    }

    
    
    
    // BIT CLICK

    $("#bit-hero").click(function() {
        $('html, body').animate({
            scrollTop: $("#our-brand").offset().top-65
        }, 1250);
    });    

    $("#bit-scrolltop").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1250);
    });    
    
    // PARALLAX
    
    var bitMarginTop = parseInt($("#bit-content").css("margin-top").slice(0,-2));
    var bitFixedPosition = 35;
    
    function parallaxEffects() {
        
        var windowHeight = $(window).height();
        var scrollY = window.pageYOffset;
        
        // APP ICON BUILD
        
        var processPosY = $("#section-story").offset().top + $("#section-story").outerHeight()-100;
        
        if ( scrollY >= processPosY ) {
                $(".app-tile").attr("class","app-tile cubic-easeinout--slow-4s");  
        } else {
                $(".app-tile").attr("class","app-tile cubic-easeinout--slow-4s app-tile-pop");   
        }
                        
        
        // PARALLAX EFFECTS
            
        var parallaxSlowerRate = 10;
        
        $("section").each( function() {
            
            var sectionTop = $(this).offset().top;
            var sectionHeight = $(this).outerHeight();
            var windowHeight = $(window).height(); 
            
            // IN VIEW
            
            if ( ((sectionTop-scrollY) < windowHeight-100 ) && ( ((sectionTop-scrollY)+sectionHeight) > 0 ) ) {

                $(this).find("#illo-city-parallax").addClass("cityScroll"); // TEXT ANIMATION
                
                $(this).find(".text-mask-effect").textAnimation(); // TEXT ANIMATION
                
                $(this).find(".parallax-wrapper").each( function() {            // APPLY PARALLAX
                    
                    var parallaxRate = $(this).children(".parallax").attr("data-parallax");
                    var offsetTop = $(this).children(".parallax").offset().top;
                    var positionTop = $(this).position().top;                    
                    
                    if (parallaxRate >= 1) {
                        var parallaxOffset = Math.round(-parallaxRate*(scrollY-sectionTop)/parallaxSlowerRate);
                    } else {
                        var parallaxOffset = Math.round(parallaxRate*(scrollY-sectionTop));
                    }
                                        
                    $(this).css({
                         WebkitTransform: 'translate(0px,' + parallaxOffset + 'px)',
                         MozTransform: 'translate(0px,' + parallaxOffset + 'px)',
                         msTransform: 'translate(0px,' + parallaxOffset + 'px)',
                         transform: 'translate(0px,' + parallaxOffset + 'px)'
                    });
                    
                });                
                
                $(this).find( "video" ).each(function() {                       // PLAY VIDEOS                
                    $(this)[0].play();                    
                });
                
            // OUT OF VIEW
                
            } else {

                $(this).find("#illo-city-parallax").removeClass("cityScroll"); // TEXT ANIMATION
                
//                $(this).find(".text-mask-effect").textAnimationHide(); // TEXT ANIMATION
                                             
                $(this).find( "video" ).each(function() {                       // PAUSE VIDEOS                
                    $(this)[0].pause(); 
                });
                                                             
            }
                                                
        });
        
        
        // BIT
        
        var bitTopY = bitMarginTop + document.getElementById("section-hero").clientHeight/2 - bitFixedPosition;
        var bitParallaxRate = $("#bit-content").attr("data-parallax");
        var bitTop = Math.round(bitTopY/(1 + bitParallaxRate/parallaxSlowerRate));
                
        if ( ( ( bitTop-$(window).scrollTop() ) < 0 )  && ( !$("#bit").hasClass("bit-fixed") ) ) {
            
            $("#bit").removeAttr("style").addClass("bit-fixed");
            $("#bit").css({"top": bitFixedPosition + "px"});
            $("#bit").addClass("grid");
            $("#bit").removeClass("right-two-tenths");
            $("#bit-content").addClass("push-right-two-tenths");
            $("#bit").removeClass("parallax-wrapper");
            $("#bit-content").css({"margin-top": "0px"});
            $("#bit-content").addClass("bit-small");
            
            $("#bit-hero").addClass("top-hide");
            $("#bit-scrolltop").removeClass("bottom-hide");
            $("#hero-arrow").addClass("fade-out");
            
        } else if ( ( ( bitTop-$(window).scrollTop() ) >= 0 ) && ( $("#bit").hasClass("bit-fixed") )  ) {
            
            $("#bit").removeClass("bit-fixed");
            
            $("#bit").removeClass("grid");
            $("#bit").addClass("parallax-wrapper");
            
            $("#bit").addClass("right-two-tenths");
            $("#bit-content").removeClass("push-right-two-tenths");
            
            var parallaxRate = $("#bit").children(".parallax").attr("data-parallax");
            var parallaxID = $("#bit").children(".parallax").attr("data-id");
            var parallaxCols = $("#bit").children(".parallax").attr("data-cols");
            
            if (parallaxRate >= 1) {
                var parallaxOffset = Math.round(-parallaxRate*scrollY/parallaxSlowerRate);
            } else {
                var parallaxOffset = Math.round(parallaxRate*scrollY);
            }
            
            $("#bit").removeAttr("style").css({
                     WebkitTransform: 'translate(0px,' + parallaxOffset + 'px)',
                     MozTransform: 'translate(0px,' + parallaxOffset + 'px)',
                     msTransform: 'translate(0px,' + parallaxOffset + 'px)',
                     transform: 'translate(0px,' + parallaxOffset + 'px)'
            });
            
            
            $("#bit-content").removeAttr("style");
            
//            $("#bit-content").removeClass("right-two-tenths");
            $("#bit-content").removeClass("bit-small");
            $("#bit-hero").removeClass("top-hide");
            $("#bit-scrolltop").addClass("bottom-hide");
            $("#hero-arrow").removeClass("fade-out");
            
        } else if ( !$("#bit").hasClass("bit-fixed") ) {
            
            $("#bit").addClass("right-two-tenths");
            $("#bit-content").removeClass("push-right-two-tenths");
            
            
            var parallaxRate = $("#bit").children(".parallax").attr("data-parallax");
            var parallaxID = $("#bit").children(".parallax").attr("data-id");
            var parallaxCols = $("#bit").children(".parallax").attr("data-cols");
            
            if (parallaxRate >= 1) {
                var parallaxOffset = Math.round(-parallaxRate*scrollY/parallaxSlowerRate);
            } else {
                var parallaxOffset = Math.round(parallaxRate*scrollY);
            }
            
            if ( (window.location.href.lastIndexOf('#') != window.location.href.length - 1) && (window.location.href.split("#").length != 1) ) {
                
                $("#bit-content").removeClass("bottom-reveal");            
                $("#bit").addClass("bit-fixed");
                $("#bit").css({"top": "25px"});
                $("#bit").addClass("grid");
                $("#bit").removeClass("right-two-tenths");
                $("#bit-content").addClass("push-right-two-tenths");
                $("#bit").removeClass("parallax-wrapper");
                $("#bit-content").css({"margin-top": "0px"});
                $("#bit-content").addClass("bit-small");

                $("#bit-hero").addClass("top-hide");
                $("#bit-scrolltop").removeClass("bottom-hide");
                $("#hero-arrow").addClass("fade-out");
                
                
            } else {
            
                $("#bit").css({
                         WebkitTransform: 'translate(0px,' + parallaxOffset + 'px)',
                         MozTransform: 'translate(0px,' + parallaxOffset + 'px)',
                         msTransform: 'translate(0px,' + parallaxOffset + 'px)',
                         transform: 'translate(0px,' + parallaxOffset + 'px)'
                });
                
            }
            
            
        }
        
    }
    
    // WRAP EACH PARALLAX ELEMENT
    
    $(".parallax").wrap( "<span class='parallax-wrapper'></span>" );
    
    $(".parallax-wrapper").each( function() {

        var parallaxID = $(this).children(".parallax").attr("data-id");
        var parallaxCols = $(this).children(".parallax").attr("data-cols");
        var parallaxWidth = $(this).children(".parallax").attr("data-width");

        $(this).attr("id",parallaxID);
        $(this).addClass(parallaxCols);
        $(this).addClass(parallaxWidth);

    });
    
    
    (function($) {

        var working = false;

        var parallax = function() {
            
            if ( !$("#grid-wrapper").hasClass("grid-hide") || !$(".hero-bg").hasClass("bottom-reveal-fadeless") ) {                 
                parallaxEffects();
            }
            
            working = false;
        };

        var mobileScroll = function() {
            
            if ( !$("#grid-wrapper").hasClass("grid-hide") || !$(".hero-bg").hasClass("bottom-reveal-fadeless") ) { 
                mobileEffects();
            }
            
            working = false;
        };

        $(window)
            .on('scroll', function() {
                if ((! working) && $(window).width() > 768 ) {
                    window.requestAnimationFrame(parallax);
                    working = true;
                }
                if ((! working) && $(window).width() <= 768 ) {
                    window.requestAnimationFrame(mobileScroll);
                    working = true;
                }
            })
            .trigger('scroll');
    })(jQuery);    
    

    $("#bit-close-modal, #uber-logo-modal").click(function() {
        
         if ( $("#bit-close-modal").attr("data-disabled") != "1" ) {
            window.location.hash="#";
         }
        
    });   
    
   
    // HASH CHANGE
    
    $(window).on('hashchange', function() {
        
        if ( !$("#grid-wrapper").hasClass("grid-hide") ) { // OPEN MODAL
                
          openModal();   
            
          currentScroll = $(document).scrollTop();
            
        } else {                                    // CLOSE MODAL
            
          $(document).scrollTop(currentScroll)
          
          closeModal();
            
        }
        
    });
    
    // REVEAL MODAL TITLE
    
    $("#modal-wrapper").on('scroll', function() {
        
        var modalScroll = $("#modal-wrapper").scrollTop();
        var modalTitle = $("#modal-hero").height()/2;
        
        if ( modalScroll > modalTitle ) {
            
            if ($("#modal-nav-title").hasClass("bottom-hide") ) {
                $("#modal-nav-title").removeClass("bottom-hide");    
                
                if ($(window).width() <= 768) {
                    $("#modal-nav-uber").addClass("top-hide");
                }
            }
            
        } else {
            
            if (!$("#modal-nav-title").hasClass("bottom-hide") ) {
                $("#modal-nav-title").addClass("bottom-hide");    
                
                if ($(window).width() <= 768) {
                    $("#modal-nav-uber").removeClass("top-hide");
                }
            }
        }
    });
        
    var loadArticle;
    
    function openModal() {
        
        $("#bit-content").removeClass("bottom-reveal");
        
        $("#modal-wrapper-bg, #modal-wrapper").removeClass("hidden-offscreen");
        
        var permalink = $("#permalink-" + window.location.hash.substr(1)).attr("data-permalink");
        ga('send', 'pageview', '/' + window.location.hash.substr(1));
        
            verticalMiddle = Math.round(( ($(document).scrollTop() + $(window).height()/2 ) / $(document).height() )*100);
      


            $("#grid-wrapper").removeAttr("style").css({
                     "transform-origin": "50% " + verticalMiddle + "%",
                     "-moz-transform-origin": "50% " + verticalMiddle + "%",
                     "-webkit-transform-origin": "50% " + verticalMiddle + "%",
                     "-ms-transform-origin": "50% " + verticalMiddle + "%"
            });
        
            $("#grid-wrapper").addClass("touch--none");
        
            $("#modal-bit-loader").removeClass("fade-out");
            $("#modal-bit-loader").addClass("modal-pulsate");
                
            setTimeout(function() {
            
                $("#bit-scrolltop").addClass("top-hide");
                $("#bit-close-modal").removeClass("bottom-hide");
                
                $("body").css({"overflow-y":"hidden"});      
                
                $("#grid-wrapper").addClass("grid-hide");

                $("#modal-wrapper-bg").removeClass("fade-out");

                $(".gutter-l").addClass("left-reveal");
                $(".gutter-r").addClass("right-reveal");
                $("nav").removeClass("top-hide-fadeless");

            }, 0);
        
                        
        loadArticle = $.ajax({
            type: "GET",
            url: permalink,
            dataType: "html",
            success: function(data){
                
                $("#bit-close-modal").attr("data-disabled","1");
                
                $(data).hide().appendTo('#modal-wrapper');

                var imagesCount = $('#modal-wrapper').find('img').length;
                var imagesLoaded = 0;

                $('#modal-wrapper').find('img').load( function() {
                    ++imagesLoaded;
                    if (imagesLoaded >= imagesCount) {
                        $('#modal-wrapper').children().show();
                        
                        setTimeout(function() {    
                            animateModal();
                        }, 750);
                    }
                });
                
                }
        });
                       
    }
    
    function animateModal() {
    
                    lineHeight();
                    // GET TITLE

                    var str = "";

                    letterPull();
        
                    $("#modal-wrapper .color-palette-font").each( function() {
                       $(this).addClass("color-palette-" + randomPalette + "-font");
                    });        

                    $("#modal-wrapper p").each( function() {
                       $(this).addClass("color-palette-" + randomPalette + "-selection");
                    });

                    $("#modal-nav-text").html( $("#permalink-" + window.location.hash.substr(1)).attr("data-post-title") );
              
                    var articleTitle = $("#permalink-" + window.location.hash.substr(1)).attr("data-post-title");
                    document.title = pageTitle + " | " + articleTitle;
        
        
                    $("#brand-intro-img").html("<img id='brand-intro-img' src='wp-content/uploads/images/MicroSite_About-Us_Colors-0" + randomPalette + ".png' width='100%' height='auto'>");

                    $("#modal-wrapper .color-palette-border").each( function() {
                       $(this).addClass("color-palette-" + randomPalette + "-border");
                    });

                    $("#modal-wrapper .color-palette-border-light").each( function() {
                       $(this).addClass("color-palette-" + randomPalette + "-border-light");
                    });

                    $("#modal-wrapper .pattern-tile").attr("style", "fill: url(#pattern-" + randomPalette + ") #fff;");

                    $("#modal-wrapper .color-palette-bg").each( function() {
                       $(this).addClass("color-palette-" + randomPalette + "-bg");
                    });
                    
                    $("#modal-wrapper-bg").removeClass("fade-out");

                    $("#modal-wrapper").css({
                        "overflow-y":"auto"
                    }).scrollTop(0);

                    $(".modal-card").removeClass("modal-card-hide");
                    $(".modal-card").removeClass("fade-out");
                    $("#modal-hero-img").removeClass("scale-reveal");
                    $("#modal-card").removeClass("bottom-reveal-fadeless");
                    $("#modal-wrapper").css({"pointer-events":"auto"});
        
                    $("#modal-bit-loader").addClass("fade-out");  
        
ga('send', 'event', 'Vimeo', 'Started video', 'https://player.vimeo.com/video/53655713', undefined, {'nonInteraction': 1});        
ga('send', 'event', 'Vimeo', 'Completed video', 'https://player.vimeo.com/video/53655713', undefined, {'nonInteraction': 1});
ga('send', 'event', 'Vimeo', 'Played video: 25%', 'https://player.vimeo.com/video/53655713', undefined, {'nonInteraction': 1});
ga('send', 'event', 'Vimeo', 'Played video: 50%', 'https://player.vimeo.com/video/53655713', undefined, {'nonInteraction': 1});
ga('send', 'event', 'Vimeo', 'Played video: 75%', 'https://player.vimeo.com/video/53655713', undefined, {'nonInteraction': 1});
        
        
                    setTimeout(function() {    
                        $("#modal-article-author, #modal-article-date").removeClass("fade-out");                    
                        $("#modal-hero-title").textAnimation(); 
                        $("#bit-close-modal").attr("data-disabled","0"); 
                        $("#modal-bit-loader").removeClass("modal-pulsate");
                    }, 500);

    }
    
    
    
    function closeModal() {
        
            loadArticle.abort();
        
            if ( document.body.scrollTop === 0  ) {

                parallaxEffects();

            }
        
            document.title = pageTitle;
        
            $("nav").addClass("top-hide-fadeless");
        
            $("body").css({"overflow-y":"auto"});
            
            $("#bit-scrolltop").removeClass("top-hide");
            $("#bit-close-modal").addClass("bottom-hide");
            
            $(".gutter-l").removeClass("left-reveal");
            $(".gutter-r").removeClass("right-reveal");
            
            $("#modal-wrapper").css({"overflow-y":"hidden"});
            
            $("#modal-wrapper").css({"pointer-events":"none"});
            
            $("#modal-wrapper-bg").addClass("fade-out");
            $(".modal-card").addClass("modal-card-hide");
            $(".modal-card").addClass("fade-out");
            
            $("#grid-wrapper").removeClass("grid-hide");
            
            $("#grid-wrapper").removeClass("touch--none");
        
            setTimeout(function() {    
                $("#modal-wrapper-bg, #modal-wrapper").addClass("hidden-offscreen");       
            }, 350);  
        
            setTimeout(function() {                
                $('#modal-wrapper').html("");        
            }, 1000); 
        
            if ( $(".icon_uber").hasClass("top-reveal") ) {
                heroBuild();
            }
    }
     
    
    $('#illo-vehicle').clickToggle(
    function() {   
        revealAltCar();
    },
    function() {
        hideAltCar();
    });    
   
    function revealAltCar() {
            $("#illo-car-default").addClass("display--none");
            $("#illo-car-alt").removeClass("display--none");
            $("#our-brand-bg").addClass("fun-bg");
            $("#alt-circle-bg").addClass("fun-bg-2");
//            $("#illo-city-parallax").removeClass("cityScroll"); // Fast City Scroll
//            $("#illo-city-parallax").addClass("cityScrollFast"); // Fast City Scroll
    }
    
    function hideAltCar() {
            $("#illo-car-default").removeClass("display--none");
            $("#illo-car-alt").addClass("display--none");
            $("#our-brand-bg").removeClass("fun-bg");
            $("#alt-circle-bg").removeClass("fun-bg-2");
        
//            $("#illo-city-parallax").addClass("cityScroll"); // Fast City Scroll
//            $("#illo-city-parallax").removeClass("cityScrollFast"); // Fast City Scroll
    }

    
    if ($(window).width() <= 768) {
        $(".parallax-wrapper").removeAttr("style");
        var bitTopY = parseInt($("#bit").css("top").slice(0,-2));
        mobileEffects();
    }    
    
    
    function mobileEffects() {
        
        var windowHeight = $(window).height();
        var scrollY = window.pageYOffset;
        
        // APP ICON BUILD
        
        var processPosY = $("#section-story").offset().top + $("#section-story").outerHeight()-100;
        
        if ( scrollY >= processPosY ) {
//                $(".app-tile").attr("class","app-tile cubic-easeinout--slow-4s");   
        } else {
//                $(".app-tile").attr("class","app-tile cubic-easeinout--slow-4s app-tile-pop");   
        }
                        
        
        // PARALLAX EFFECTS
        
        $("section").each( function() {
            
            var sectionTop = $(this).offset().top;
            var sectionHeight = $(this).outerHeight();
            
            // IN VIEW
            
            if ( ((sectionTop-scrollY) < windowHeight+50 ) && ( ((sectionTop-scrollY)+sectionHeight) > 0 ) ) {
                
//                $(this).find(".text-mask-effect").textAnimation(); // TEXT ANIMATION
                                                
            // OUT OF VIEW
                
            } else {

                
//                $(this).find(".text-mask-effect").textAnimationHide(); // TEXT ANIMATION
                                             
                                                             
            }
                                                
        });
        
        
        // BIT
        
        var bitFixedPosition = 25;
        var bitTop = bitTopY - parseInt($(".padding--bit").css("padding").slice(0,-2)) - bitFixedPosition;
        
                
        if ( ( ( bitTop-$(window).scrollTop() ) < 0 )  && ( !$("#bit").hasClass("bit-fixed") ) || window.location.hash ) {
            
            $("#bit").removeAttr("style").addClass("bit-fixed");
            $("#bit").addClass("grid");
            $("#bit").removeClass("right-one-tenths");
            $("#bit-content").addClass("push-right-one-tenths palm-push-right-one-twentieths");
            $("#bit-content").css({"margin-top": "0px"});
            $("#bit-content").addClass("bit-small");
            
            $("#bit-hero").addClass("top-hide");
            $("#bit-scrolltop").removeClass("bottom-hide");
            $("#hero-arrow").addClass("fade-out");
            
        } else if ( ( ( bitTop-$(window).scrollTop() ) >= 0 ) && ( $("#bit").hasClass("bit-fixed") ) ) {
            
            $("#bit").removeClass("bit-fixed");
            
            $("#bit").removeClass("grid");
            
            $("#bit").addClass("right-one-tenths");
            $("#bit-content").removeClass("push-right-one-tenths palm-push-right-one-twentieths");
            
            
            $("#bit-content, #bit").removeAttr("style");
            
            $("#bit-content").removeClass("bit-small");
            $("#bit-hero").removeClass("top-hide");
            $("#bit-scrolltop").addClass("bottom-hide");
            $("#hero-arrow").removeClass("fade-out");
            
        } else if ( !$("#bit").hasClass("bit-fixed") ) {
            
            $("#bit-content, #bit").removeAttr("style");
            $("#bit").addClass("right-one-tenths");
            $("#bit-content").removeClass("push-right-one-tenths palm-push-right-one-twentieths");
            
            
            
            
        }
        
    }
    
/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // IE 12 / Spartan
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge (IE 12+)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}    
    
});


(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));

