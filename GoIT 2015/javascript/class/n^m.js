//Функция возведения x в степень n

function pow(x, n) {
    for (var counter = 2; counter <= n; counter++) {
        x = x * x;
    }
    return x;
}


console.log(pow(3, 2));

//Функция возведения x в степень n при помощи рекурсии

function pow(x, n) {
    if (n != 1) {
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}
console.log(pow(3, 2));