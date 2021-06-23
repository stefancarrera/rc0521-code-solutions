const fs = require('fs');
const note = process.argv[2].toString() + '\n';

fs.writeFile('./note.txt', note, err => {
  if (err) throw err;
});
