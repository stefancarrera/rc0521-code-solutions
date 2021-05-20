/* exported numVowels */
function numVowels(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if ((string[i] === 'a') || (string[i] === 'A')) {
      counter++;
    } if ((string[i] === 'e') || (string[i] === 'E')) {
      counter++;
    } if ((string[i] === 'i') || (string[i] === 'I')) {
      counter++;
    } if ((string[i] === 'o') || (string[i] === 'O')) {
      counter++;
    } if ((string[i] === 'u') || (string[i] === 'U')) {
      counter++;
    }
  }
  return counter;
}
