const express = require('express');
var compression = require('express-compression')

const app = express();

app.use(compression());
app.use((req, res, next) => {
  if (!req.headers.authorization) {
    req.headers.authorization = process.env.TOKEN;
    req.headers['Accept'] = 'application/json';
  }
  next();
});

app.get('http://47.230.192.119:3000/results', (req, res) => {
  console.log('hello');
})

app.listen(3000, () => {
  console.log(`listening on port ${3000}`)
})