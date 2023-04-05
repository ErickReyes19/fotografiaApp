const usuario = require('../usuario.model');
const cliente = require('../cliente.model');
const servicio = require('../servicio.model');
const sesion = require('../sesion.model');
const evento = require('../evento.model');
const cobertura = require('../cobertura.model');
const empresa = require('../empresa.model');


const db = {
    usuario,
    cliente,
    servicio,
    sesion,
    evento,
    cobertura,
    empresa

};


module.exports = db;