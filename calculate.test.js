const {
  calculate,
  add,
  subtract,
  multiply,
  divide,
  modulus,
  performCalculation,
} = require('./calculate');


function addTo10(num1, num2) {
  return 10 + num1 + num2;
}

function subtractFrom10(num1, num2) {
  return 10 - num1 - num2;
}

function makeFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

describe('calculate', () => {
  it(`given two strings representing numbers and a string of '+', returns the sum of those numbers`, () => {
    expect(calculate('+', '3', '5')).toBe(8)
  });

  it(`given two strings representing numbers and a string of '-', returns the second number subtracted from the first number`, () => {
    expect(calculate( '-', '3', '5')).toBe(-2)
  });

  it(`given two strings representing numbers and a string of 'x', returns the second number subtracted from the first number`, () => {
    expect(calculate('x', '3', '5')).toBe(15)
  });

  it(`given two strings representing numbers and a string of '/', returns the first number divided by the second number`, () => {
    expect(calculate('/', '15', '5')).toBe(3)
  });

  it(`given two strings representing numbers and a string of '%', returns the result of a modulus operation of the first number by the second number`, () => {
    expect(calculate('%', '15', '4')).toBe(3)
  });

  it(`given a string that doesn't match one of our operations, gives us a nice error message`, () => {
    expect(calculate('2', '3', 'troogle')).toBe(`Sorry, that's not a mathematical operation!`)
  })

  it(`allows for the word 'plus' in addition`, () => {
    expect(calculate('plus', '3', '5')).toBe(8)
  })

  it(`allows for the word 'minus' in subtraction`, () => {
    expect(calculate('minus', '3', '5')).toBe(-2)
  })

  it(`allows for the word 'times' in multiplication`, () => {
    expect(calculate('times', '3', '5')).toBe(15)
  })

  it(`allows for an upper case 'X' in multiplication`, () => {
    expect(calculate('X', '3', '5')).toBe(15)
  })

  it(`allows for the word 'modulus' in a modulus operation`, () => {
    expect(calculate('modulus', '15', '4')).toBe(3)
  })
  
  it(`allows for the shortening 'mod' in a modulus operation`, () => {
    expect(calculate('mod', '15', '4')).toBe(3)
  })
});

describe('add', () => {
  it(`adds two numbers`, () => {
    expect(add(5, 3)).toBe(8)
    expect(add(3, 5)).toBe(8)
    expect(add(3, 8)).toBe(11)
    expect(add(3, -8)).toBe(-5)
  })
});

describe('subtract', () => {
  it(`subtracts the second number from the first`, () => {
    expect(subtract(5, 3)).toBe(2)
    expect(subtract(3, 5)).toBe(-2)
    expect(subtract(3, 8)).toBe(-5)
    expect(subtract(3, -8)).toBe(11)
  })
});

describe('multiply', () => {
  it(`multiplies two numbers`, () => {
    expect(multiply(5, 3)).toBe(15)
    expect(multiply(3, 5)).toBe(15)
    expect(multiply(3, 8)).toBe(24)
    expect(multiply(3, -8)).toBe(-24)
  })
});

describe('divide', () => {
  it(`divides the first number by the second`, () => {
    expect(divide(5, 2)).toBe(2.5)
    expect(divide(3, 5)).toBe(0.6)
    expect(divide(3, 8)).toBe(0.375)
    expect(divide(3, -8)).toBe(-0.375)
  })
});

describe('modulus', () => {
  it(`mods the first number by the second`, () => {
    expect(modulus(5, 3)).toBe(2)
    expect(modulus(3, 5)).toBe(3)
    expect(modulus(3, 8)).toBe(3)
    expect(modulus(3, -8)).toBe(3)
    expect(modulus(-3, -8)).toBe(-3)
    expect(modulus(-8, -3)).toBe(-2)
  })
});


describe('performCalculation', () => {
  it(`gives the second and third values given to the first parameter, a function, and returns the result`, () => {
    expect(performCalculation(addTo10, 5, 2)).toEqual(17);
    expect(performCalculation(subtractFrom10, 5, 2)).toEqual(3);
    expect(performCalculation(makeFullName, 'Not an', 'actual name!')).toEqual('Not an actual name!');
  })
});