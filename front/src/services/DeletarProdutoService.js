import ApiService from './ApiService'

class DeletarProdutoService {
    static deletarProduto(codigo) {
        return ApiService.deletarProduto(codigo)
    }
}

export default DeletarProdutoService