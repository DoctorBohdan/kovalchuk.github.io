/* Задание: Создайте функцию-конструктор Box (коробка) для создания объекта со свойствами. */

function Box(height, width, depth, material) {
    this.height = height;
    this.width = width;
    this.depth = depth;
    this.material = material;
}

Box.prototype.volume = function () {
    return this.height * this.width * this.depth;
}

Box.prototype.equals = function (box) {
    if (this.material === box.material) {
        return true;
    }
    return false;
}

Box.prototype.compareTo = function (box) {
    return this.volume() - box.volume();
}

var box1 = new Box(10, 20, 5, 'plastic');
var box2 = new Box(15, 25, 10, 'plastic');
var box3 = new Box(15, 25, 10, 'wood');

box1.compareTo(box2) > 0 ? 'Box1 > Box2' : 'Box1 < Box2';

/* Задание 1: Создайте функцию конструктор, которая создает объект со свойством экземпляра, 
свойством функции-конструктора, с методом экземпляра и методом функции-конструктора. */

function Car(speed) {
    this.speed = speed;

    this.getColor = function (color) {
        return this.color = color;
    }
}

Car.WeelsCount = 4;
Car.staticMethod = function () {
    alert('Vrrrr');
}
Car.prototype.run = function () {
    return this.speed * 2;
}

var car = new Car(120);
car.getColor('blue');

car.run();

/* Задание 2: Разработайте функцию-конструктор, которая будет создавать объект Human (человек). 
Создайте массив объектов и реализуйте функцию, которая будет сортировать элементы массива по значению
свойства Age по возрастанию или по убыванию. */

function Human(name, age) {
    this.name = name;
    this.age = age;
}

var humans = [];

var Bohdan = new Human("Bohdan", 27);
var Ostap = new Human("Ostap", 26);
var Potap = new Human("Potap", 28);
var Vasya = new Human("Vasya", 30);

humans.push(Bohdan, Ostap, Potap, Vasya);

humans.sort(function (n, m) {
    var f = n.age;
    var s = m.age;
    if (f < s) {
        return -1;
    } else if (f > s) {
        return 1;
    } else {
        return 0;
    }
});


/* Задание 3: Разработайте функцию-конструктор, которая будет создавать объект Human (человек), 
добавьте на свое усмотрение свойства и методы в этот объект. Подумайте, какие методы и свойства 
следует сделать уровня экземпляра, а какие уровня функции-конструктора. */
function Human(name) {
    this.name = name;
}

function Worker(name) {
    this.name = name;
    this.speciality = "FrontEnd developer";
}

Human.prototype.talk = function () {
    alert('My name is ' + this.name);
}

Human.nationality = function (whereFrom) {
    switch (whereFrom) {
        case "asia":
            return "Asian";
            break;
        case "europe":
            return "Europian";
            break;
        case "arabic":
            return "Arabic";
            break;
        case "america":
            return "American";
            break;
        case "africa":
            return "African";
            break;
        default:
            return "Undefiend";
            break;
    }
}

var human = new Human("name");

var Bohdan = new Worker("Bohdan");
Bohdan.talk();


/* Задание 4: Создайте пример демонстрирующий назначение метода toString(). */

function Box(height, width, depth, material) {
    this.height = height;
    this.width = width;
    this.depth = depth;
    this.material = material;
}

Box.prototype.volume = function () {
    return this.height * this.width * this.depth;
}

Box.prototype.toString = function () {
    return "Ящик с объемом: " + this.volume();
}

Box.prototype.valueOf = function () {
    return this.volume();
}

Box.prototype.name = "BOX";

var box = new Box(10, 25, 3, 'wood');

console.log(box.volume());
console.log(box.toString());

console.log(box.hasOwnProperty('width')); //true
console.log(box.hasOwnProperty('name')); //false - свойства Прототипа