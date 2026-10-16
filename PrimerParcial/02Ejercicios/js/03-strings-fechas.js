// 03-strings-fechas.js
// Métodos de string más usados + el objeto Date — conecta con la validación
// de fecha (DD/MM/AAAA) de la semana 4. Completa cada TODO.

const entrada = '  María López  ';

// TODO: trim — imprime `entrada` sin espacios sobrantes / para quitar los espacios

    console.log('Ejemplo de -trim()')
    console.log(`"${entrada.trim()}"`)

// TODO: split — parte el resultado del trim en un arreglo `partes`, separado por espacio

  console.log('ejemplos de split');
  const partes = entrada.trim().split(' ')
  console.log(partes);
// TODO: includes — imprime si 'correo@cecyt9.ipn.mx' contiene '@'

  console.log('Manejo de includes')
  console.log('correo@cecyt9.com'.includes('@'));
// TODO: replace y replaceAll — con '05/09/2026', reemplaza '/' por '-'
//       primero con replace (una sola vez) y luego con replaceAll (todas)

  console.log('Manejo de Replace / Replace All')
  console.log('05/09/26'.replace('/','-'))
  console.log('05/09/26'.replaceAll('/','-'))
// TODO: template literals — usando `nombre = 'María'` y `cupo = 25`, imprime
//       "María se inscribió en un taller con cupo para 25 personas."

  console.log('\n Uso de template literals')
  const nombre = 'Maria';
  const cupo = 25;
  console.log(`${nombre} se inscribi en taller con cupo para ${cupo} personas`);


// TODO: Date — completa esta función para construir un objeto Date a partir

  
  console.log('Manejo de Data')
  function fechaDesdeTexto(textoFecha){
    const[dia, mes , anio] = textoFecha.split('/').map(Number);
    return new Date(anio, mes - 1, dia )
  }
// de un texto 'DD/MM/AAAA' (recuerda: los meses en Date empiezan en 0)

  

function fechaDesdeTexto(textoFecha) {
  // TODO
}

// TODO: usa fechaDesdeTexto('05/09/2026'), imprime su toISOString() y su

const fechaAsistencia = fechaDesdeTexto('05/09/2026')
console.log('fecha construida', fechaAsistencia.toISOString());
console.log('Dia de la semana (0=Domingo)', fechaAsistencia.getDay());

const hoy = new Date ();
const hoy = new Date();
const diaDeDif = Math.round((fechaAsistencia - hoy) / (1000*60*60*24));
console.log(`Faltan ${diaDeDif} día(s) para la fecha asistencia (Pyuede ser negativo si ya paso)`);
 /// getDay(); luego calcula cuántos días de diferencia hay contra `new Date()`
