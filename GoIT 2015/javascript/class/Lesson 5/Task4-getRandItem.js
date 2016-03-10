//Написать функцию которая принимает на вход массив и возвращает случайное значение из этого массива.

function getRandItem(array) {
    var max = array.length - 1; //length - 1 потому что начинает считаться с 0 элемента массива
    var rand = Math.floor(Math.random() * (max + 1));
    return array[rand];
}

var arr = [0, 5, 6, 8, 9, 10, 15];

console.log(getRandItem(arr));