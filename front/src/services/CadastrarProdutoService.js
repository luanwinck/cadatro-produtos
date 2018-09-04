import ApiService from './ApiService'

class CadastrarProdutoService {
    static cadastrarProduto(descricao, un, estoque, precoMedio) {
        return ApiService.cadastrarProduto(descricao, un, estoque, precoMedio)
    }
}

export default CadastrarProdutoService
