/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {

  if (firstIndex === 0) {
    var first0 = string.slice(firstIndex, (firstIndex + 1));
    var second0 = string.slice(secondIndex, (secondIndex + 1));
    var newWord = second0 + string.slice((firstIndex + 1), (secondIndex)) + first0 + string.slice((secondIndex + 1));
    return newWord;
  } else {
    var first1 = string.slice(firstIndex, (firstIndex + 1));
    var second1 = string.slice(secondIndex, (secondIndex + 1));
    var newWord1 = string.slice(0, firstIndex) + second1 + string.slice((firstIndex + 1), (secondIndex)) + first1 + string.slice((secondIndex + 1));
    return newWord1;
  }

}
