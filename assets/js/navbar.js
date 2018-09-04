var screenSize = $(document).width();
var menu;

$(document).ready(function () {
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
    // $('#h-menu').toggleClass('open');
    menu.addClass('showMenu');
}

function closeMenu() {
    menu.removeClass('showMenu');
}

(function () {

    document.onmousemove = (function () {
        var onmousestop = function () {
        }, thread;

        return function (e) {
            if (screenSize > '1025') {

                mY = e.pageY - $("#h-menu").offset().top;
                sY = e.pageY - $(".subsection").offset().top;

                if (mY > 55 && sY > 200) {


                    if (mY > 55) {
                        menu.removeClass('showMenu');
                    }

                    if (sY > 200) {
                        menu.removeClass('showMenu');
                    }

                } else {
                    setTimeout(() => {
                        if (mY < 55) {
                            menu.addClass('showMenu');
                        }
                    }, 50);
                };

            }
        };
    })();


})();

function clear() {
    if ($(document).width() > '1025') {
        setTimeout(() => {
            menu.removeClass('showMenu');
        }, 3000);
    }
}