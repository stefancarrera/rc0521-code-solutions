/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var wordsly = [];
  for (var i = 0; i < words.length; i++) {
    wordsly.push(words[i] + suffix);
  }
  return wordsly;
}
