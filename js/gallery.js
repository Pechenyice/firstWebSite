
var picNum = 1;
var interval = 5000;
var firstCheck = document.getElementById('firstCheckButton');
var secondCheck = document.getElementById('secondCheckButton');
var thirdCheck = document.getElementById('thirdCheckButton');
var fourthCheck = document.getElementById('fourthCheckButton');
var fifthCheck = document.getElementById('fifthCheckButton');
var mainBlock = document.getElementById('galleryDiv');

function sendPrevForm() {
    clearTimeout(timerId);
    if (picNum > 1) {
        picNum--;
    } else {
        picNum = 5;
    }

    if (picNum == 5) {
        mainBlock.style.backgroundImage = "url('img/galleryFifth.jpg')";
        
        firstCheck.style.background = '#545454';
        firstCheck.style.width = '1vw';
        firstCheck.style.height = '1vw';
        firstCheck.style.borderRadius = '0.5vw';
        firstCheck.style.marginLeft = '45.5vw';
        firstCheck.style.marginTop = '40vh';

        secondCheck.style.background = '#545454';
        secondCheck.style.width = '1vw';
        secondCheck.style.height = '1vw';
        secondCheck.style.borderRadius = '0.5vw';
        secondCheck.style.marginLeft = '47.5vw';
        secondCheck.style.marginTop = '-1vw';

        thirdCheck.style.background = '#545454';
        thirdCheck.style.width = '1vw';
        thirdCheck.style.height = '1vw';
        thirdCheck.style.borderRadius = '0.5vw';
        thirdCheck.style.marginLeft = '49.5vw';
        thirdCheck.style.marginTop = '-1vw';

        fourthCheck.style.background = '#545454';
        fourthCheck.style.width = '1vw';
        fourthCheck.style.height = '1vw';
        fourthCheck.style.borderRadius = '0.5vw';
        fourthCheck.style.marginLeft = '51.5vw';
        fourthCheck.style.marginTop = '-1vw';

        fifthCheck.style.background = 'black';
        fifthCheck.style.width = '2vw';
        fifthCheck.style.height = '2vw';
        fifthCheck.style.borderRadius = '1vw';
        fifthCheck.style.marginLeft = '53vw';
        fifthCheck.style.marginTop = '-1.5vw';

    } else if (picNum == 4) {
        mainBlock.style.backgroundImage = "url('img/galleryFourth.jpg')";
        
        firstCheck.style.background = '#545454';
        firstCheck.style.width = '1vw';
        firstCheck.style.height = '1vw';
        firstCheck.style.borderRadius = '0.5vw';
        firstCheck.style.marginLeft = '45.5vw';
        firstCheck.style.marginTop = '40vh';

        secondCheck.style.background = '#545454';
        secondCheck.style.width = '1vw';
        secondCheck.style.height = '1vw';
        secondCheck.style.borderRadius = '0.5vw';
        secondCheck.style.marginLeft = '47.5vw';
        secondCheck.style.marginTop = '-1vw';

        thirdCheck.style.background = '#545454';
        thirdCheck.style.width = '1vw';
        thirdCheck.style.height = '1vw';
        thirdCheck.style.borderRadius = '0.5vw';
        thirdCheck.style.marginLeft = '49.5vw';
        thirdCheck.style.marginTop = '-1vw';

        fourthCheck.style.background = 'black';
        fourthCheck.style.width = '2vw';
        fourthCheck.style.height = '2vw';
        fourthCheck.style.borderRadius = '1vw';
        fourthCheck.style.marginLeft = '51vw';
        fourthCheck.style.marginTop = '-1.5vw';

        fifthCheck.style.background = '#545454';
        fifthCheck.style.width = '1vw';
        fifthCheck.style.height = '1vw';
        fifthCheck.style.borderRadius = '0.5vw';
        fifthCheck.style.marginLeft = '53.5vw';
        fifthCheck.style.marginTop = '-1.5vw';

    } else if (picNum == 3) {
        mainBlock.style.backgroundImage = "url('img/galleryThird.jpg')";
        
        firstCheck.style.background = '#545454';
        firstCheck.style.width = '1vw';
        firstCheck.style.height = '1vw';
        firstCheck.style.borderRadius = '0.5vw';
        firstCheck.style.marginLeft = '45.5vw';
        firstCheck.style.marginTop = '40vh';

        secondCheck.style.background = '#545454';
        secondCheck.style.width = '1vw';
        secondCheck.style.height = '1vw';
        secondCheck.style.borderRadius = '0.5vw';
        secondCheck.style.marginLeft = '47.5vw';
        secondCheck.style.marginTop = '-1vw';

        thirdCheck.style.background = 'black';
        thirdCheck.style.width = '2vw';
        thirdCheck.style.height = '2vw';
        thirdCheck.style.borderRadius = '1vw';
        thirdCheck.style.marginLeft = '49vw';
        thirdCheck.style.marginTop = '-1.5vw';

        fourthCheck.style.background = '#545454';
        fourthCheck.style.width = '1vw';
        fourthCheck.style.height = '1vw';
        fourthCheck.style.borderRadius = '0.5vw';
        fourthCheck.style.marginLeft = '51.5vw';
        fourthCheck.style.marginTop = '-1.5vw';
       
        fifthCheck.style.background = '#545454';
        fifthCheck.style.width = '1vw';
        fifthCheck.style.height = '1vw';
        fifthCheck.style.borderRadius = '0.5vw';
        fifthCheck.style.marginLeft = '53.5vw';
        fifthCheck.style.marginTop = '-1vw';

    } else if (picNum == 2) {
        mainBlock.style.backgroundImage = "url('img/gallerySecond.jpg')";
        
        firstCheck.style.background = '#545454';
        firstCheck.style.width = '1vw';
        firstCheck.style.height = '1vw';
        firstCheck.style.borderRadius = '0.5vw';
        firstCheck.style.marginLeft = '45.5vw';
        firstCheck.style.marginTop = '40vh';

        secondCheck.style.background = 'black';
        secondCheck.style.width = '2vw';
        secondCheck.style.height = '2vw';
        secondCheck.style.borderRadius = '1vw';
        secondCheck.style.marginLeft = '47vw';
        secondCheck.style.marginTop = '-1.5vw';

        thirdCheck.style.background = '#545454';
        thirdCheck.style.width = '1vw';
        thirdCheck.style.height = '1vw';
        thirdCheck.style.borderRadius = '0.5vw';
        thirdCheck.style.marginLeft = '49.5vw';
        thirdCheck.style.marginTop = '-1.5vw';

        fourthCheck.style.background = '#545454';
        fourthCheck.style.width = '1vw';
        fourthCheck.style.height = '1vw';
        fourthCheck.style.borderRadius = '0.5vw';
        fourthCheck.style.marginLeft = '51.5vw';
        fourthCheck.style.marginTop = '-1vw';
       
        fifthCheck.style.background = '#545454';
        fifthCheck.style.width = '1vw';
        fifthCheck.style.height = '1vw';
        fifthCheck.style.borderRadius = '0.5vw';
        fifthCheck.style.marginLeft = '53.5vw';
        fifthCheck.style.marginTop = '-1vw';

    } else if (picNum == 1) {
        mainBlock.style.backgroundImage = "url('img/galleryFirst.jpg')";
        
        firstCheck.style.background = 'black';
        firstCheck.style.width = '2vw';
        firstCheck.style.height = '2vw';
        firstCheck.style.borderRadius = '1vw';
        firstCheck.style.marginLeft = '45vw';
        firstCheck.style.marginTop = '39vh';

        secondCheck.style.background = '#545454';
        secondCheck.style.width = '1vw';
        secondCheck.style.height = '1vw';
        secondCheck.style.borderRadius = '0.5vw';
        secondCheck.style.marginLeft = '47.5vw';
        secondCheck.style.marginTop = '-1.5vw';
        
        thirdCheck.style.background = '#545454';
        thirdCheck.style.width = '1vw';
        thirdCheck.style.height = '1vw';
        thirdCheck.style.borderRadius = '0.5vw';
        thirdCheck.style.marginLeft = '49.5vw';
        thirdCheck.style.marginTop = '-1vw';

        fourthCheck.style.background = '#545454';
        fourthCheck.style.width = '1vw';
        fourthCheck.style.height = '1vw';
        fourthCheck.style.borderRadius = '0.5vw';
        fourthCheck.style.marginLeft = '51.5vw';
        fourthCheck.style.marginTop = '-1vw';
       
        fifthCheck.style.background = '#545454';
        fifthCheck.style.width = '1vw';
        fifthCheck.style.height = '1vw';
        fifthCheck.style.borderRadius = '0.5vw';
        fifthCheck.style.marginLeft = '53.5vw';
        fifthCheck.style.marginTop = '-1vw';

    }
    timerId = setInterval(sendNextForm, interval);
}
checkPicPrev.onclick = sendPrevForm;

