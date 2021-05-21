/* exported unique */
function unique(array) {
  var newArray = [...new Set(array)];
  return newArray;
}
