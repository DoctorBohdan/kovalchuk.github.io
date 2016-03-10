// Порядок сортировки от большего к меньшему

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}

var arr = [1, 2, 15, 5, -1, 4];

arr.sort(compareNumeric);

console.log(arr);


// Короткая запись, через анонимную функцию

var arr = [1, 2, 15, 5, -1, 4];

arr.sort(function (a, b) {
    return a - b //b - a обратный порядок
});

console.log(arr);

// Сортировка при наличии в массиве "строк"

var arr = [2, 45, 'kolbasa', 5, 'string', 9, -4, 'Leo', 'jornal', 55, 48];

arr.sort(function (a, b) {
    if (+a && +b) {
        return a - b;
    } else if (+b) {
        return -1;
    } else {
        return 1;
    }
});

console.log(arr);