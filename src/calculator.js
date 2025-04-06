// Modulo per le operazioni matematiche di base
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) throw new Error("Divisione per zero non consentita.");
  return a / b;
};

module.exports = { add, subtract, multiply, divide };