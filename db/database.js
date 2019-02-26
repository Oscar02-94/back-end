const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/images-app', {
    //con este error quitampos la deprecacion de mongo 
    useCreateIndex: true,
    useNewUrlParser: true
})
.then(db => console.log('db is conected'))
.catch(err => console.error(err));