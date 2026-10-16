//vams a tener funcuiones que se ebcargan de validar correo boleta  y contraseña

//tarearareatarea
function validarCorreo(correo){
    
}

//aquixa va correo 

function validarBoleta(boleta){

}

//aqu boletin

function validarContrasena(contrasena){
    if (typeof contrasena !== 'string') return false;
    return contrasena.length >=8
}

module.exports = {validarContrasena, validarCorreo, validarBoleta}

//deberan   