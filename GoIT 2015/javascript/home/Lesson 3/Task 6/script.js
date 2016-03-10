function pow(x, n) {
    for (var counter = 2; counter <= n; counter++) {
        x = x * x;
    }
    return x;
}


console.log(pow(3, 2));