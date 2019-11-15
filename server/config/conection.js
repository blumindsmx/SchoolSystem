var sql = require("mssql");
//const conexion = "192.168.0.19";
//const conexion = "192.168.0.38";
const conexion = "74.208.84.30";

var config = {
    user: 'sa',
    password: 'Contanetica2016Des',
    server: conexion,
    database: 'MotorSAT'
        // database: 'MotorSATC',
        //port: 1434
};

sql.connect(config, (err, response)=> {
    if (err) {
        console.log(err);
        //res.send({ menssage: 'Error Contenido de slqserver' + err });
    } else {
        console.log('Conexion a sql server')
    }
});


module.exports = sql;