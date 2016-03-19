// Напишите функцию которая принимает бинарную функцию и вызывает ее с 2-я аргументами

function add(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

function applyf(binaryFunc) { // принимает бинарное название функции add или mul
    return function (x) { // принимает первое число
        return function (y) { // принимает второе число
            return binaryFunc(x)(y);
        };
    };
}

var addf2 = applyf(add);

console.log(addf2(3)(4));
console.log(applyf(mul)(3)(4));