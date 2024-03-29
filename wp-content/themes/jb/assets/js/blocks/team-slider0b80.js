jQuery(function ($) {
    "use strict";    
    $('.about-team .row').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            }
            ]
    });
});