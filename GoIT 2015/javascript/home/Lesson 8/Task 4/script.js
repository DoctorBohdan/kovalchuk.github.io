/*Добавить в конструктор Article:
•	Подсчёт общего количества созданных объектов.
•	Запоминание даты последнего созданного объекта.
•	Используйте для этого статические свойства.
Пусть вызов Article.showStats() выводит то и другое.
Использование:*/

function Article() {
    this.created = new Date();

    Article.count++; // увеличиваем счетчик при каждом вызове
    Article.last = this.created; // и запоминаем дату
}
Article.count = 0; // начальное значение
// (нельзя оставить undefined, т.к. Article.count++ будет NaN)

Article.showStats = function () {
    alert('Всего: ' + this.count + ', Последняя: ' + this.last);
};

}

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)