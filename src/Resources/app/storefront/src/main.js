$(document).ready(function () {
    let heightSlider = $('.home-slider-first').height();
    console.log(heightSlider);
    console.log($('window').offset().top);
        if($('window').offset().top > heightSlider) {
            $('.header-main').addClass('header-black');
            console.log(1);
        } else {
            $('.header-main').removeClass('header-black');
            console.log(2);
        }
});
