/* exported getWords */
function getWords(string) {
  var empty = [];
  if (string) {
    return string.split(' ');
  } else {
    return empty;
  }
}
