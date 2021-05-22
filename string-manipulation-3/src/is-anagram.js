/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var first = firstString.split(' ').join('');
  var firstSplit = first.split('');
  var second = secondString.split(' ').join('');
  var secondSplit = second.split('');
  var firstSort = firstSplit.sort();
  var secondSort = secondSplit.sort();
  var anagram = (firstSort.join('') === secondSort.join(''));
  return anagram;

}
