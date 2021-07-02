const takeAChance = require('./take-a-chance');

const promise = takeAChance('Stefan');

promise.then(value => {
  console.log(value);
}).catch(value => {
  console.log(value);
});
