const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');   
var cron = require('node-cron');
//var public = __dirname + "/public/";

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//app.use(express.static(path.join(__dirname, 'style')));
//app.use(express.static(path.join(__dirname, 'scripts')));


app.use((req, res, next)=> {
    var oneof = false;
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if (req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if (req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    if (oneof) {
        res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
    }
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    // intercept OPTIONS method
    if (oneof && req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

const api= require('./src/server/routes/api');
app.use('/api',api)


app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`API REST corriendo http://localhost:${port}`);

})


/**      Errores   */

/**
 * 100.. Informativo
 * 200.. Correcto
 * 300.. Redirecciones
 * 400.. No encontrado
 * 500.. Error en el Servidor
 * 
 */


