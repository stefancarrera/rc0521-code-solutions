const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('Pizza Party 2Nite!');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("This is Frasier Crane and I'm listening");
});
