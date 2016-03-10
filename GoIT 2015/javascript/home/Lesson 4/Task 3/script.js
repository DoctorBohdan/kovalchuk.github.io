function largeStr(str) {
    if (str.length <= 20) {
        return str;
    } else {
        str = str.slice(0, 20) + '...';
        return str;
    }
}

console.log(largeStr('Hello world, good luck guys'));