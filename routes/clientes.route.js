'Ruta: /api/cliente';

const { Router } = require('express');

const { getClientes, crearCliente } = require('../controllers/clientes.controller');
const { validarCampos } = require('../middlewares/validarcampos.middleware');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/',validarJWT, getClientes);

router.post('/',validarJWT, crearCliente);

// router.get('/', validarJWT, getUsuario);

module.exports = router;