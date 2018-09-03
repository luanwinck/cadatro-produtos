const Usuario = require("../dominio/usuario");

let usuario1 = new Usuario("fulano", "123123")

let usuarios = []
usuarios.push(usuario1)

function getUsuario(nome) {
    return usuarios.filter(u => u._nome.toLowerCase().indexOf(nome.toLowerCase()) !== -1)
}

function adicionarUsuario(usuario) {
    usuarios.push(usuario)
    console.log(usuarios)
}

module.exports = {
    getUsuario,
    adicionarUsuario
}