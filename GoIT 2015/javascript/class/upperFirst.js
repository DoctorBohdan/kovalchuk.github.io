//Функция, которая возвращает строку с заглавным первым символом

function upperFirst(str) {
    if (str === '') {
        return '';
    } else {
        str = str[0].toUpperCase() + str.substring(1);
        return str;
    }
}

console.log(upperFirst('hello'));
console.log(upperFirst(''));