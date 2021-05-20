/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = [];
  for (var i of string.split(' ')) {
    words.push(i[0].toUpperCase() + i.slice(1).toLowerCase());
  }
  return words.join(' ');
}
