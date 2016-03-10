//Проверка на наличие ключей в объекте

function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

var todoList = {};
console.log(isEmpty(todoList));

todoList['homework'] = 'lesson5';
console.log(isEmpty(todoList));