var
firstCircle = document.getElementById('firstCircleStat'),
secondCircle = document.getElementById('secondCircleStat'),
thirdCircle = document.getElementById('thirdCircleStat'),
secondPunktir = document.getElementById('secondCirclePunktir'),
thirdPunktir = document.getElementById('thirdCirclePunktir'),
firstCircleText = document.getElementById('firstCircleText'),
secondCircleText = document.getElementById('secondCircleText'),
thirdCircleText = document.getElementById('thirdCircleText');

firstCircleText.addEventListener('mouseover', function() {statisticConnect('firstCircleStat');});
firstCircleText.addEventListener('mouseleave', function() {statisticDisconnect('firstCircleStat');});
secondCircleText.addEventListener('mouseover', function() {statisticConnect('secondCircleStat');});
secondCircleText.addEventListener('mouseleave', function() {statisticDisconnect('secondCircleStat');});
thirdCircleText.addEventListener('mouseover', function() {statisticConnect('thirdCircleStat');});
thirdCircleText.addEventListener('mouseleave', function() {statisticDisconnect('thirdCircleStat');});

firstCircle.addEventListener('mouseover', function() {statisticConnect('firstCircleText');});
firstCircle.addEventListener('mouseleave', function() {statisticDisconnect('firstCircleText');});
secondCircle.addEventListener('mouseover', function() {statisticConnect('secondCircleText');});
secondCircle.addEventListener('mouseleave', function() {statisticDisconnect('secondCircleText');});
thirdCircle.addEventListener('mouseover', function() {statisticConnect('thirdCircleText');});
thirdCircle.addEventListener('mouseleave', function() {statisticDisconnect('thirdCircleText');});

