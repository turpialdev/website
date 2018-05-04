function myFunction(x) {
    x.classList.toggle("change");
}

(function() {
    
    var mX, mY, distance;
    document.getElementById('menuItems').style.opacity = 0;

    $(document).mousemove(function(e) {  
        mX = e.pageX;
        mY = e.pageY - 52;

        if (mY < 0) {
            mY = 0;
        }
        
        if (mY <= 100 && mX) {
            document.getElementById('menuItems').style.opacity = Math.abs((mY - 100) * 0.01);

            var rotation1 = Math.abs(((mY / 100) * 45) - 45);
            var transla1X = Math.abs(((mY / 100) * -7) - 7);
            var transla1Y = Math.abs(((mY / 100) * 6) + 6);

            var rotation2 = Math.abs(((mY / 100) * 45) + 45);
            var transla2X = Math.abs(((mY / 100) * -7) - 7);
            var transla2Y = Math.abs(((mY / 100) * -5) - 5);

            console.log(rotation1);

            document.getElementById('bar1').style.transform = 'rotate(' + -rotation1 + 'deg) translate(' + -transla1X + 'px,' + transla1Y + 'px)';
            document.getElementById('bar2').style.opacity = 0;
            document.getElementById('bar3').style.transform = 'rotate(' + rotation2 + 'deg) translate(' + -transla2X + 'px,' + -transla2Y + 'px)';
        } else {
            document.getElementById('menuItems').style.opacity = 0;
            document.getElementById('bar1').style.transform = 'none';
            document.getElementById('bar2').style.opacity = 1;
            document.getElementById('bar3').style.transform = 'none';
        }
    });

})();