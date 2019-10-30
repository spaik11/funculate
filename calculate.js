function calculate(operation, firstNum, secondNum) {
  const num1 = Number(firstNum);
  const num2 = Number(secondNum);
  
  const isAddition = operation === '+'
    || operation === 'plus';
  
  const isSubtraction = operation === '-'
    || operation === 'minus';
    
  const isMultiplication = operation === '*'
    || operation.toLowerCase() === 'x'
    || operation === 'times';
    
  const isDivision = operation === '/';
    
  const isModulus = operation === '%'
    || operation === 'mod'
    || operation === 'modulus';
  
  if (isAddition) {
    return performCalculation(add, num1, num2)
  } else if (isSubtraction) {
    return performCalculation(subtract, num1, num2)
  } else if (isMultiplication) {
    return performCalculation(multiply, num1, num2)
  } else if (isDivision) {
    return performCalculation(divide, num1, num2)
  } else if (isModulus) {
    return performCalculation(modulus, num1, num2)
  } else {
    return `Sorry, that's not a mathematical operation!`
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function modulus(num1, num2) {
  return num1 % num2;
}

function performCalculation(op, num1, num2) {
  return op(num1, num2);
}


module.exports = {
  calculate,
  add,
  subtract,
  multiply,
  divide,
  modulus,
  performCalculation,
};