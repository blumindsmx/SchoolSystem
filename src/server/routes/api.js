const express = require('express')
const api = express.Router()//Utilizamos el Router de EXPRESS
const user= require('./user');

api.use('/user',user)


module.exports=api;