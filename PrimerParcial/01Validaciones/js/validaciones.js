/*
Las validaciones de formulario son expresiones regualares
LAs cuales podemos dividir en 3 partes
1-Para el texto.(nombre)
2-para Número.(boleta)
3-Para la fecha.(fecha)

Una expresion regular, es un patron se identifca que elementos seran validos vs cuales bi, son reglas mediante las caules realizamos la validacion de los datos ingresados por el usuario, en este caso, en un formulario
ducmentacion oficial de MOZiLA
*/

const patrones = {
        nombre : /^[A-Za-zÁÉÍÓÚÑáéíóúñü\s]{2,60}$/,
        boleta : /^\d{10}$/,
        fecha : /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    };

    const mensajes = {
        nombre : "Solo letras y espacios, entre 2 y 60 caracteres",
        boleta : "Debe tener exactamente 10 digitos",
        fecha : "Formtato esperado : DD/MM/AAAA (ej 01/01/2023)"
    };
        function validarCampo(campo, valor){
     return patrones[campo].test(valor.trim());
    }
//ver el resto del archivo DOM,

    if(typeof document !== 'undefined') {
        const formulario = document.getElementById('form-registro')

        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault(); //Evita que el formaulario se envia auto

            let formularioValido = true;

            //tenemos que validar campo por campop

            for(const campo of Object.keys(patrones)){
                const input = document.getElementById(campo);
                const spanError = document.getElementById(`error-${campo}`);
                const esvalido = validarCampo(campo, input.value);

                input.classList.toggle('invalido' , !esvalido);
                spanError.textContent = esvalido ? '' : mensajes[campo];

                if(!esvalido) formularioValido = false;

                mensajeExito.textContent = formularioValido
                 ? 'Registro exitoso'
                : 'Por favor, revisa los errores en el formulario.';
                mensajeExito.classList.toggle('exito', formularioValido);
                mensajeExito.classList.toggle('fallo', !formularioValido);
             }

            const mensajeExito = document.getElementById('mensaje-exito');

            mensajeExito.textContent = formularioValido ? 'Registro exitoso' : 'rEVISA errores'

        })
    }
//ver el resto del archivo DOM,