// Напишите функцию которая складывает числа из 2-х вызовов

function addf(a) {
    return function (b) {
        return a + b;
    };
}

console.log(addf(3)(4));