//Функция поиска факторила числа при помощи рекурсии

function fact(n) {
    if (n != 1) {
        for (var i = 1; i < n; i++) {
            return n * fact(n - i);
        }
    } else {
        return n;
    }
}

console.log(fact(5));