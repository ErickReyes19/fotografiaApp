const { request, response } = require('express');
const db = require('../models/rf/index');

const Cliente = db.cliente;

const getClientes = async (req = request, res = response) => {
    try {
        const clientes = await Cliente.findAll();
        return res.status(200).json({ Clientes: clientes });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Ocurrió un error interno en el servidor"
        })
    }
};


const crearCliente = async (req = request, res = response) => {

        const { nombre, numerocelular, identidad } = req.body;
        try {
            const cliente = await Cliente.create({
                nombre: nombre,
                numerocelular: numerocelular,
                identidad: identidad,

            });
    
            return res.status(200).send({
                message: "Registrado con éxito.",
                cliente
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                message: "Ocurrio un error" + error
            });
        }
    }




module.exports = {
    getClientes,
    crearCliente
}