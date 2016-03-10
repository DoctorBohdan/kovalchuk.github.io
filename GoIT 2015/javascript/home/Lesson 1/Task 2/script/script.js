var userName = prompt('What is your name?', 'User');
alert(userName);
var trueName = 'Your name is ' + userName + '. Are you sure?';
var trueName = confirm(trueName);
console.log(trueName);