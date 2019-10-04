'use strict';
//dependencies
const { port } = require('./config/config')
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
//

const app = express()

const publicacionesRoute = require('./routes/publicaciones.route')
const comentariosRoute = require('./routes/comentarios.route')


// // See the react auth blog in which cors is required for access
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
//   next();
// });


// middlewares

app.use(express.urlencoded())
  .use(express.json())
  .use(cors());



// Instantiating the express-jwt middleware
const jwt_middleware = exjwt({
  secret: 'keyboard cat 4 ever'
});


//routes
publicacionesRoute(app)
comentariosRoute(app)


app.get('/', (req, res) => {
  res
    .status(200)
    .send('This is MovilApp Api')
    .end();
});



app.listen(port || process.env.port, () => {
  console.log(`App listening on port ${port}`);
  console.log('Press Ctrl+C to quit.');
});


module.exports = app;