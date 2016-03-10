//Создайте фунцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.

function filterRange(array, a, b) {
    var filtered = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= a && array[i] <= b) {
            filtered.push(array[i]);
        }
    }
    return filtered;
}

var arr = [5, 7, 4, 8, 3, 0];

console.log(filterRange(arr, 3, 5));