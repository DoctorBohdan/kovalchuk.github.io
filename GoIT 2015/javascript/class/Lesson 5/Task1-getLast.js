//Написать функцию которая принимает на вход массив и возвращает последний элемент массива

function getLast(array) {
    return array[array.length - 1];
}

var arr = [1, 5, 36];

console.log(getLast(arr));