// CHAINING. Цепочка вызовов. Есть объект «лестница» ladder. Нужно последовательно вызвать несколько методов объекта. Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой. Такой подход называется «чейнинг» (chaining) и используется, например, во фреймворке jQuery.

var ladder = {
    step: 0,
    up: function () { // вверх по лестнице
        this.step++;
    },
    down: function () { // вниз по лестнице
        this.step--;
    },
    showStep: function () { // вывести текущую ступеньку
        alert(this.step);
    }
};

// Сейчас, вызовы делаются так

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

// А надо сделать, чтобы делались так

ladder.up().up().down().up().down().showStep(); // 1


// РЕШЕНИЕ

var ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
        return this;
    }
}