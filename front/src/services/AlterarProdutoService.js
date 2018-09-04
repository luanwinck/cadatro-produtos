import ApiService from './ApiService'

class AlterarProdutoService {
    static alterarProduto(title, description, text, image, token) {
        return ApiService.alterarProduto(title, description, text, image, token)
    }
}

export default AlterarProdutoService
