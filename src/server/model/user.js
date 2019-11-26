'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = Schema({
    nombre: String,
    materno: String,
    paterno:String,
    email:String,
    number:String,
    type:Number, 
})

/*      Types of user  */

// Administrador
//Profesor
//Padre de Familia

/**
 * Materia
 * Alumno
 * 
 * 
 */
module.exports= mongoose.model('User',UserSchema);