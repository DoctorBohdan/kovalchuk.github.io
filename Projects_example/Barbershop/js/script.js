// Модальное окно входа на сайт

var link = document.querySelector('.login'); // определяем переменные
var popup = document.querySelector('.modal-content');
var close = popup.querySelector('.modal-content-close');
var form = document.querySelector('form');
var login = popup.querySelector('[name = login]');
var password = popup.querySelector('[name = password]');
var storage = localStorage.getItem('login');

link.addEventListener('click', function (event) {
    event.preventDefault(); // отменяет действие по умолчанию, в данном случае, отменяет переход по ссылке заглушке
    popup.classList.add('modal-content-show'); // добавляет класс к модульному окну в HTML после нажатия на Вход
    if (storage) {
        login.value = storage; // если в storage есть запись (введенный ранее логин), то он автоматически подставится в input login
        password.focus(); // фокусируется на поле Пароля, при подстановке значения Логина из хранилища 
    } else {
        login.focus(); // сразу фокусируется на поле ввода Логина при открытии модального окна
    }
});

close.addEventListener('click', function (event) {
    event.preventDefault(); // у div нет действий по умолчанию, но лучше обезапасить, потому что могут в верстке поменять на ссылку в будущем
    popup.classList.remove('modal-content-show'); // удаляем класс у модульного окна после нажатия на крестик
});

form.addEventListener('submit', function (event) {
    if (!(login.value && password.value)) { // если в не введены Логин и Пароль, то отменяется действие submit
        event.preventDefault();
        popup.classList.add('modal-error');
    } else {
        localStorage.setItem('login', login.value); // если все введено, то записываем значение Логина в хранилище
    }
});

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) { // закрытие модального окна по нажатию клавиши ESC, если окно было открыто
        if (popup.classList.contains('modal-content-show')) {
            popup.classList.remove('modal-content-show');
        }
    }
});


// Модальное окно открытия карты

var mapLink = document.querySelector('.open-map');
var mapPopup = document.querySelector('.modal-content-map');
var mapClose = mapPopup.querySelector('.modal-content-close');

mapLink.addEventListener('click', function (event) {
    event.preventDefault();
    mapPopup.classList.add('modal-content-show');
});

mapClose.addEventListener('click', function (event) {
    event.preventDefault();
    mapPopup.classList.remove('modal-content-show');
});

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains('modal-content-show')) {
            mapPopup.classList.remove('modal-content-show');
        }
    }
});