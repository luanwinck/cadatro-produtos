import CONFIG from '../config'
import axios from 'axios'

const configHeader = { headers: { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' } };

class ApiService {
    
    static cadastrarProduto(descricao, un, estoque, precoMedio) {
        
        return axios.post(`${CONFIG.API_URL_BASE}/produto/adicionar`, {
            descricao,
            un,
            estoque,
            precoMedio,
            }, configHeader)
    }

    static alterarProduto(codigo, descricao, un, estoque, precoMedio) {
        
        return axios.put(`${CONFIG.API_URL_BASE}/produto/alterar`, {
            codigo,
            descricao,
            un,
            estoque,
            precoMedio,
            }, configHeader)
    }

    static deletarProduto(codigo) {
        return axios.delete(`${CONFIG.API_URL_BASE}/produto/deletar/${codigo}`, configHeader)
    }

    static getProdutos() {
        return axios.get(`${CONFIG.API_URL_BASE}/produto/`, configHeader)
    }

    static getProdutoPorDescricao(descricao) {
        return axios.get(`${CONFIG.API_URL_BASE}/produto/${descricao}`, configHeader)
    }

    static getProdutoPorId(id) {
        return axios.get(`${CONFIG.API_URL_BASE}/produto/id/${id}`, configHeader)
    }
}

export default ApiService
