/* exported capitalize */
function capitalize(string) {
  var word = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    word += string[i].toLowerCase();
  }
  return word;
}
