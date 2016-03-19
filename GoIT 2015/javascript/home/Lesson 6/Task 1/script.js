// У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами. Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть. P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке.

function removeClass(obj, cls) {
    var classes = obj.className.split(' ');
    for (var i = 0; i < classes.length; i++) {
        if (classes[i] === cls) {
            classes.splice(i, 1);
            i--;
        }
    }
    obj.className = classes.join(' ');
}

var obj = {
    className: 'open menu menu'
};

removeClass(obj, 'menu');

console.log(obj.className);