const db = require("../models/rf/index");
const { DB } = require("../database/config");
const bcrypt = require("bcrypt");
const config = require("../config/auth.config.js");

const Usuario = db.usuario;
const Cliente = db.cliente;
const Servicio = db.servicio;
const Sesion = db.sesion;
const Evento = db.evento;
const Empresa = db.empresa;
const Cobertura = db.cobertura;

exports.initial = async () => {
    try {

        await Usuario.create({
            usuario: "alexisr",
            password: bcrypt.hashSync(config.secret, 8),
            idRol: 1,
        });
        await Usuario.create({
            usuario: "root2",
            password: bcrypt.hashSync(config.secret, 8),
            idRol: 2,
        });
        await Cliente.create({
            nombre: "Juan",
            numerocelular: "12345",
            identidad: "0000",
        });
        await Cliente.create({
            nombre: "Omar",
            numerocelular: "654321",
            identidad: "1111",
        });
        await Cliente.create({
            nombre: "Erick",
            numerocelular: "6854654",
            identidad: "2222",
        });
        await Cliente.create({
            nombre: "José",
            numerocelular: "68541",
            identidad: "3333",
        });
        await Servicio.create({
            tipoServicio: "Evento",
        });
        await Servicio.create({
            tipoServicio: "Sesion",
        });
        await Servicio.create({
            tipoServicio: "Empresa",
        });
        await Sesion.create({
            tipoSesion: "Pre-15",
        });
        await Sesion.create({
            tipoSesion: "Pre-boda",
        });
        await Evento.create({
            tipoEvento: "15",
        });
        await Evento.create({
            tipoEvento: "boda",
        });
        await Empresa.create({
            tipoEmpresa: "Restaurante",
        });
        await Empresa.create({
            tipoEmpresa: "Moda",
        });
        await Cobertura.create({
            idServicio: 1,
            idEvento: null,
            idSesion: null,
            lugar: "Salón principal",
            fecha: new Date("2023-04-10"),
            idCliente: 1,
            area: null,
            horaInicio: "10:00",
            horaFinal: "12:00",
            idPaquete: null,
            cantHoras: 2
        });
        


    } catch (error) {
        console.log(error);
    }
};