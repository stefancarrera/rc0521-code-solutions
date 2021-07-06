const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(x => x * 2);
console.log('Doubled:', doubled);

const prices = numbers.map(x => `$${x}.00`);
console.log('Prices:', prices);

const upperCased = languages.map(words => words.toUpperCase());
console.log('Upper Cased:', upperCased);

const firstLetters = languages.map(words => words[0]);
console.log('First Letters:', firstLetters);
