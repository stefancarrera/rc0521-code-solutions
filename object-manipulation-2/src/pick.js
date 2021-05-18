/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var i in source) {
    if ((keys.includes(i)) && (source[i] !== undefined)) {
      newObject[i] = source[i];
    }
  }
  return newObject;
}
