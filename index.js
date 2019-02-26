'use strict';

const express = require ('express');
const parser = require('body-parser');
const cors = require('cors');

//Inicializacion
const app = express();


//conexion de la base de datos
require('./db/database');


//seting
app.set('port',process.env.PORT || 4000);


//midelware
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

//corse
app.use(cors())
// acceso alas peticiones del front-end cuando el front-end sea externo (otro servidor)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//variable gobal



//Ruter
app.use(require('./rutes/index'));



//server start
app.listen(4000, () => {
    console.log(`server on port ${app.get('port')}`);
});
