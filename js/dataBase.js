var 
enter = document.getElementById('userDataEnter'),
reg = document.getElementById('userDataRegistr'),
email = document.getElementById('userEmailInput'),
emailCheck = 0,
pass = document.getElementById('userPasswordInput'),
passCheck = 0,
username = document.getElementById('userNameInput'),
nameCheck = 0,
users = [admin = {mail: 'mommy', password: 'daddy', name: 'bobby'}],
usersNum = 1,
error = 0,
passPermit = 0,
userInformation
;

enter.addEventListener('click', function() {enterCheck();});
reg.addEventListener('click', function() {regCheck();});
email.addEventListener('focus', function() {emailEvent();});
pass.addEventListener('focus', function() {passEvent();});
username.addEventListener('focus', function() {nameEvent();});

function emailEvent() {
    if (emailCheck == 0) {
        email.value = '';
    }
    email.style.backgroundColor= 'white';
    email.style.color = 'black';
    emailCheck = 1;

}

function passEvent() {
    if (passCheck == 0) {
        pass.value = '';
    }
    pass.style.backgroundColor= 'white';
    pass.style.color = 'black';
    passCheck = 1;
}

function nameEvent() {
    if (nameCheck == 0) {
        username.value = '';
    }
    username.style.backgroundColor= 'white';
    username.style.color = 'black';
    nameCheck = 1;
}




function regCheck() {

    outer: for (var i = 0; i < users.length; i++) {
        
        if (email.value == users[i].mail) {
            alert('Невозможный или уже существующий логин!');
            error = 1;
            break outer;
        } else if (username.value == users[i].name) {
            alert('Такой ник уже занят!');
            error = 1;
            break outer;
        } else {
            error = 0;
        }

    }

    if (!error) {
        alert('Вы зарегестрированы!');
        users[usersNum] = {mail: email.value, password: pass.value, name: username.value};
        usersNum++;
        error = 0;
    }

}

function enterCheck() {

    outer: for (var i = 0; i < users.length; i++) {
        
        if (users[i].mail == email.value) {
            var needElement = i;
            error = 0;
            break outer;
        } else {
            error = 1;
        }

    }

    if (error) {
        email.style.backgroundColor = 'rgb(209, 61, 61)';
        alert('Неверный логин!');
    }

    if (users[needElement].password != pass.value) {
        email.style.backgroundColor = 'rgb(58, 207, 83)';
        pass.style.backgroundColor = 'rgb(209, 61, 61)';
        alert('Неверный пароль!');
        error = 1;
    } else {
        pass.style.backgroundColor = 'rgb(58, 207, 83)';
    }

    if (users[needElement].name != username.value) {
        if (!error) pass.style.backgroundColor = 'rgb(58, 207, 83)';
        username.style.backgroundColor = 'rgb(209, 61, 61)';
        alert('Неверный никнейм!');
        error = 1;
    } else {
        username.style.backgroundColor = 'rgb(58, 207, 83)';
    }

    if (!error) {
        email.style.backgroundColor = 'white';
        pass.style.backgroundColor = 'white';
        username.style.backgroundColor = 'white';
        email.value = '';
        pass.value = '';
        username.value = '';
        alert('Вы вошли!');
        passPermit = 1;
        userInformation = users[needElement];
    }
}