var username = prompt("Let's play the sum game. /n Please enter a name:", "Anon");
var firstNum = prompt("Enter the first number:", 0);
var secondNum = prompt("Enter the second number:", 0);

firstNum = parseInt(firstNum)
secondNum = parseInt(secondNum)

var sum = (firstNum + secondNum);
var msg = ('Hi, ' + username + '! The sum of ' + firstNum + ' + ' + secondNum + ' is ' + sum);

var result = document.getElementById('result');
result.textContent = msg;