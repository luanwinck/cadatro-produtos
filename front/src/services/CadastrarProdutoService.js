import ApiService from './ApiService'

class CadastrarProdutoService {
    static cadastrarProduto(title, description, text, image, token) {
        return ApiService.cadastrarProduto(title, description, text, image, token)
    }
}

export default CadastrarProdutoService
