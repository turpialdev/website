$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $('body').addClass('onBodyColorChange');
          $('header').addClass('onBodyColorChange');
          $('footer').addClass('onBodyColorChange');
          $('.nav-logo img').addClass('grayScale');
       }
       if ($(this).scrollTop() < 50) {
          $('body').removeClass('onBodyColorChange');
          $('header').removeClass('onBodyColorChange');
          $('footer').removeClass('onBodyColorChange');
          $('.nav-logo img').removeClass('grayScale');
       }
    });
 });