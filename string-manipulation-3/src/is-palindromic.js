/* exported isPalindromic */
function isPalindromic(string) {
  var reverse = '';
  var noSpace = string.split(' ').join('');
  for (var i = noSpace.length - 1; i >= 0; i--) {
    reverse += noSpace[i];
  }
  if (noSpace === reverse) {
    return true;
  } else {
    return false;
  }
}
