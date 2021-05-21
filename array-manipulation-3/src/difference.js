/* exported difference */
function difference(first, second) {
  var difference = first.filter(i => !second.includes(i)).concat(second.filter(i => !first.includes(i)));
  return difference;
}
