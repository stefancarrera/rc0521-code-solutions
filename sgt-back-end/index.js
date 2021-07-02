const express = require('express');
const app = express();
const json = express.json();
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(json);

app.post('/api/grades', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = parseInt(req.body.score, 10);
  const params = [];
  params.push(name, course, score);
  if (!Number.isInteger(score) || score < 0) {
    res.status(400).json({
      error: '"score" must be a positive integer'
    });
  } else if (!name || !course || !score) {
    res.status(400).json({
      error: 'No parameter may be left blank. Please ensure name, course, and score are filled out properly.'
    });
  }

  const sql = `
 insert into "grades" ("name", "course", "score")
 values ($1, $2, $3)
 returning *;
  `;

  db.query(sql, params)
    .then(result => {
      res.status(201).json(req.body);
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const sql = `
  select
    "gradeId",
    "name",
    "course",
    "score",
    "createdAt"
  from "grades"
  where "gradeId" = $1
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
  select *
  from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.json(grades);
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("This is Frasier Crane and I'm listening on port: 3000");
});
