const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(a) {
  return a.reduce((acc, i) => acc + i, 0);
};

const multiply = function(a) {
  return a.reduce((acc, i) => acc * i);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
	let fact = 1;
  for(i = fact; i <= a ; i++) {
    fact *= i;
  }
  return fact;
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
