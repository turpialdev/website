$(document).ready(function () {

    $('#h-menu').click(function () {
        if ($(document).width() > '1025') {
            // $(this).toggleClass('open');
        }
        $('#menuItems').toggleClass('showMenu');
    });
});

function closeMenu() {
    // $('#h-menu').toggleClass('open');
    $('#menuItems').toggleClass('showMenu');
}

(function () {


    document.onmousemove = (function () {
        var onmousestop = function () {
        }, thread;

        return function (e) {
            if ($(document).width() > '1025') {

                mY = e.pageY - $("#h-menu").offset().top;
                sY = e.pageY - $(".subsection").offset().top;

                if (mY > 55 && sY > 200) {


                    if (mY > 55) {
                        $('#menuItems').removeClass('showMenu');
                    }

                    if (sY > 200) {
                        $('#menuItems').removeClass('showMenu');
                    }

                } else {
                    setTimeout(() => {
                    if (mY < 55) {
                            $('#menuItems').addClass('showMenu');
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
            $('#menuItems').removeClass('showMenu');
        }, 3000);
    }
}