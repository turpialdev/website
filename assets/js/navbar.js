$(document).ready(function(){

	$('#h-menu').click(function(){
        $(this).toggleClass('open');
        $('#menuItems').toggleClass('showMenu');
    });
});

function closeMenu() {
    $('#h-menu').toggleClass('open');
    $('#menuItems').toggleClass('showMenu');
}

/*
function myFunction(x) {
    x.classList.toggle("change");
}

(function () {

    var mX, mY, distance;
    document.getElementById('menuItems').style.opacity = 0;

    function clearAnimation() {
        document.getElementById('menuItems').style.opacity = 0;
        document.getElementById('bar1').style.transform = 'none';
        document.getElementById('bar2').style.opacity = 'initial';
        document.getElementById('bar3').style.transform = 'none';
    }

    document.onmousemove = (function () {
        var onmousestop = function () {
            clearAnimation();
        }, thread;

        return function (e) {

            mX = e.pageX;
            mY = e.pageY - 52;

            if (mY < 0) {
                mY = 0;
            }

            if (mY <= 52) {
                document.getElementById('menuItems').style.opacity = Math.abs((mY - 100) * 0.01);

                var roof = mY - 100;
                var rotation1 = Math.abs((roof / 100) * 45);
                var transla1X = Math.abs((roof / 100) * -7);
                var transla1Y = Math.abs((roof / 100) * 6);

                var rotation2 = Math.abs((roof / 100) * 45);
                var transla2X = Math.abs((roof / 100) * -7);
                var transla2Y = Math.abs((roof / 100) * -5);

                document.getElementById('bar1').style.transform = 'rotate(' + -rotation1 + 'deg) translate(' + -transla1X + 'px,' + transla1Y + 'px)';
                document.getElementById('bar2').style.opacity = (mY - 100) * 0.01;
                document.getElementById('bar3').style.transform = 'rotate(' + rotation2 + 'deg) translate(' + -transla2X + 'px,' + -transla2Y + 'px)';
            } else {
                clearAnimation();
            }

            if (e.pageY > 52) {
                clearTimeout(thread);
                thread = setTimeout(onmousestop, 500);
            }
        };
    })();

})();
*/