const express = require('express')

const app = express()

const port = 3030

app.listen(port, ()=> console.log(`Hey I'm here listening on ${port}!`))

app.get('/', (req, res) => {
  res.send('Hello World!')
})