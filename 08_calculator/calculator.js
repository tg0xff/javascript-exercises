const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
};

const multiply = function(multiplicands) {
  return multiplicands.reduce((total, multiplicand) => total * multiplicand, 1);
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
