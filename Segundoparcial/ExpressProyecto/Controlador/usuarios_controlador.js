const bcrypt = require('bcrypts');

const usuariosModel = require('../Modelo/usuario');

const {validarCorreo, validarBoleta, validarContrasena} = require('../validaciones')


//que pasa si e duplica la bolwera

function esDuplicado(eror){
    return error.code == 'ER_DUPLICADO_ENTRY'|| error.code === '23505' 
}

async function listarUsuarios(req, res){
try{
    const usuarios= await usuariosModel.listar();
}catch(error){
    res.status(500).json({error: error.message})
}

}

async function obtenerUsuario(req, res ) {
try{
    const usuario = await usuariosModel.obtenerPorId(req.params.id)
    if(!usuario) return res.status(404).json({error:  'Usuario no encontrado'});
    res.json(usuario);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}