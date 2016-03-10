// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов.

function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result = result + arguments[i];
    }
    return result;
}

console.log(sum(1, 2, 5));