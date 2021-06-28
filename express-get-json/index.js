const express = require('express');
const app = express();

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

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("This is Frasier Crane and I'm listening on port3000");
});

app.get('/api/grades', function (req, res) {
  const allGrades = [];
  for (const obj in grades) allGrades.push(grades[obj]);
  res.json(allGrades);
});
