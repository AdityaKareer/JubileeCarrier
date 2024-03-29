jQuery(function ($) {
    "use strict";    
    $('.testimonials-wrap').slick({
        arrows: false
    });
    $('.testimonials-pagination button').on('click', function () {
        if ($(this).attr('class') === 'prev') {
            $('.testimonials-wrap').slick('slickPrev');
        } else {
            $('.testimonials-wrap').slick('slickNext');
        }
    });
});