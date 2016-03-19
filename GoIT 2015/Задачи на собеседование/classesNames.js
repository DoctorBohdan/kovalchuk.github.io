// Необходимо получить массив с уникальными именами классов, отсортироваными по частоте использования. Если класс встречается много раз, он идет в начале массива и наоборот. Если есть классы которые встречаются одинаковое количество раз, то нам все равно в каком порядке они будут идти.

var classesNames = ['header', 'menu', 'menu__item', 'menu__item', 'menu__item', 'link', 'link', 'link', 'link_type_red', 'footer', 'tabs', 'tab__item', 'tab__item', 'tab__item', 'tab__item', 'img'];

// Поместим все в объект, где ключем у нас будет строка, тоесть название класса, и количество его использования.

var classesObj = {};
classesNames.forEach(function (elem) {
    if (!classesObj[elem]) {
        classesObj[elem] = 1;
    } else {
        classesObj[elem] += 1;
    }
});

console.log(classesObj);

// Получим следующеее, список ключей и сколько раз они встретились.

//{header: 1,
// menu: 1,
// menu__item: 3,
// link: 2,
// link ...}

// Дальше нам надо преобразовать в массив и отсортировать его.

var result = [];
for (var className in classesObj) {
    result.push(className);
}

console.log(result);

// Получаем массив уникальных className, но еще не отсортированных.

result.sort(function (a, b) {
    return classesObj[b] - classesObj[a]; // Подставляем количество использований, а сортируются элементы. Обратный порядок, ибо от большего к меньшему.
});

console.log(result);

// Получаем уже отсортированный массив.