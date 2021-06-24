const fs = require('fs');
const data = require('./data.json');
const action = process.argv[2];
const input = process.argv[3];
const updateEntry = process.argv[4];

switch (action) {
  case 'read':
    console.log('Current Notes:' + '\n');
    for (const noteId in data.notes) {
      console.log(noteId + ':' + ' ' + data.notes[noteId]);
    }
    break;
  case 'new':
    data.notes[data.nextId++] = input;
    updateNotes();
    break;
  case 'delete':
    if (input in data.notes) {
      delete data.notes[input];
      updateNotes();
      console.log('This note has been delete, to see the changes please use the read action!');
    } else {
      console.log("This id doesn't exist, please try again.");
    }
    break;
  case 'update':
    if (input in data.notes) {
      data.notes[input] = updateEntry;
      updateNotes();
      console.log('This note has been updated, to see the changes please use the read action!');
    } else {
      console.log("This id dosen't exist, please try again.");
    }
    break;
  default:
    console.log("Don't know where to start? Trying using 'read' to read your current notes, 'new' to create a new post, 'update' and the note number to change an entry, and 'delete' and the note number to delete an entry.");
}

function updateNotes() {
  fs.writeFile('data.json', JSON.stringify(data, null, 2) + '\n', err => {
    if (err) throw err;
  });
}
