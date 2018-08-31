$(document).ready(function () {

    $('#h-menu').click(function () {
        if ($(document).width() > '1025') {
            $(this).toggleClass('open');
        }
        $('#menuItems').toggleClass('showMenu');
    });
});

function closeMenu() {
    // $('#h-menu').toggleClass('open');
    $('#menuItems').toggleClass('showMenu');
}