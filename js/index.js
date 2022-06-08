// global variable to keep track of window width
var windowWidth = 0;

// page load shorthand method
jQuery( $ => {
 
    AOS.init({
        disable: 'mobile'
    });

    windowWidth = $( window ).width();

    // mobile menu functionality
    $("#mobile-menu-open").on("click", e => {
        $("#mobile-menu").addClass("open");
    });
    $("#mobile-menu-close").on("click", e => {
        $("#mobile-menu").removeClass("open");
    });

    // Slick carousel initialization 
    function slickening(el, slidesToShow, autoplay){
        if(el.hasClass('slick-initialized') ) {
            el.slick('unslick')
        }
        el.slick({
            infinite: true,
            slidesToShow,
            slidesToScroll: 1,
            autoplay,
            arrows: true,

        });
    }

    // Check window viewport widths to determine carousel behavior
    function check_window_width(){

        if($(window).width() > 1023){
            slickening( $('.carousel'), 3, false );
        } else if($(window).width() < 1025 && $(window).width() > 639){
            if( $(".carousel").hasClass('slick-initialized') ) {
                $(".carousel").slick('unslick');
            }
            slickening( $('.carousel'), 2, false );
        } else if($(window).width() < 641 && $(window).width() > 319){
            if( $(".carousel").hasClass('slick-initialized') ) {
                $(".carousel").slick('unslick');
            }
            slickening( $('.carousel'), 1, false );
        }
    }

    // call carousel logic on page load
    check_window_width();

    // call carousel logic on window resize but only for width so that scrolling in mobile doesn't cause jank and jitter
    $(window).resize(function () {
        if( windowWidth != $( window ).width() ){
            check_window_width();
            windowWidth = $(window).width();
          }
    });
});