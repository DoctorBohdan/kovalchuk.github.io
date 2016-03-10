//Написать функцию которая принимает на вход 2 параметра: массив, и элемент (любого типа). Этот элемент нужно добавить в конец массива. Функция должна вернуть массив с добавленным новым элементом.

function pushLastElement(array, item) {
    array.push(item);
    return array;
}

var fruits = ['Apple', 'Orange', 'Lemon'];

console.log(pushLastElement(fruits, 'Banana'));