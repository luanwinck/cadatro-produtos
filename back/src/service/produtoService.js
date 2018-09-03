const Produto = require('../dominio/produto')

let produtos = []

function getProdutoPorDescricao(descricao) {
    return produtos.filter(p => p.descricao.toLowerCase().indexOf(descricao.toLowerCase()) !== -1)
}

function getProdutos() {
    return produtos
}

function adicionarProduto(produto) {

    produtos.push(new Produto(produto.codigo, produto.descricao, produto.un, produto.estoque, produto.precoMedio))
    console.log(produtos)
}

module.exports = {
    getProdutoPorDescricao,
    adicionarProduto,
    getProdutos
}