/* exported omit */
function omit(source, keys) {
  var newObject = {};
  for (var i in source) {
    if (!keys.includes(i)) {
      newObject[i] = source[i];
    }
  }
  return newObject;
}
