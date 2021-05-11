function convertMinutesToSeconds(minutes) {
  var seconds = (minutes * 60);
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('convertMinutesToSeconds(5) result:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

greet('Beavis');

function getArea(width, height) {
  var area = (width * height);
  return area;
}

console.log('getArea(20, 15) result:', getArea(20, 15));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstName(Lelouche, Lamperouge)result:', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('getLastElement result:', getLastElementResult);
