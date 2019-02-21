const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/images-app', {
    useNewUrlParser: true
})
.then(db => console.log('db is conected'))
.catch(err => console.error(err));