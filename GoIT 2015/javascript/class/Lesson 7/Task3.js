var currentCount = 1; // window {currentCount: 1}

function makeCounter() {
    return function () {
        return currentCount++;
    };
}

var counter = makeCounter();
var counter2 = makeCounter();

console.log(counter()); //1
console.log(counter()); //2
console.log(counter2()); //3
console.log(counter2()); //4



function makeCounter() {
    var currentCount = 1;
    return function () {
        return currentCount++;
    };
}

var counter = makeCounter();
var counter2 = makeCounter();

console.log(counter()); //1
console.log(counter()); //2
console.log(counter2()); //1
console.log(counter2()); //2