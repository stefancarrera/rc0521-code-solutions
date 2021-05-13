/* exported filterOutStrings */
function filterOutStrings(values) {
  var onlyNum = [];
  var onlyStr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'string') {
      onlyStr.push(values[i]);
    } else {
      onlyNum.push(values[i]);
    }
  }
  return onlyNum;
}