function sendNextForm() {
    clearTimeout(timerId);
    if (picNum < 5) {
        picNum++;
    } else {
        picNum = 1;
    }

    if (picNum == 5) {
        mainBlock.style.backgroundImage = "url('img/galleryFifth.jpg')";
        
        firstCheck.style.background = '#545454';
        firstCheck.style.width = '1vw';
        firstCheck.style.height = '1vw';
        firstCheck.style.borderRadius = '0.5vw';
        firstCheck.style.marginLeft = '45.5vw';
        firstCheck.style.marginTop = '40vh';

        secondCheck.style.background = '#545454';
        secondCheck.style.width = '1vw';
        secondCheck.style.height = '1vw';
        secondCheck.style.borderRadius = '0.5vw';
        secondCheck.style.marginLeft = '47.5vw';
        secondCheck.style.marginTop = '-1vw';

        thirdCheck.style.background = '#545454';
        thirdCheck.style.width = '1vw';
        thirdCheck.style.height = '1vw';
        thirdCheck.style.borderRadius = '0.5vw';
        thirdCheck.style.marginLeft = '49.5vw';
        thirdCheck.style.marginTop = '-1vw';

        fourthCheck.style.background = '#545454';
        fourthCheck.style.width = '1vw';
        fourthCheck.style.height = '1vw';
        fourthCheck.style.borderRadius = '0.5vw';
        fourthCheck.style.marginLeft = '51.5vw';
        fourthCheck.style.marginTop = '-1vw';

        fifthCheck.style.background = 'black';
        fifthCheck.style.width = '2vw';
        fifthCheck.style.height = '2vw';
        fifthCheck.style.borderRadius = '1vw';
        fifthCheck.style.marginLeft = '53vw';
        fifthCheck.style.marginTop = '-1.5vw';

    } else if (picNum == 4) {
        mainBlock.style.backgroundImage = "url('img/galleryFourth.jpg')";
        
        firstCheck.style.background = '#545454';
        firstCheck.style.width = '1vw';
        firstCheck.style.height = '1vw';
        firstCheck.style.borderRadius = '0.5vw';
        firstCheck.style.marginLeft = '45.5vw';
        firstCheck.style.marginTop = '40vh';

        secondCheck.style.background = '#545454';
        secondCheck.style.width = '1vw';
        secondCheck.style.height = '1vw';
        secondCheck.style.borderRadius = '0.5vw';
        secondCheck.style.marginLeft = '47.5vw';
        secondCheck.style.marginTop = '-1vw';

        thirdCheck.style.background = '#545454';
        thirdCheck.style.width = '1vw';
        thirdCheck.style.height = '1vw';
        thirdCheck.style.borderRadius = '0.5vw';
        thirdCheck.style.marginLeft = '49.5vw';
        thirdCheck.style.marginTop = '-1vw';

        fourthCheck.style.background = 'black';
        fourthCheck.style.width = '2vw';
        fourthCheck.style.height = '2vw';
        fourthCheck.style.borderRadius = '1vw';
        fourthCheck.style.marginLeft = '51vw';
        fourthCheck.style.marginTop = '-1.5vw';

        fifthCheck.style.background = '#545454';
        fifthCheck.style.width = '1vw';
        fifthCheck.style.height = '1vw';
        fifthCheck.style.borderRadius = '0.5vw';
        fifthCheck.style.marginLeft = '53.5vw';
        fifthCheck.style.marginTop = '-1.5vw';

    } else if (picNum == 3) {
        mainBlock.style.backgroundImage = "url('img/galleryThird.jpg')";
        
        firstCheck.style.background = '#545454';
        firstCheck.style.width = '1vw';
        firstCheck.style.height = '1vw';
        firstCheck.style.borderRadius = '0.5vw';
        firstCheck.style.marginLeft = '45.5vw';
        firstCheck.style.marginTop = '40vh';

        secondCheck.style.background = '#545454';
        secondCheck.style.width = '1vw';
        secondCheck.style.height = '1vw';
        secondCheck.style.borderRadius = '0.5vw';
        secondCheck.style.marginLeft = '47.5vw';
        secondCheck.style.marginTop = '-1vw';

        thirdCheck.style.background = 'black';
        thirdCheck.style.width = '2vw';
        thirdCheck.style.height = '2vw';
        thirdCheck.style.borderRadius = '1vw';
        thirdCheck.style.marginLeft = '49vw';
        thirdCheck.style.marginTop = '-1.5vw';

        fourthCheck.style.background = '#545454';
        fourthCheck.style.width = '1vw';
        fourthCheck.style.height = '1vw';
        fourthCheck.style.borderRadius = '0.5vw';
        fourthCheck.style.marginLeft = '51.5vw';
        fourthCheck.style.marginTop = '-1.5vw';
       
        fifthCheck.style.background = '#545454';
        fifthCheck.style.width = '1vw';
        fifthCheck.style.height = '1vw';
        fifthCheck.style.borderRadius = '0.5vw';
        fifthCheck.style.marginLeft = '53.5vw';
        fifthCheck.style.marginTop = '-1vw';

    } else if (picNum == 2) {
        mainBlock.style.backgroundImage = "url('img/gallerySecond.jpg')";
        
        firstCheck.style.background = '#545454';
        firstCheck.style.width = '1vw';
        firstCheck.style.height = '1vw';
        firstCheck.style.borderRadius = '0.5vw';
        firstCheck.style.marginLeft = '45.5vw';
        firstCheck.style.marginTop = '40vh';

        secondCheck.style.background = 'black';
        secondCheck.style.width = '2vw';
        secondCheck.style.height = '2vw';
        secondCheck.style.borderRadius = '1vw';
        secondCheck.style.marginLeft = '47vw';
        secondCheck.style.marginTop = '-1.5vw';

        thirdCheck.style.background = '#545454';
        thirdCheck.style.width = '1vw';
        thirdCheck.style.height = '1vw';
        thirdCheck.style.borderRadius = '0.5vw';
        thirdCheck.style.marginLeft = '49.5vw';
        thirdCheck.style.marginTop = '-1.5vw';

        fourthCheck.style.background = '#545454';
        fourthCheck.style.width = '1vw';
        fourthCheck.style.height = '1vw';
        fourthCheck.style.borderRadius = '0.5vw';
        fourthCheck.style.marginLeft = '51.5vw';
        fourthCheck.style.marginTop = '-1vw';
       
        fifthCheck.style.background = '#545454';
        fifthCheck.style.width = '1vw';
        fifthCheck.style.height = '1vw';
        fifthCheck.style.borderRadius = '0.5vw';
        fifthCheck.style.marginLeft = '53.5vw';
        fifthCheck.style.marginTop = '-1vw';

    } else if (picNum == 1) {
        mainBlock.style.backgroundImage = "url('img/galleryFirst.jpg')";
        
        firstCheck.style.background = 'black';
        firstCheck.style.width = '2vw';
        firstCheck.style.height = '2vw';
        firstCheck.style.borderRadius = '1vw';
        firstCheck.style.marginLeft = '45vw';
        firstCheck.style.marginTop = '39vh';

        secondCheck.style.background = '#545454';
        secondCheck.style.width = '1vw';
        secondCheck.style.height = '1vw';
        secondCheck.style.borderRadius = '0.5vw';
        secondCheck.style.marginLeft = '47.5vw';
        secondCheck.style.marginTop = '-1.5vw';
        
        thirdCheck.style.background = '#545454';
        thirdCheck.style.width = '1vw';
        thirdCheck.style.height = '1vw';
        thirdCheck.style.borderRadius = '0.5vw';
        thirdCheck.style.marginLeft = '49.5vw';
        thirdCheck.style.marginTop = '-1vw';

        fourthCheck.style.background = '#545454';
        fourthCheck.style.width = '1vw';
        fourthCheck.style.height = '1vw';
        fourthCheck.style.borderRadius = '0.5vw';
        fourthCheck.style.marginLeft = '51.5vw';
        fourthCheck.style.marginTop = '-1vw';
       
        fifthCheck.style.background = '#545454';
        fifthCheck.style.width = '1vw';
        fifthCheck.style.height = '1vw';
        fifthCheck.style.borderRadius = '0.5vw';
        fifthCheck.style.marginLeft = '53.5vw';
        fifthCheck.style.marginTop = '-1vw';

    }
    timerId = setInterval(sendNextForm, interval);
}
checkPicNext.onclick = sendNextForm;
var timerId = setInterval(sendNextForm, interval);

