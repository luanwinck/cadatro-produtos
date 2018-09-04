import ApiService from './ApiService'

class RegistrarService {
    static registrar(nome, email, password) {
        return ApiService.registrar(nome, email, password)
    }
}

export default RegistrarService
