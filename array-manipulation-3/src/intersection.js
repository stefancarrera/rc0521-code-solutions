/* exported intersection */
function intersection(first, second) {
  var sameArr = [];
  for (var f = 0; f < first.length; f++) {
    for (var s = 0; s < second.length; s++) {
      if (first[f] === second[s]) {
        sameArr.push(first[f]);
      }
    }
  }
  return sameArr;
}
