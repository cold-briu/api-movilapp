const express = require('express')
const cors = require('cors')
const app = express()

// test

const { port } = require('./src/config')


//connected with db
require('./src/database_mongo')

//connected with socket
require('./src/socket')

//middlewares
app.use(express.json())
app.use(cors())

//routes
require('./src/routes/user.route')(app);
require('./src/routes/publicacion.route')(app);
require('./src/routes/comentario.route')(app);


app.get('/', (req, res) => {
    res.send("Ésta es la API de movilapp ✌️")
})

//Server

app.set('port', port || 3000)

app.listen(app.get('port'), () => console.log(`🐚 Server listening on ${app.get('port')}... `))

module.exports = app
