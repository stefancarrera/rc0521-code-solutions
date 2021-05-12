/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  var underFive = (number < 5);
  return underFive;
}

function isEven(number) {
  var even = ((number % 2) === 0);
  return even;
}

function startsWithJ(string) {
  var j = (string[0] === 'J');
  return j;
}

function isOldEnoughToDrink(person) {
  var drinkingAge = (person.age >= 21);
  return drinkingAge;
}

function isOldEnoughToDrive(person) {
  var drivingAge = (person.age >= 16);
  return drivingAge;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if ((pH < 7) && (pH >= 0)) {
    return 'acid';
  } if ((pH <= 14) && (pH > 7)) {
    return 'base';
  } if (pH === 7) {
    return 'neutral';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    return "We're the warner brothers!";
  } if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
