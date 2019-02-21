const express = require ('express');
const parser = require('body-parser')

//Inicializacion
const app = express();


//conexion de la base de datos
require('./db/database');


//seting
app.set('port',process.env.PORT || 4000);


//midelware
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())


//variable gobal



//Ruter
app.use(require('./rutes/index'));



//server start
app.listen(4000, () => {
    console.log(`server on port ${app.get('port')}`);
});
