const userInput = prompt('Enter your mathematical question for promptulate to answer!').split(' ');

const operation = userInput[0];
const num1 = userInput[1];
const num2 = userInput[2];

const result = calculate(operation, num1, num2);
document.querySelector('#result').innerText = result;