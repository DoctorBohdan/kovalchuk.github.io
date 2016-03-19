// Напишите функцию которая принимает аргумент и возвращает функцию которая возвращает этот аргумент

function identityf(x) {
    return function () {
        return x;
    };
}

var idf = identityf(3);
console.log(idf());