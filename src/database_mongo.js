const mongoose = require('mongoose');
const { dbUser, dbPassword, dbHost } = require('./config')


const ATLAS_URI = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/test?retryWrites=true&w=majority`

mongoose.connect(ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));

