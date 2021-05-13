/* exported initial */
function initial(array) {
  var heads = [];
  var lastIndex = array.length - 1;
  for (var i = 0; i < lastIndex; i++) {
    heads.push(array[i]);
  }
  return heads;
}
