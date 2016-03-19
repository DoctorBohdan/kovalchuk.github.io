//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).

//function unique(arr) {
//    var result = [];
//
//    nextInput:
//        for (var i = 0; i < arr.length; i++) {
//            var str = arr[i]; // для каждого элемента
//            for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
//                if (result[j] == str) continue nextInput; // если да, то следующий
//            }
//            result.push(str);
//        }
//    return result;
//}

function unique(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }
    return Object.keys(obj); // или собрать ключи перебором для IE8-
}

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()'];

console.log(unique(strings));