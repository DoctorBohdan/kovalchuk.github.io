//Сумма чисел от х до 1

function sumTo(x) {
    if (x != 1) {
        return x + sumTo(x - 1);
    } else {
        return x;
    }
}

console.log(sumTo(5));