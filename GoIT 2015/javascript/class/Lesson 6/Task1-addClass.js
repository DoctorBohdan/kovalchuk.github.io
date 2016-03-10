// В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом. Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет. Ваша функция не должна добавлять лишних пробелов.

var obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    var classes = obj.className.split(' ');
    if (classes.indexOf(cls) == -1) {
        classes.push(cls);
    }
    obj.className = classes.join(' ');
}

addClass(obj, "open");
addClass(obj, "new");
addClass(obj, "open");


console.log(obj.className);


// Подробное решение без indexOf()

function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];
    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return; // класс уже есть
    }
    classes.push(cls); // добавить
    obj.className = classes.join(' '); // и обновить свойство
}
var obj = {
    className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');

console.log(obj.className);