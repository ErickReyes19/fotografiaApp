const { DataTypes } = require('sequelize');
const dbConnection = require('../database/config');

const Cobertura = dbConnection.define('cobertura', {
  idCobertura: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  idServicio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idEvento: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  idSesion: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  lugar: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  idCliente: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  area: {
    type: DataTypes.STRING,
    allowNull: true
  },
  horaInicio: {
    type: DataTypes.TIME,
    allowNull: false
  },
  horaFinal: {
    type: DataTypes.TIME,
    allowNull: false
  },
  idPaquete: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  cantHoras: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = Cobertura;
