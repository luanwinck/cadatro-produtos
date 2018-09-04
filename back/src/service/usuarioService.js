const Usuario = require("../dominio/usuario");

let usuario1 = new Usuario("fulano", "asd", "123123")

let usuarios = []
usuarios.push(usuario1)

function getUsuario(nome) {
    return usuarios.find(u => u._nome.toLowerCase().indexOf(nome.toLowerCase()) !== -1)
}

function adicionarUsuario(usuario) {
    usuarios.push(new Usuario(usuario.nome, usuario.email, usuario.password))
}

function login(usuario) {
    
    let usuarioCadastrado = usuarios.filter(u => u._email == usuario.email && u._password == usuario.password); 

    if (usuarioCadastrado.length > 0) {
        return usuarioCadastrado[0]._nome
    } else {
        return false
    }
}

module.exports = {
    login,
    getUsuario,
    adicionarUsuario
}