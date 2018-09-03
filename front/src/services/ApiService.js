import CONFIG from '../config'
import axios from 'axios'

class ApiService {

    static cadastrarProduto(title, description, text, image) {
        const config = { headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' } };
        return axios.post(`${CONFIG.API_URL_BASE}/produto/adicionar`, {
            codigo: 'codigo',
            descricao: 'descricao',
            un: 'un',
            estoque: 'estoque',
            precoMedio: 'precoMedio',
            }, config)
    }
}

export default ApiService
