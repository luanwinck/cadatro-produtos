const Produto = require('../dominio/produto')

let produtos = []
let id = 0

function getProdutoPorDescricao(descricao) {
    return produtos.filter(p => p._descricao.toLowerCase().indexOf(descricao.toLowerCase()) !== -1)
}

function getProdutoPorId(id) {
    return produtos.find(p => p._codigo == id)
}

function getProdutos() {
    return produtos
}

function adicionarProduto(produto) {

    const codigo = _controladorId()

    produtos.push(new Produto(codigo, produto.descricao, produto.un, produto.estoque, produto.precoMedio))
    // console.log(produtos)
}

function alterarProduto(produto) {
    
    const codigo = produto.codigo

    deletarProduto(produto.codigo)

    produtos.push(new Produto(codigo, produto.descricao, produto.un, produto.estoque, produto.precoMedio))
}

function deletarProduto(codigo) {

    let array = produtos.filter( p => p._codigo != codigo ); 
    
    produtos = array;
}

function _controladorId() {
    id++;
    return id;
}

module.exports = {
    getProdutoPorId,
    getProdutoPorDescricao,
    getProdutos,
    adicionarProduto,
    alterarProduto,
    deletarProduto
}