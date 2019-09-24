const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://santiago:santiago123@cluster0-8hukm.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));
    