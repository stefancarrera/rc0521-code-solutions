const express = require('express');
const app = express();
const json = express.json();
const data = require('./data.json');
const notesData = data.notes;
const fs = require('fs');

app.use(json);

app.get('/api/notes', (req, res) => {
  const allNotes = [];
  for (const note in data.notes) {
    allNotes.push(data.notes[note]);
  }
  res.status(200).json(allNotes);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (Number.isInteger(id)) {
    if (!notesData[id]) {
      return res.status(404).json({ error: `There is no note associated with ${id}, please try again.` });
    } else {
      res.status(200).json(notesData[id]);
    }
  } else {
    return res.status(400).json({ error: 'The id entered is not a positive intergar, please try again.' });
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    return res.status(400).json({ error: 'There was no content property detected. Please format your note entry as follows - http POST :3000/api/notes content=*enter your note here*' });
  } else {
    const currentId = data.nextId;
    notesData[data.nextId] = req.body;
    notesData[data.nextId].id = data.nextId++;

    const dataJson = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataJson, 'utf8', err => {
      if (err) {
        throw res.status(500).json({ error: 'An unexpected error occured' });
      } else {
        res.status(201).json(notesData[currentId]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'The id entered is not a positive intergar, please try again.' });
  } else {
    if (!notesData[id]) {
      return res.status(404).json({ error: `There is no note associated with ${id}, please try again.` });
    } else {
      delete notesData[id];
      const dataJson = JSON.stringify(data, null, 2);
      fs.writeFile('./data.json', dataJson, 'utf8', err => {
        if (err) {
          throw res.status(500).json({ error: 'An unexpected error occured' });
        } else {
          res.status(201).json();
        }
      });
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: 'The id entered is not a positive intergar, please try again.' });
  } else {
    if (!notesData[id]) {
      return res.status(404).json({ error: `There is no note associated with ${id}, please try again.` });
    } else {
      notesData[id] = req.body;
      notesData[id].id = id;
      const dataJson = JSON.stringify(data, null, 2);
      fs.writeFile('./data.json', dataJson, 'utf8', err => {
        if (err) {
          throw res.status(500).json({ error: 'An unexpected error occured' });
        } else {
          res.status(201).json(notesData[id]);
        }
      });
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("This is Frasier Crane and I'm listening on port: 3000");
});
