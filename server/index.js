const express = require('express');
const dataParsing = require('./dataParsing')
const fetch = require('node-fetch');
const cors = require('cors')
require('dotenv').config();

const app = express()

const port = 3030

app.use(cors())

app.listen(port, ()=> console.log(`Hey I'm here listening on ${port}!`))

app.get('/api/recipes', async (req, res) => {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${'lime'}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&ingr=1-5&time=15-30`
  const response = await fetch(url);
  const data = await response.json(response);
  const parsedData = dataParsing.dataToArray(data);

  res.json(parsedData);
});