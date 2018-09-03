const Usuario = require("../dominio/usuario");

let usuario1 = new Usuario("fulano")
let usuario2 = new Usuario("fulano2")
let usuario3 = new Usuario("fulano3")

let usuarios = []
usuarios.push(usuario1)
usuarios.push(usuario2)
usuarios.push(usuario3)

module.exports = function getUsuario(nome) {
    return usuarios.filter(u => u._nome.toLowerCase().indexOf(nome.toLowerCase()) !== -1)
}