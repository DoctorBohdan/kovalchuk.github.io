//Необходимо отсортировать массив в случайном порядке используя метод sort.

var arr = [1, 2, 3, 4, 5];

function randomSort(a, b) {
    return Math.random() - 0.5;
}

arr.sort(randomSort);

console.log(arr);