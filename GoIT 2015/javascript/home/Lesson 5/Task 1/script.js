//Код который выведет сотрудника который выполнил больше всех задач

var taskCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function getWorker(obj) {
    var counter = 0;
    var maxKey = '';
    for (var key in obj) {
        if (counter < obj[key]) {
            counter = obj[key];
            maxKey = key;
        }
    }
    return maxKey;
}


console.log(getWorker(taskCompleted));