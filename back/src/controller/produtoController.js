const produtoService = require('../service/produtoService')

exports.get = (req, res, next) => {
    let descricao = req.params.descricao;

    let produtosFiltrados = produtoService.getProdutoPorDescricao(descricao)

    res.status(200).send(produtosFiltrados);
};

exports.getById = (req, res, next) => {
    let id = req.params.id;

    let produtoFiltrado = produtoService.getProdutoPorId(id)
    
    res.status(200).send(produtoFiltrado);
};

exports.getAll = (req, res, next) => {

    let produtos = produtoService.getProdutos()

    res.status(200).send(produtos);
};

exports.post = (req, res) => {
    let produto = req.body

    produtoService.adicionarProduto(produto)

    let produtos = produtoService.getProdutos()

    res.status(200).send(produtos);
};

exports.put = (req, res) => {
    let produto = req.body

    produtoService.alterarProduto(produto)

    let produtos = produtoService.getProdutos()

    res.status(200).send(produtos);
};

exports.delete = (req, res, next) => {
    let codigo = req.params.codigo;

    const produtos = produtoService.deletarProduto(codigo)

    res.status(200).send(produtos);
};

