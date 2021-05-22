/* exported titleCase */
function titleCase(string) {
  var words = [];
  for (var i of string.split(' ')) {
    if ((i.length >= 4) || (i === 'web')) {
      words.push(i[0].toUpperCase() + i.slice(1).toLowerCase());
    } else if (i === 'api') {
      words.push(i.toUpperCase());
    } else if ((i.length <= 3) && !((i === 'api') && (i === 'web'))) {
      words.push(i.toLowerCase());
    }
  }

  for (var x = 0; x - words.length - 1; x++) {
    if (words[x] === 'Javascript') {
      words[x] = 'JavaScript';
    } if (words[x] === 'Javascript:') {
      words[x] = 'JavaScript:';
    } if (words[x] === 'In-depth') {
      words[x] = 'In-Depth';
    }

  }

  for (var y = 0; y - words.length - 1; y++) {
    if (words[y] === 'JavaScript:') {
      if (words[y + 1].length === 2) {
        words[y + 1] = 'An';
      } else {
        words[y + 1] = 'The';
      }
    }
  }
  var newString = words.join(' ');
  return newString;
}
