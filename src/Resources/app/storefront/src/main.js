$(document).ready(function () {
    //stick header in home page if height of the slider
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

    //humburger menu change to close
    $('.btn-menu').on('click', function () {
        $(this).toggleClass('is--active');
    });

    //in look page click at the botton move down
    $('.move-down').on('click', function () {
        let heightDown = $('.look-banner').height();
        window.scrollTo(0, heightDown);
    });
});
