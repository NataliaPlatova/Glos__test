$(document).ready(function(){
    $('.slider__gallery').slick({
        fade: true,
        cssEase: 'linear',
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '$(.slider__arrow_prev)',
        nextArrow: '$(.slider__arrow_next)',
});
});