firstCheck.addEventListener('click', function(){choosePic(1);});
secondCheck.addEventListener('click', function(){choosePic(2);});
thirdCheck.addEventListener('click', function(){choosePic(3);});
fourthCheck.addEventListener('click', function(){choosePic(4);});
fifthCheck.addEventListener('click', function(){choosePic(5);});

function choosePic(num) {
    clearTimeout(timerId);
    picNum = num;
    if (num == 5) {
        mainBlock.style.backgroundImage = "url('img/galleryFifth.jpg')";
        
        firstCheck.style.background = '#545454';
        firstCheck.style.width = '1vw';
        firstCheck.style.height = '1vw';
        firstCheck.style.borderRadius = '0.5vw';
        firstCheck.style.marginLeft = '45.5vw';
        firstCheck.style.marginTop = '40vh';

        secondCheck.style.background = '#545454';
        secondCheck.style.width = '1vw';
        secondCheck.style.height = '1vw';
        secondCheck.style.borderRadius = '0.5vw';
        secondCheck.style.marginLeft = '47.5vw';
        secondCheck.style.marginTop = '-1vw';

        thirdCheck.style.background = '#545454';
        thirdCheck.style.width = '1vw';
        thirdCheck.style.height = '1vw';
        thirdCheck.style.borderRadius = '0.5vw';
        thirdCheck.style.marginLeft = '49.5vw';
        thirdCheck.style.marginTop = '-1vw';

        fourthCheck.style.background = '#545454';
        fourthCheck.style.width = '1vw';
        fourthCheck.style.height = '1vw';
        fourthCheck.style.borderRadius = '0.5vw';
        fourthCheck.style.marginLeft = '51.5vw';
        fourthCheck.style.marginTop = '-1vw';

        fifthCheck.style.background = 'black';
        fifthCheck.style.width = '2vw';
        fifthCheck.style.height = '2vw';
        fifthCheck.style.borderRadius = '1vw';
        fifthCheck.style.marginLeft = '53vw';
        fifthCheck.style.marginTop = '-1.5vw';

    } else if (num == 4) {
        mainBlock.style.backgroundImage = "url('img/galleryFourth.jpg')";
        
        firstCheck.style.background = '#545454';
        firstCheck.style.width = '1vw';
        firstCheck.style.height = '1vw';
        firstCheck.style.borderRadius = '0.5vw';
        firstCheck.style.marginLeft = '45.5vw';
        firstCheck.style.marginTop = '40vh';

        secondCheck.style.background = '#545454';
        secondCheck.style.width = '1vw';
        secondCheck.style.height = '1vw';
        secondCheck.style.borderRadius = '0.5vw';
        secondCheck.style.marginLeft = '47.5vw';
        secondCheck.style.marginTop = '-1vw';

        thirdCheck.style.background = '#545454';
        thirdCheck.style.width = '1vw';
        thirdCheck.style.height = '1vw';
        thirdCheck.style.borderRadius = '0.5vw';
        thirdCheck.style.marginLeft = '49.5vw';
        thirdCheck.style.marginTop = '-1vw';

        fourthCheck.style.background = 'black';
        fourthCheck.style.width = '2vw';
        fourthCheck.style.height = '2vw';
        fourthCheck.style.borderRadius = '1vw';
        fourthCheck.style.marginLeft = '51vw';
        fourthCheck.style.marginTop = '-1.5vw';

        fifthCheck.style.background = '#545454';
        fifthCheck.style.width = '1vw';
        fifthCheck.style.height = '1vw';
        fifthCheck.style.borderRadius = '0.5vw';
        fifthCheck.style.marginLeft = '53.5vw';
        fifthCheck.style.marginTop = '-1.5vw';

    } else if (num == 3) {
        mainBlock.style.backgroundImage = "url('img/galleryThird.jpg')";
        
        firstCheck.style.background = '#545454';
        firstCheck.style.width = '1vw';
        firstCheck.style.height = '1vw';
        firstCheck.style.borderRadius = '0.5vw';
        firstCheck.style.marginLeft = '45.5vw';
        firstCheck.style.marginTop = '40vh';

        secondCheck.style.background = '#545454';
        secondCheck.style.width = '1vw';
        secondCheck.style.height = '1vw';
        secondCheck.style.borderRadius = '0.5vw';
        secondCheck.style.marginLeft = '47.5vw';
        secondCheck.style.marginTop = '-1vw';

        thirdCheck.style.background = 'black';
        thirdCheck.style.width = '2vw';
        thirdCheck.style.height = '2vw';
        thirdCheck.style.borderRadius = '1vw';
        thirdCheck.style.marginLeft = '49vw';
        thirdCheck.style.marginTop = '-1.5vw';

        fourthCheck.style.background = '#545454';
        fourthCheck.style.width = '1vw';
        fourthCheck.style.height = '1vw';
        fourthCheck.style.borderRadius = '0.5vw';
        fourthCheck.style.marginLeft = '51.5vw';
        fourthCheck.style.marginTop = '-1.5vw';
       
        fifthCheck.style.background = '#545454';
        fifthCheck.style.width = '1vw';
        fifthCheck.style.height = '1vw';
        fifthCheck.style.borderRadius = '0.5vw';
        fifthCheck.style.marginLeft = '53.5vw';
        fifthCheck.style.marginTop = '-1vw';

    } else if (num == 2) {
        mainBlock.style.backgroundImage = "url('img/gallerySecond.jpg')";
        
        firstCheck.style.background = '#545454';
        firstCheck.style.width = '1vw';
        firstCheck.style.height = '1vw';
        firstCheck.style.borderRadius = '0.5vw';
        firstCheck.style.marginLeft = '45.5vw';
        firstCheck.style.marginTop = '40vh';

        secondCheck.style.background = 'black';
        secondCheck.style.width = '2vw';
        secondCheck.style.height = '2vw';
        secondCheck.style.borderRadius = '1vw';
        secondCheck.style.marginLeft = '47vw';
        secondCheck.style.marginTop = '-1.5vw';

        thirdCheck.style.background = '#545454';
        thirdCheck.style.width = '1vw';
        thirdCheck.style.height = '1vw';
        thirdCheck.style.borderRadius = '0.5vw';
        thirdCheck.style.marginLeft = '49.5vw';
        thirdCheck.style.marginTop = '-1.5vw';

        fourthCheck.style.background = '#545454';
        fourthCheck.style.width = '1vw';
        fourthCheck.style.height = '1vw';
        fourthCheck.style.borderRadius = '0.5vw';
        fourthCheck.style.marginLeft = '51.5vw';
        fourthCheck.style.marginTop = '-1vw';
       
        fifthCheck.style.background = '#545454';
        fifthCheck.style.width = '1vw';
        fifthCheck.style.height = '1vw';
        fifthCheck.style.borderRadius = '0.5vw';
        fifthCheck.style.marginLeft = '53.5vw';
        fifthCheck.style.marginTop = '-1vw';

    } else if (num == 1) {
        mainBlock.style.backgroundImage = "url('img/galleryFirst.jpg')";
        
        firstCheck.style.background = 'black';
        firstCheck.style.width = '2vw';
        firstCheck.style.height = '2vw';
        firstCheck.style.borderRadius = '1vw';
        firstCheck.style.marginLeft = '45vw';
        firstCheck.style.marginTop = '39vh';

        secondCheck.style.background = '#545454';
        secondCheck.style.width = '1vw';
        secondCheck.style.height = '1vw';
        secondCheck.style.borderRadius = '0.5vw';
        secondCheck.style.marginLeft = '47.5vw';
        secondCheck.style.marginTop = '-1.5vw';
        
        thirdCheck.style.background = '#545454';
        thirdCheck.style.width = '1vw';
        thirdCheck.style.height = '1vw';
        thirdCheck.style.borderRadius = '0.5vw';
        thirdCheck.style.marginLeft = '49.5vw';
        thirdCheck.style.marginTop = '-1vw';

        fourthCheck.style.background = '#545454';
        fourthCheck.style.width = '1vw';
        fourthCheck.style.height = '1vw';
        fourthCheck.style.borderRadius = '0.5vw';
        fourthCheck.style.marginLeft = '51.5vw';
        fourthCheck.style.marginTop = '-1vw';
       
        fifthCheck.style.background = '#545454';
        fifthCheck.style.width = '1vw';
        fifthCheck.style.height = '1vw';
        fifthCheck.style.borderRadius = '0.5vw';
        fifthCheck.style.marginLeft = '53.5vw';
        fifthCheck.style.marginTop = '-1vw';

    }

    timerId = setInterval(sendNextForm, interval);
}