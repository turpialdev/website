$(function() {
    if(window.location.href.indexOf("opportunities") > -1) {
        $('body').addClass('onBodyColorChange');
        $('header').addClass('onBodyColorChange');
        $('footer').addClass('onBodyColorChange');
        $('.subsection').addClass('onBodyColorChange');
        $('.nav-logo img').addClass('grayScale');
    } else {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('body').addClass('onBodyColorChange');
                $('header').addClass('onBodyColorChange');
                $('footer').addClass('onBodyColorChange');
                $('.subsection').addClass('onBodyColorChange');
                $('.nav-logo img').addClass('grayScale');
            }
            if ($(this).scrollTop() < 200) {
                $('body').removeClass('onBodyColorChange');
                $('header').removeClass('onBodyColorChange');
                $('footer').removeClass('onBodyColorChange');
                $('.subsection').removeClass('onBodyColorChange');
                $('.nav-logo img').removeClass('grayScale');
            }
        });
    }
 });