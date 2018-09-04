const express = require('express');
const router = express.Router();
const controller = require('../controller/usuarioController')
router.get('/:user', controller.get);
router.post('/adicionar',controller.registrar);
router.post('/login',controller.login);

module.exports = router;