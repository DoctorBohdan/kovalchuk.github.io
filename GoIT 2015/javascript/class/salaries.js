//Подсчет общей заработной платы работников

var salaries = {
    'junior': 1000,
    'middle': 2500,
    'senior': 3500,
    'lead': 5000
};

function sumSalaries(obj) {
    var result = 0;
    for (var key in obj) {
        result = result + obj[key];
    }
    return result;
}

console.log('Total salaries: ' + sumSalaries(salaries));