var screenSize = $(document).width();
var menu;
var nav = $('#nav');
var hamburger = $('#h-menu');

$(document).ready(function () {
    saveScreenSize();
});

$(window).resize(function () {
    saveScreenSize();
});

function saveScreenSize() {
    screenSize = $(document).width();
    if (screenSize > '1024') {
        menu = $('#menuLG');
    } else {
        menu = $('#menuSM');
    }
    closeMenu();
}

function openMenu() {
    menu.addClass('showMenu');
}

function closeMenu() {
    menu.removeClass('showMenu');
    hamburger.css('width', '50');
    hamburger.css('opacity', '1');
}

(function () {

    document.onmousemove = (function () {
        var onmousestop = function () {
        }, thread;

        return function (e) {
            if (screenSize > '1024') {

                mY = e.pageY - nav.offset().top;
                sY = e.pageY - $(".subsection").offset().top;

                if (mY > 55 && sY > 200) {


                    if (mY > 55) {
                        menu.removeClass('showMenu');
                        hamburger.css('width', '50');
                        hamburger.css('opacity', '1');
                    }

                    if (sY > 200) {
                        menu.removeClass('showMenu');
                        hamburger.css('width', '50');
                        hamburger.css('opacity', '1');
                    }

                } else {
                    setTimeout(() => {
                        if (mY < 55) {
                            menu.addClass('showMenu');
                            hamburger.css('width', '0');
                            hamburger.css('opacity', '0');
                        }
                    }, 50);
                };

            }
        };
    })();


})();