import ApiService from './ApiService'

class AlterarProdutoService {
    static alterarProduto(codigo, descricao, un, estoque, precoMedio) {
        return ApiService.alterarProduto(codigo, descricao, un, estoque, precoMedio)
    }
}

export default AlterarProdutoService
