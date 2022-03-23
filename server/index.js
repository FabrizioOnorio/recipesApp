const express = require('express');
const dataParsing = require('./dataParsing')
const fetch = require('node-fetch');
const cors = require('cors');
const { query } = require('express');
require('dotenv').config();
const path = require('path');

const app = express()

const port = 3030

app.use(cors())

app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(port, ()=> console.log(`Hey I'm here listening on ${port}!`))

app.get('/api/recipes', async (req, res) => {
  try {
    const ingredients = await req.query.ingredients;
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&ingr=1-5&time=15-30`;
    const response = await fetch(url);
    const data = await response.json(response);
    const parsedData = dataParsing.dataToArray(data);
    res.json(parsedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
