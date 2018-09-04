var grayStart = document.getElementById("web").offsetTop;
var grayEnd = document.getElementById("aboutus").offsetTop;

$(function () {
    if (window.location.href.indexOf("opportunities") > -1) {
        $('body').addClass('onBodyColorChange');
        $('header').addClass('onBodyColorChange');
        $('footer').addClass('onBodyColorChange');
        $('.subsection').addClass('onBodyColorChange');
        $('.nav-logo img').addClass('grayScale');
    } else {
        $(window).scroll(function () {
            if ($(this).scrollTop() > grayStart || $(this).scrollTop() < grayEnd) {
                $('body').addClass('onBodyColorChange');
                $('header').addClass('onBodyColorChange');
                $('footer').addClass('onBodyColorChange');
                $('.subsection').addClass('onBodyColorChange');
            }
            if ($(this).scrollTop() > grayStart) {
                $('.nav-logo img').addClass('grayScale');
            }
            if ($(this).scrollTop() < grayStart || $(this).scrollTop() > grayEnd) {
                $('body').removeClass('onBodyColorChange');
                $('header').removeClass('onBodyColorChange');
                $('footer').removeClass('onBodyColorChange');
                $('.subsection').removeClass('onBodyColorChange');
            }
            if ($(this).scrollTop() < grayStart) {
                $('.nav-logo img').removeClass('grayScale');
            }
        });
    }
});