function funky(o) {
    o = null;
}

var x = [];

funky(x);
console.log(x); // ссылается на var x, тоесть будет []