function statisticConnect(id) {
    switch(id) {

        case 'firstCircleStat':
            document.getElementById(id).style.width = '17vw';
            document.getElementById(id).style.height = '17vw';
            document.getElementById(id).style.borderRadius = '8.5vw';
            document.getElementById(id).style.marginLeft = '14vw';
            document.getElementById(id).style.marginTop = '0vw';
            document.getElementById('secondCircleStat').style.marginTop = '-5.5vw';
            document.getElementById('secondCircleText').style.marginTop = '2.75vw';
            document.getElementById('firstCircleText').style.width = '31vw';
            document.getElementById('firstCircleText').style.height = '7.5vw';
            document.getElementById('firstCircleText').style.marginLeft = '7.5vw';
            document.getElementById('firstCircleText').style.marginTop = 'calc(2.75vw - 0.01px)';
        break;

        case 'secondCircleStat':
            document.getElementById(id).style.width = '12vw';
            document.getElementById(id).style.height = '12vw';
            document.getElementById(id).style.borderRadius = '6vw';
            document.getElementById(id).style.marginLeft = '36vw';
            document.getElementById(id).style.marginTop = '-5.5vw';
            document.getElementById('secondCirclePunktir').style.marginTop = '-16vw';
            secondPunktir.style.backgroundImage = 'url(../img/punktir6.png)';
            document.getElementById('thirdCircleText').style.marginTop = '5.75vw';
            document.getElementById('secondCircleText').style.width = '31vw';
            document.getElementById('secondCircleText').style.height = '7.5vw';
            document.getElementById('secondCircleText').style.marginTop = '2.75vw';

        break;

        case 'thirdCircleStat':
            document.getElementById(id).style.width = '10vw';
            document.getElementById(id).style.height = '10vw';
            document.getElementById(id).style.borderRadius = '5vw';
            document.getElementById(id).style.marginLeft = '23.5vw';
            document.getElementById(id).style.marginTop = '4.5vw';
            document.getElementById('thirdCirclePunktir').style.marginTop = '-18vw';
            secondPunktir.style.backgroundImage = 'url(../img/punktir6.png)';
            thirdPunktir.style.backgroundImage = 'url(../img/punktir6.png)';
            document.getElementById('thirdCircleText').style.width = '31vw';
            document.getElementById('thirdCircleText').style.height = '7.5vw';
            document.getElementById('thirdCircleText').style.marginLeft = '2.5vw';
            document.getElementById('thirdCircleText').style.marginTop = '5.75vw';
            
        break;
    
        case 'firstCircleText':
            document.getElementById(id).style.width = '31vw';
            document.getElementById(id).style.height = '7.5vw';
            document.getElementById(id).style.marginLeft = '7.5vw';
            document.getElementById(id).style.marginTop = 'calc(2.75vw - 0.01px)';
            document.getElementById('secondCircleStat').style.marginTop = '-5.5vw';
            document.getElementById('secondCircleText').style.marginTop = '2.75vw';
            document.getElementById('firstCircleStat').style.width = '17vw';
            document.getElementById('firstCircleStat').style.height = '17vw';
            document.getElementById('firstCircleStat').style.borderRadius = '8.5vw';
            document.getElementById('firstCircleStat').style.marginLeft = '14vw';
            document.getElementById('firstCircleStat').style.marginTop = '0';
        break;

        case 'secondCircleText':
            document.getElementById(id).style.width = '31vw';
            document.getElementById(id).style.height = '7.5vw';
            document.getElementById(id).style.marginTop = '2.75vw';
            document.getElementById('secondCirclePunktir').style.marginTop = '-16vw';
            document.getElementById('secondCirclePunktir').style.backgroundImage = 'url(../img/punktir6.png)';
            document.getElementById('thirdCircleText').style.marginTop = '5.75vw';
            document.getElementById('secondCircleStat').style.width = '12vw';
            document.getElementById('secondCircleStat').style.height = '12vw';
            document.getElementById('secondCircleStat').style.borderRadius = '6vw';
            document.getElementById('secondCircleStat').style.marginLeft = '36vw';
            document.getElementById('secondCircleStat').style.marginTop = '-5.5vw';
        break;

        case 'thirdCircleText':
            document.getElementById(id).style.width = '31vw';
            document.getElementById(id).style.height = '7.5vw';
            document.getElementById(id).style.marginLeft = '2.5vw';
            document.getElementById(id).style.marginTop = '5.75vw';
            document.getElementById('secondCirclePunktir').style.backgroundImage = 'url(../img/punktir6.png)';
            document.getElementById('thirdCirclePunktir').style.backgroundImage = 'url(../img/punktir6.png)';
            document.getElementById('thirdCirclePunktir').style.marginTop = '-18vw';
            document.getElementById('thirdCircleStat').style.width = '10vw';
            document.getElementById('thirdCircleStat').style.height = '10vw';
            document.getElementById('thirdCircleStat').style.borderRadius = '5vw';
            document.getElementById('thirdCircleStat').style.marginLeft = '23.5vw';
            document.getElementById('thirdCircleStat').style.marginTop = '4.5vw';
        break;

    }
}

