import CONFIG from '../config'
import axios from 'axios'

const configHeader = { headers: { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' } };

class ApiService {
    
    static cadastrarProduto(title, description, text, image) {
        
        return axios.post(`${CONFIG.API_URL_BASE}/produto/adicionar`, {
            codigo: 'codigo',
            descricao: 'descricao',
            un: 'un',
            estoque: 10,
            precoMedio: 7.00,
            }, configHeader)
    }

    static alterarProduto(title, description, text, image) {
        
        return axios.put(`${CONFIG.API_URL_BASE}/produto/alterar`, {
            codigo: 2,
            descricao: 'descricaoAlterado',
            un: 'un',
            estoque: 10,
            precoMedio: 10.00,
            }, configHeader)
    }

    static getProdutos() {
        return axios.get(`${CONFIG.API_URL_BASE}/produto/`, configHeader)
    }

    static getProdutoPorDescricao(descricao) {
        return axios.get(`${CONFIG.API_URL_BASE}/produto/${descricao}`, configHeader)
    }
}

export default ApiService
