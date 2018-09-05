var grayStart = document.getElementById("web").offsetTop;
var grayEnd = document.getElementById("aboutus").offsetTop;

$(function () {
    /**
     * Set frame borders transition
     */
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

    /**
     * Add smooth scrolling to all links
     */
    $("a").on('click', function (event) {

        /* Make sure this.hash has a value before overriding default behavior */
        if (this.hash !== "") {
            /* Prevent default anchor click behavior */
            event.preventDefault();
            var hash = this.hash;

            /**
             * Using jQuery's animate() method to add smooth page scroll
             * The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
             */
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                /**
                 * Add hash (#) to URL when done scrolling (default click behavior)
                 * window.location.hash = hash;
                 */
                
            });
        }
    });
});