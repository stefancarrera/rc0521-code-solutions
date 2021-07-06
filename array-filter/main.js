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

function evenNum(num) {
  for (let i = 0; num >= i; i++) {
    if ((num % 2 === 0) || (num === 0)) {
      return true;
    }
  }
}

function overFive(num) {
  for (let i = 5; num > i; i++) {
    if (num > 5) {
      return true;
    }
  }
}

const startWithE = names.filter(word => word[0] === 'E');

function haveD(word) {
  if ((word.includes('D') || word.includes('d'))) {
    return true;
  }
}

console.log('Even Numbers:', numbers.filter(evenNum));
console.log('Numbers Over 5:', numbers.filter(overFive));
console.log('Starts with E:', startWithE);
console.log('Has a D/d:', names.filter(haveD));
