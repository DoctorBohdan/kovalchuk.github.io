var user = {
    name: 'Sergey',
    age: 30,
    gender: 'Male'
};

var keys = Object.keys(user);
console.log(keys);

for (var i = 0; i < keys.length; i++) {
    console.log('Field: ' + keys[i] + ';' + ' Value: ' + user[keys[i]]);
}