const express = require('express');
var compression = require('express-compression')

const app = express();

app.use(compression());

app.listen(3000, () => {
  console.log(`listening on port ${3000}`)
})