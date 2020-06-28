const express = require('express');
const bodyParser = require('body-parser')
const connection = require("./conexion")
const misrutas = require('./conexion');
const { route } = require('./conexion');
const router = require('./conexion');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', misrutas);
module.exports = router;


app.listen(3000, (err, res) => {
    if (err) {
    console.log('Error al levantar servidor')
    return;
    }
    console.log('Apis escuchando en el puerto 3000')
   });
 