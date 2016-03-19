// Значение this без контекста. Чему будет равен (что выведет) this?

function func() {
    console.log(this); // выведет если браузер [object Window] или если node.js [object global]
}

func();

// если стоит use strict - выведет undefiend.