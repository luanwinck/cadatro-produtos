import ApiService from './ApiService'

class GetProdutoPorDescricaoService {
    static getProdutoPorDescricao(descricao) {
        return ApiService.getProdutoPorDescricao(descricao)
    }
}

export default GetProdutoPorDescricaoService
