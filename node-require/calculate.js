const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const operator = process.argv[3];
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);

if (operator === 'plus') {
  console.log('Result:', add(num1, num2));
} else if (operator === 'minus') {
  console.log('Result:', subtract(num1, num2));
} else if (operator === 'times') {
  console.log('Result:', multiply(num1, num2));
} else if (operator === 'over') {
  console.log('Result:', divide(num1, num2));
}
