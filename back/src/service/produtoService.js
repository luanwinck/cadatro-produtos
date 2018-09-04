const Produto = require('../dominio/produto')

let produtos = []

function getProdutoPorDescricao(descricao) {
    return produtos.filter(p => p._descricao.toLowerCase().indexOf(descricao.toLowerCase()) !== -1)
}

function _getProdutoPorId(id) {
    return produtos.find(p => p._codigo === id)
}

function getProdutos() {
    return produtos
}

function adicionarProduto(produto) {

    const codigo = _controladorId()

    produtos.push(new Produto(codigo, produto.descricao, produto.un, produto.estoque, produto.precoMedio))
    console.log(produtos)
}

function alterarProduto(produto) {
    
    const codigo = produto.codigo

    deletarProduto(produto.codigo)

    produtos.push(new Produto(codigo, produto.descricao, produto.un, produto.estoque, produto.precoMedio))
}

function deletarProduto(id) {

    const produto = _getProdutoPorId(id)
    produtos.pop(produto)
}

function _controladorId() {
    let id = 0
    if (produtos.length) {
      id = produtos.reduce((a, b) => {
        return Math.max(a._codigo, b._codigo)
      })._codigo
    }
    return (id + 1)
}

module.exports = {
    getProdutoPorDescricao,
    getProdutos,
    adicionarProduto,
    alterarProduto,
    deletarProduto
}