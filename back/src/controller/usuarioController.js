const usuarioService = require('../service/usuarioService')
const Usuario = require('../dominio/usuario')

exports.get = (req, res, next) => {
    let user = req.params.user;

    let usuariosFiltrados = getUsuario(user)

    res.status(200).send(usuariosFiltrados);
};

exports.post = (req, res) => {
    let test = req.body.test
    res.status(201).send({
        title: 'test',
        text: "texto teste"
    });

    let usuario = new Usuario(test)

    usuarioService.adicionarUsuario(usuario)

    console.log(test)
};