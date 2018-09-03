const express = require('express');
const router = express.Router();
const controller = require('../controller/produtoController')
router.get('/:descricao', controller.get);
router.get('/', controller.getAll);
router.post('/adicionar',controller.post);

module.exports = router;