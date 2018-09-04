const express = require('express');
const router = express.Router();
const controller = require('../controller/produtoController')
router.get('/:descricao', controller.get);
router.get('/id/:id', controller.getById);
router.get('/', controller.getAll);
router.post('/adicionar',controller.post);
router.put('/alterar',controller.put);
router.delete('/deletar/:codigo',controller.delete);

module.exports = router;