/* exported union */
function union(first, second) {
  var newArray = first.concat(second);
  var unionArray = [...new Set(newArray)];
  return unionArray;
}
