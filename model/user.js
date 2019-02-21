
const { Schema, model } = require ('mongoose');
const bcrypt = require ('bcrypt-nodejs');
const encrypt = require('./encriptacion')

const UserSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    displeyName: { type: String },
    password: { type: String, select: false }
});

// realizamos la encrytacion de la contraseña
UserSchema.pre('save', function (next)  {
    let user = this
    if (!user.isModified('password')) return next()
    encrypt(user.password, (err, result) => {
        if(err) next(err)

        user.password = result
        next()
    })
})


module.exports = model('User', UserSchema);