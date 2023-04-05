const { DataTypes } = require('sequelize');
const dbConection = require('../database/config');

const Evento = dbConection.define("Evento", {
    idEvento: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipoEvento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Evento;
