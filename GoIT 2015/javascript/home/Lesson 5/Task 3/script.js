var numbers = [];

while (true) {
    var value = prompt('Pls, enter a number:');
    if (value === '' || value === null || isNaN(value)) break;
    numbers.push(+value);
}

var calc = 0;
for (var i = 0; i < numbers.length; i++) {
    calc = calc + numbers[i];
}

console.log(calc);