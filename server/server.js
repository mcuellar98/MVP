const express = require('express');
const compression = require('express-compression')
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const x = require('x-ray-scraper');
var osmosis = require('osmosis');

const app = express();

app.use(compression());
app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
  const config = {
    headers: {Authorization: process.env.TOKEN, accept: 'application/json'},
    params: req.body
  }
  axios.get('https://api.yelp.com/v3/businesses/search',  config)
  .then((response) => {
    res.json(response.data.businesses);
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
})

app.post('/images', (req, res) => {

});

app.post('/reviews', (req, res) => {
  const config = {
    headers:{Authorization: process.env.TOKEN, accept: 'application/json'}
  }
  axios.get(`https://api.yelp.com/v3/businesses/${req.body.id}/reviews`, config)
  .then((response) => {
    res.json(response.data.reviews);
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

app.listen(3000, () => {
  console.log(`listening on port ${3000}`)
})