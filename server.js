const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//connected with db
require('./src/database_mongo')

//middlewares
app.use(express.json())
app.use(cors())

//routes
// app.use(require('./src/routes/router'))
app.get('/', (req, res) => {
    res.send("Ésta es la API de movilapp ✌️")
})

require('./src/routes/user')(app);

//Server


app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => console.log(`listening on ${app.get('port')}... `))
