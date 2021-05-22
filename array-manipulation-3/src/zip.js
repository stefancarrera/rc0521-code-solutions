/* exported zip */
function zip(first, second) {
  var zipLength = first.length;
  if (first.length <= second.length) {
    zipLength = first.length;
  } else {
    zipLength = second.length;
  }

  var tempArray = [];
  var newArray = [];
  for (var i = 0; i < zipLength; i++) {
    tempArray.push(first[i]);
    tempArray.push(second[i]);
    newArray.push(tempArray);
    tempArray = [];
  }
  return newArray;
}
