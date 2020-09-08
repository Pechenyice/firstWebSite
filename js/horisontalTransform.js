var vh = document.getElementById('sticky').clientHeight / 3;
var vw = document.getElementById('sticky').clientWidth;
var transX = 0.0384*vw + 'px';
var maxTransX = 0;
var endedTrans = 0;
var endedFirstTrans = 0;

window.onscroll = function() {
    if (window.pageYOffset > (900 + 0.9*vh + vh - 0.3*vh) && maxTransX <= (0.86 * vw) && !endedTrans) {
        maxTransX += 0.0384 * vw;
        transX = 0.0384*vw + 'px';
        if (maxTransX > (0.86 * vw)) {
            transX = (maxTransX - (0.86 * vw));
            maxTransX -= 0.0384 * vw;
            maxTransX += transX;
            transX = transX + 'px';
            endedfirstTrans = 1;
            endedTrans = 1;
        } else {
            endedFirstTrans = 0;
        }
        document.getElementById('firstHorisontalScrolledObject').style.transform += 'translateX(' + transX + ')';
        transX = 0.0384*vw + 'px';
    } else if (window.pageYOffset < (900 + 1.9*vh) && endedTrans) {
        maxTransX -= 0.06 * vw;
        transX = 0.06*vw + 'px';
        if (maxTransX < 0){
            transX = 0 - maxTransX;
            maxTransX += 0.06 * vw;
            maxTransX -= transX;
            transX = transX + 'px';
            endedTrans = 0;
        }
        document.getElementById('firstHorisontalScrolledObject').style.transform += 'translateX(-' + transX + ')';
        transX = 0.06*vw + 'px';
    }
}
