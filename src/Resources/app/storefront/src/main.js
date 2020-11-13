$(document).ready(function () {
    //stick header in home page if height of the slider
    if($('body').hasClass('is-act-home')) {
        var $win = $(window);
        var winH = $win.height() - 20;   // Get the window height.

        $win.on("scroll", function () {
            if ($(this).scrollTop() > winH ) {
                $('.header-main').addClass('header-black');
            } else {
                $('.header-main').removeClass('header-black');
            }
        }).on("resize", function(){
            winH = $(this).height();
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
