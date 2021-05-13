/* exported getIndexes */
function getIndexes(array) {
  var indexes = [];
  var currentNumber = 0;
  while (currentNumber < array.length) {
    indexes.push(currentNumber);
    currentNumber++;
  }
  return indexes;
}
