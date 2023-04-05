const { request, response } = require('express');
const db = require('../models/rf/index');

const Sesion = db.sesion;

const getSesion = async (req = request, res = response) => {
    try {
        const sesion = await Sesion.findAll();
        return res.status(200).json({ sesiones: sesion });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ocurrió un error interno en el servidor"
        })
    }
};





module.exports = {
    getSesion,
}
