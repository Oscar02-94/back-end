'use strict';
const { Router } = require ('express');
const router = Router();

const User = require('../model/user');
const bcrypt = require('bcrypt-nodejs');

const encriptacion = require('../model/encriptacion');

router.get('/', (req, res) => {
    res.send('index page');
});

router.get('/subida', (req, res) => {
    res.send('ya esta el server')
});

router.post('/login',  (sol, res) => {
    const { email, displeyName, password } = sol.body

    User.findOne({ email })
    .then(result => {
        if(result !== null) {
            bcrypt.compare(password, result.password, (err, response) => {
                if(err) throw err
                console.log(result)
                if(response = true) {
                    return res.json({
                        message: 'usuario logueado'
                    })
                }
                //console.log(result)
                return res.json({
                    message: 'La contraseña es incorrecta'
                });
            })
            
        } else {
            return res.json({
                message: 'El correo no existe'
            })
        }
    })
    .catch(err => {
        return res.json(err)
    })

   
});

//router.get('/register', (req, res) => {
  //  res.send('register');
//});

router.post('/registro',  (sol, res) => {
    //console.log(req.body, '<<<<------- registro')
const { email, displeyName, password,  } = sol.body 
bcrypt.genSalt(10, (er, salt) => {
    if (er) throw er
    bcrypt.hash(password, salt, null,(err, hash) => {
        if (err) throw err

        //ceramos el usuario
        User.create ({
            email,
            displeyName,
            password: hash
        }).then(r => res.json(r))
        //aqui pasamos por el .then para una respuesta
        .catch( error => {
            return res.json(error)
            //el .catch lo usamos para cachar algun error y si lo hay que nos lo pinte por consola
        })
    })  
})

})


module.exports = router;