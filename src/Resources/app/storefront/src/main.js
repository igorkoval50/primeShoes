$(document).ready(function () {
    //stick header in home page if height of the slider
    let $win = $(window);
    let winH = $win.height() - 20;   // Get the window height.

    $win.on("resize", function() {
        winH = $(this).height();
    });

    if($('body').hasClass('is-act-home')) {
        $win.on("scroll", function () {
            if ($(this).scrollTop() > winH ) {
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
        window.scrollTo(0, winH);
    });
});
