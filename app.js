
'use strict';

const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json()).use(cors())


app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});


module.exports = app;