const { request, response } = require('express');
const db = require('../models/rf/index');

const Servicio = db.servicio;

const getServicio = async (req = request, res = response) => {
    try {
        const servicio = await Servicio.findAll();
        return res.status(200).json({ Servicios: servicio });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ocurrió un error interno en el servidor"
        })
    }
};





module.exports = {
    getServicio,
}
