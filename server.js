const express = require('express')
const cors = require('cors')
const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//routes
// app.use(require('./src/routes/router'))
app.get('/', (req, res) => {
    res.send("Ésta es la API de movilapp ✌️")
})


app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => console.log(`listening on ${app.get('port')}... `))