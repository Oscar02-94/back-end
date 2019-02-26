'use strict';

const { Schema, model } = require ('mongoose');
const bcrypt = require ('bcrypt-nodejs');
const encrypt = require('./encriptacion')

const UserSchema = new Schema({
    //agregando validaciones 
    email: { type: String, unique: true, lowercase: true,required:" El email es necesario" },
    displeyName: { type: String,required:false, maxlength:[30,"usuario muy grande"] },
    password: { type: String,required: true,minlength:[7,"la contraseña es muy corta"],select: true }
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