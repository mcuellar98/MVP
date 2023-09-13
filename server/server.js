const express = require('express');
const compression = require('express-compression')
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

const app = express();

app.use(compression());
app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
  // console.log(req.body);
  // console.log('received');
  const config = {
    headers:{Authorization: process.env.TOKEN, accept: 'application/json'},
    params: req.body
  }
  axios.get('https://api.yelp.com/v3/businesses/search',  config)
  .then((response) => {
    // console.log(Object.keys(response.data));
    res.json(response.data.businesses);
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
})

app.listen(3000, () => {
  console.log(`listening on port ${3000}`)
})