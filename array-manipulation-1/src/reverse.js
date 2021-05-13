/* exported reverse */
function reverse(array) {
  var backwards = [];
  var lastIndex = array.length - 1;
  for (var i = lastIndex; i >= 0; i--) {
    backwards.push(array[i]);
  }
  return backwards;
}
