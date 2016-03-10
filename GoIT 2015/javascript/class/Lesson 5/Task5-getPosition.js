//Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его позицию, если найдено, или -1, если не найдено.

function getPosition(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}

var number = [1, 5, 8, 9, 1, 4, 8];

console.log(getPosition(number, -8));