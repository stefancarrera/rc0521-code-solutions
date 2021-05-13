/* exported isVowel */
function isVowel(character) {
  if ((character === 'a') || (character === 'A')) {
    return true;
  } if ((character === 'e') || (character === 'E')) {
    return true;
  } if ((character === 'i') || (character === 'I')) {
    return true;
  } if ((character === 'o') || (character === 'O')) {
    return true;
  } if ((character === 'u') || (character === 'U')) {
    return true;
  } else {
    return false;
  }
}
