'Ruta: /api/cliente';

const { Router } = require('express');

const { getServicio } = require('../controllers/servicio.controller');
const { validarCampos } = require('../middlewares/validarcampos.middleware');
const { validarJWT } = require('../middlewares/validarJWT.middleware');

const router = Router();

router.get('/',validarJWT, getServicio);

// router.post('/',validarJWT, crearCliente);

// router.get('/', validarJWT, getUsuario);

module.exports = router;