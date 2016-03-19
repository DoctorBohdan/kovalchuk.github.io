var calculator = {
    a: null,
    b: null,
    read: function () {
        this.a = +prompt('Веддите числ a:');
        this.b = +prompt('Веддите числ b:');
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());