var $phrase = document.querySelectorAll('span');
var currentLetter = 'currentLetter';
var typed = 'typed';
var misTyped = 'misTyped';
var countPress = 0;

window.addEventListener('keydown', function (event) {
  if (countPress < $phrase.length) {
    if (event.key === $phrase[countPress].textContent) {
      $phrase[countPress].className = typed;
      if (countPress < $phrase.length - 1) {
        $phrase[countPress + 1].className = currentLetter;
      }
      countPress++;
    } else {
      $phrase[countPress].className = misTyped;
    }
  }
});
