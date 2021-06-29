const express = require('express');
const app = express();
const json = express.json();
let nextId = 1;

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', function (req, res) {
  const allGrades = [];
  for (const obj in grades) allGrades.push(grades[obj]);
  res.json(allGrades);
});

app.use(json);

app.post('/api/grades', function (req, res) {
  const currentId = nextId;
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  res.status(201).json(grades[currentId]);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("This is Frasier Crane and I'm listening on port: 3000");
});
