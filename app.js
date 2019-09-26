'use strict';

const express = require('express')
// const cors = require('cors') 
const app = express()
// const { port } = require('./src/config')

// //connected with db
// require('./src/database_mongo')

// //middlewares
// app.use(express.json())
// app.use(cors())

// //routes
// require('./src/routes/user.route')(app);
// require('./src/routes/publicacion.route')(app);
// require('./src/routes/comentario.route')(app);


app.get('/', (req, res) => {
    res.status(200).send("Ésta es la API de movilapp ✌️").end();
});


//Server

// app.set('port', port || 3000)

// app.listen(app.get('port'), () => console.log(`listening on ${app.get('port')}... `))
app.listen(3000, () => console.log(`listening on 3000... `))

module.exports = app;

