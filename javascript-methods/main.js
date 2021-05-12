var x = 5;
var n = 6;
var z = 18;

var maximumValue = Math.max(x, n, z);
console.log('the value of maximumValue', maximumValue);

var heroes = ['Spider-Man', 'Captain America', 'Nova', 'Daredevil'];
var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
var randomIndex = Math.floor(randomNumber);
console.log('the value of randomIndex is', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Our random hero is,', randomHero);

var library = [
  {
    title: 'American Gods',
    author: 'Neil Gaiman'
  },
  {
    title: 'Brave Story',
    author: 'Miyuki Miyabe'
  },
  {
    title: 'The Nasty Bits',
    author: 'Anthony Bourdain'
  }
];

var lastBook = library.pop();
console.log('The last book is', lastBook);
var firstBook = library.shift();
console.log('The first book is', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('The library is', library);

var fullName = 'Stefan Carrera';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName is', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName', sayMyName);
