import ApiService from './ApiService'

class LoginService {
    static login(email, password) {
        return ApiService.login(email, password)
    }
}

export default LoginService
