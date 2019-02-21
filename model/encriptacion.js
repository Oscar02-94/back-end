// realizamos la encrytacion de la contraseña
// usamos un callback 
const bcrypt = require ('bcrypt-nodejs');

module.exports = (password, cb) => {
    bcrypt.genSalt( 10, function(err, salt)  {
        if ( err) return cb(err, null)
        
        bcrypt.hash(password, salt, null,(err, hash) => {
            if (err) return cb(err, null)
           
            cb(null, hash)
        })
    })
}

