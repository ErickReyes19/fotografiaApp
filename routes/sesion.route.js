'Ruta: /api/cliente';

const { Router } = require('express');

const { getSesion } = require('../controllers/sesion.controller');
const { validarCampos } = require('../middlewares/validarcampos.middleware');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/',validarJWT, getSesion);

// router.post('/',validarJWT, crearCliente);

// router.get('/', validarJWT, getUsuario);

module.exports = router;