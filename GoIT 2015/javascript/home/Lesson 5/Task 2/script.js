//Напишите функцию multiplyNumeric которая принимает на вход объект и возвращает объект в котором все числовые значения у свойств умножены на 2

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (!isNaN(parseFloat(obj[key])) && isFinite(obj[key])) obj[key] = obj[key] * 2;
    }
    return obj;
}

var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

console.log(multiplyNumeric(image));