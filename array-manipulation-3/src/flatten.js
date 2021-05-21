/* exported flatten */
function flatten(array) {
  var newArray = [];
  newArray = [].concat.apply([], array);
  return newArray;
}
