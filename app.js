'use strict';
const { port } = require('./config/config')
const express = require('express')
const cors = require('cors')
const app = express()

const publicacionesRoute = require('./routes/publicaciones.route')

// middlewares
app.use(express.json()).use(cors())

//routes
publicacionesRoute(app)

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();
});



app.listen(port || process.env.port, () => {
  console.log(`App listening on port ${port}`);
  console.log('Press Ctrl+C to quit.');
});


module.exports = app;