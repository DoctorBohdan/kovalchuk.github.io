// Есть массив строк arr. Создайте массив arrSorted — из тех же элементов, но отсортированный. Исходный массив не должен меняться.

var arr = ['HTML', 'JavaScript', 'CSS'];

//var arrSorted = arr.slice();
//arrSorted = arrSorted.sort();

var arrSorted = arr.slice().sort();

console.log(arrSorted);
console.log(arr);