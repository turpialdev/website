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

            var roof = mY - 100;
            var rotation1 = Math.abs( (roof / 100) * 45 );
            var transla1X = Math.abs( (roof / 100) * -7 );
            var transla1Y = Math.abs( (roof / 100) * 6  );

            var rotation2 = Math.abs( (roof / 100) * 45 );
            var transla2X = Math.abs( (roof / 100) * -7 );
            var transla2Y = Math.abs( (roof / 100) * -5 );

            document.getElementById('bar1').style.transform = 'rotate(' + -rotation1 + 'deg) translate(' + -transla1X + 'px,' + transla1Y + 'px)';
            document.getElementById('bar2').style.opacity = (mY - 100) * 0.01;
            document.getElementById('bar3').style.transform = 'rotate(' + rotation2 + 'deg) translate(' + -transla2X + 'px,' + -transla2Y + 'px)';
        } else {
            document.getElementById('menuItems').style.opacity = 0;
            document.getElementById('bar1').style.transform = 'none';
            document.getElementById('bar2').style.opacity = Math.abs((mY - 100) * 0.01);
            document.getElementById('bar3').style.transform = 'none';
        }
    });

})();