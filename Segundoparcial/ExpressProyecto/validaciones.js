//vams a tener funcuiones que se ebcargan de validar correo boleta  y contraseña

//tarearareatarea
function validarCorreo(correo){
    if (typeof correo !== 'string') return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

//aquixa va correo 

function validarBoleta(boleta){
    if (typeof boleta !== 'string') return false;
    const regex = /^\d{8}$/;
    return regex.test(boleta);
}



//aqu boletin

function validarContrasena(contrasena){
    if (typeof contrasena !== 'string') return false;
    return contrasena.length >=8
}

module.exports = {validarContrasena, validarCorreo, validarBoleta}

//deberan   