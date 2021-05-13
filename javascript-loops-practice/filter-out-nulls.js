/* exported filterOutNulls */
function filterOutNulls(values) {
  var noNull = [];
  var onlyNull = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] === null) {
      onlyNull.push(values[i]);
    } else {
      noNull.push(values[i]);
    }
  }
  return noNull;
}
