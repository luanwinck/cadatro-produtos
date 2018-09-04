const usuarioService = require('../service/usuarioService')


exports.get = (req, res, next) => {
    let user = req.params.user;

    let usuariosFiltrados = getUsuario(user)

    res.status(200).send(usuariosFiltrados);
};

exports.registrar = (req, res) => {
    let usuario = req.body 

    usuarioService.adicionarUsuario(usuario)

    res.status(201).send(usuario);
};

exports.login = (req, res) => {
    let usuario = req.body 

    let resposta = usuarioService.login(usuario)
    console.log(resposta)
    if (!resposta) {
        res.status(400).send();
    }
    res.status(201).send(resposta);
};