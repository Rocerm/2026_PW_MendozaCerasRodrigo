// 02-objetos-json.js
// Object.keys/values/entries y JSON.stringify/parse. Completa cada TODO.

const taller = {
  nombre: 'Introducción a Python',
  instructor: 'Ing. María López',
  cupo: 25,
  inscritos: 25,
};
/*objeto describe las caeacterristicas
tienen clase - valor

statment para hacer consultas sin formato y lo edfines tu
prerpare stament , preparas un objeto jjejejejeje

*/
// TODO: Object.keys — imprime solo los nombres de las propiedades de `taller`

  console.log('MAnejo de object.keys');
  console.log(Object.keys(taller));


// TODO: Object.values — imprime solo los valores

  console.log('Manejo de valores del obejto');
  console.log(Object.values(taller));

// TODO: Object.entries — recorre con for..of e imprime "campo: valor" de cada propiedad
//For of recorre de una entidad objeto valor

  console.log('MAnejo de objetos por for of para entries')
  for(const [campo, valor] of Object.entries(taller)){
  console.log(`${campo}: ${valor}`);

  }

// TODO: JSON.stringify — convierte `taller` a texto (guárdalo en `textoJson`) e imprímelo

  console.log('Manejo de conversion de Objeto a String ')
  const textoJson = JSON.stringify(taller, null, 2);
  console.log(textoJson);
  console.log('tipo: ', typeof textoJson);

// TODO: JSON.parse — convierte `textoJson` de vuelta a objeto (guárdalo en `objetoDeVuelta`)
//       e imprime `objetoDeVuelta.nombre`

console.log('Inverso de cade a JSON');
const  objetodevuelta = JSON.parse(textoJson);
console.log('tipo: ', objetodevuelta);
console.log(objetodevuelta.nombre);
