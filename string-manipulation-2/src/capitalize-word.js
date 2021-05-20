/* exported capitalizeWord */
function capitalizeWord(word) {

  if (((word[0] === 'j') || (word[0] === 'J')) && ((word[4] === 's') || (word[4] === 'S'))) {
    return 'JavaScript';
  } else {
    var newWord = word[0].toUpperCase();
    for (var i = 1; i < word.length; i++) {
      newWord += word[i].toLowerCase();
    }
    return newWord;
  }
}
