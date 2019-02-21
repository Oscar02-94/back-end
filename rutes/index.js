const { Router } = require ('express');
const router = Router();

const User = require('../model/user');

const encriptacion = require('../model/encriptacion');

router.get('/', (req, res) => {
    res.send('index page');
});

router.get('/subida', (req, res) => {
    res.send('ya esta el server')
});

router.post('/login',  async (req, res) => {
   //const user = new user();
   //user.email = req.body.email,
   //user.displeyName = req.body.displeyName

   //await user.save();
});

router.get('/register', (req, res) => {
    res.send('register');
});

router.post('/registro',  (req, res) => {
    console.log(req.body, '<<<<------- registro')
    const user = new User();
    if(req){
        user.email = req.body.email,
        user.displeyName = req.body.displayName,
        user.password = req.body.password

        user.save().then(result => {
            console.log(result, 'hgggg')
    
            res.send({
                status: 200,
                message: 'usuario creado'
            })
        }).catch(err => {
            console.log(err, 'uuuu');
            res.send({
                status: 500,
                message: 'error al crar usuario'
            })
        });
    }else{
        res.send({status: 500, message:'No vienen los datos'})
    }
 


})


module.exports = router;