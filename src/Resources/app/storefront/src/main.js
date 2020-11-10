$(document).ready(function () {
    let heightSlider = $('.home-slider-first').height() - 20;
    if($('body').hasClass('is-act-home')) {
        $(window).on('scroll', function() {
            var fromTop = $(window).scrollTop();
            if (fromTop > heightSlider) {
                $('.header-main').addClass('header-black');
            } else {
                $('.header-main').removeClass('header-black');
            }
        });
    }
});
