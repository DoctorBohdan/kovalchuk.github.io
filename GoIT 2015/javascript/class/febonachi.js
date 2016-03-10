//Функция вычисляющая число Фибоначчи при помощи рекурсии, подвисает при больших значения

//function fib(n){
//    if (n <= 1){
//        return n;
//    } else {
//        fib(n - 1) + fib(n - 2);
//    }
//}
//
//console.log(fib(3));


//При помощи цикла for

function fib(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));