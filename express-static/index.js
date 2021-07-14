const express = require('express');
const app = express();
const path = require('path');

const newPath = path.join(__dirname, 'public');
const staticMiddleware = express.static(newPath);
console.log(newPath);

app.use(staticMiddleware);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("This is Frasier Crane and I'm listening on port3000");
});
