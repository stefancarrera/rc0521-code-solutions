/* exported reverseWords */
function reverseWords(string) {
  var reverse = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  var reverseArr = reverse.split(' ');
  var backwards = [];
  var lastIndex = reverseArr.length - 1;
  for (var x = lastIndex; x >= 0; x--) {
    backwards.push(reverseArr[x]);
  }
  return backwards.join(' ');
}
