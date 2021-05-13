/* exported compact */
function compact(array) {
  var noFalsy = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      noFalsy.push(array[i]);
    }
  }
  return noFalsy;
}
