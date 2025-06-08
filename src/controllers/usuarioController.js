const usuarioService = require('../services/usuarioService');

const registraUsuario = async (req, res) => {
    try {
        const usuario = await usuarioService.crearUsuario(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    registraUsuario,
};