var login = prompt('Введите Логин');
if (login === 'admin') {
    var password = prompt('Введите Пароль');
    if (password === 'passw0rd') {
        alert ('Welcome home!');
    } else if (password !== 'passw0rd') {
        alert ('Wrong password');
    } else {
        allert ('Canceled');
    }
} else if (login !== 'admin') {
    alert ('Access denied');
} else {
    alert ('Canceled');
}