function statisticDisconnect(id) {
    switch(id) {

        case 'firstCircleStat':
            document.getElementById(id).style.width = '15vw';
            document.getElementById(id).style.height = '15vw';
            document.getElementById(id).style.borderRadius = '7.5vw';
            document.getElementById(id).style.marginLeft = '15vw';
            document.getElementById(id).style.marginTop = '1vw';
            document.getElementById('secondCircleStat').style.marginTop = '-4.5vw';
            document.getElementById('secondCircleText').style.marginTop = '3vw';
            document.getElementById('firstCircleText').style.width = '30vw';
            document.getElementById('firstCircleText').style.height = '7vw';
            document.getElementById('firstCircleText').style.marginLeft = '8vw';
            document.getElementById('firstCircleText').style.marginTop = 'calc(3vw - 0.01px)';
        break;

        case 'secondCircleStat':
            document.getElementById(id).style.width = '10vw';
            document.getElementById(id).style.height = '10vw';
            document.getElementById(id).style.borderRadius = '5vw';
            document.getElementById(id).style.marginLeft = '37vw';
            document.getElementById(id).style.marginTop = '-4.5vw';
            document.getElementById('secondCirclePunktir').style.marginTop = '-15vw';
            secondPunktir.style.backgroundImage = 'url(../img/punktir.png)';
            document.getElementById('thirdCircleText').style.marginTop = '6vw';
            document.getElementById('secondCircleText').style.width = '30vw';
            document.getElementById('secondCircleText').style.height = '7vw';
            document.getElementById('secondCircleText').style.marginTop = '3vw';

        break;

        case 'thirdCircleStat':
            document.getElementById(id).style.width = '8vw';
            document.getElementById(id).style.height = '8vw';
            document.getElementById(id).style.borderRadius = '4vw';
            document.getElementById(id).style.marginLeft = '24.5vw';
            document.getElementById(id).style.marginTop = '5.5vw';
            document.getElementById('thirdCirclePunktir').style.marginTop = '-17vw';
            secondPunktir.style.backgroundImage = 'url(../img/punktir.png)';
            thirdPunktir.style.backgroundImage = 'url(../img/punktir.png)';
            document.getElementById('thirdCircleText').style.width = '30vw';
            document.getElementById('thirdCircleText').style.height = '7vw';
            document.getElementById('thirdCircleText').style.marginLeft = '3vw';
            document.getElementById('thirdCircleText').style.marginTop = '6vw';

        break;

        case 'firstCircleText':
            document.getElementById(id).style.width = '30vw';
            document.getElementById(id).style.height = '7vw';
            document.getElementById(id).style.marginLeft = '8vw';
            document.getElementById(id).style.marginTop = 'calc(3vw - 0.01px)';
            document.getElementById('secondCircleStat').style.marginTop = '-4.5vw';
            document.getElementById('secondCircleText').style.marginTop = '3vw';
            document.getElementById('firstCircleStat').style.width = '15vw';
            document.getElementById('firstCircleStat').style.height = '15vw';
            document.getElementById('firstCircleStat').style.borderRadius = '7.5vw';
            document.getElementById('firstCircleStat').style.marginLeft = '15vw';
            document.getElementById('firstCircleStat').style.marginTop = '1vw';
        break;

        case 'secondCircleText':
            document.getElementById(id).style.width = '30vw';
            document.getElementById(id).style.height = '7vw';
            document.getElementById(id).style.marginTop = '3vw';
            document.getElementById('secondCirclePunktir').style.marginTop = '-15vw';
            document.getElementById('secondCirclePunktir').style.backgroundImage = 'url(../img/punktir.png)';
            document.getElementById('thirdCircleText').style.marginTop = '6vw';
            document.getElementById('secondCircleStat').style.width = '10vw';
            document.getElementById('secondCircleStat').style.height = '10vw';
            document.getElementById('secondCircleStat').style.borderRadius = '5vw';
            document.getElementById('secondCircleStat').style.marginLeft = '37vw';
            document.getElementById('secondCircleStat').style.marginTop = '-4.5vw';
        break;

        case 'thirdCircleText':
            document.getElementById(id).style.width = '30vw';
            document.getElementById(id).style.height = '7vw';
            document.getElementById(id).style.marginLeft = '3vw';
            document.getElementById(id).style.marginTop = '6vw';
            document.getElementById('secondCirclePunktir').style.backgroundImage = 'url(../img/punktir.png)';
            document.getElementById('thirdCirclePunktir').style.backgroundImage = 'url(../img/punktir.png)';
            document.getElementById('thirdCirclePunktir').style.marginTop = '-17vw';
            document.getElementById('thirdCircleStat').style.width = '8vw';
            document.getElementById('thirdCircleStat').style.height = '8vw';
            document.getElementById('thirdCircleStat').style.borderRadius = '4vw';
            document.getElementById('thirdCircleStat').style.marginLeft = '24.5vw';
            document.getElementById('thirdCircleStat').style.marginTop = '5.5vw';
        break;

    }
}
