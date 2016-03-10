//Функция вывода рандомного числа в диапазоне от min до max

function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min);
    rand = Math.round(rand);
    return rand;
}

console.log(randomInteger(1, 10));