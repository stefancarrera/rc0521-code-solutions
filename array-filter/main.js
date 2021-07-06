const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const overFive = numbers.filter(num => num > 5);

const evenNum = numbers.filter(num => (num % 2 === 0) || (num === 0));

const startWithE = names.filter(word => word[0] === 'E');

const haveD = names.filter(word => (word.includes('D') || word.includes('d')));

console.log('Even numbers:', evenNum);
console.log('Over 5:', overFive);
console.log('Starts with E:', startWithE);
console.log('Has a D/d:', haveD);
