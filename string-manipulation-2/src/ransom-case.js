/* exported ransomCase */
function ransomCase(word) {
  var weirdCaps = '';
  for (var i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      weirdCaps += word[i].toLowerCase();
    } else {
      weirdCaps += word[i].toUpperCase();
    }
  }
  return weirdCaps;
}
