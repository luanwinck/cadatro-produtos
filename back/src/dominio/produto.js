module.exports = class Produto{
    constructor(codigo, descricao, un, estoque, precoMedio){
        this._codigo = codigo
        this._descricao = descricao
        this._un = un
        this._estoque = estoque
        this._precoMedio = precoMedio
    }
}