
const talleres = [
  { nombre: 'Introducción a Python', instructor: 'Ing. María López', cupo: 25, inscritos: 25 },
  { nombre: 'Fundamentos de Redes', instructor: 'Ing. Carlos Ramírez', cupo: 30, inscritos: 18 },
  { nombre: 'Diseño de Bases de Datos', instructor: 'Ing. Ana Torres', cupo: 20, inscritos: 20 },
  { nombre: 'Desarrollo Web con JS', instructor: 'Ing. María López', cupo: 25, inscritos: 10 },
];


function pintarTabla() {
    const tabla = document.querySelector('#tabla-talleres tbody');
    
    const filasHTML = talleres.map((t) => {
        return `
            <tr>
                <td>${t.nombre}</td>
                <td>${t.instructor}</td>
                <td>${t.cupo}</td>
                <td>${t.inscritos}</td>
            </tr>
        `;
    }).join('');
    
    tabla.innerHTML = filasHTML; 
}

pintarTabla();

const formArreglos = document.getElementById('form-arreglos');
const resultadoArreglos = document.getElementById('resultado-arreglo');
const selectOperacionArreglo = document.getElementById('operacion-arreglo');

formArreglos.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    const operacion = selectOperacionArreglo.value;

    let resultado;

    switch(operacion){
        case 'forEach':
            resultado = talleres.map((t) => `- ${t.nombre} (${t.inscritos}/${t.cupo})`).join('\n \n \n \n');
            break;


        case 'map' :
            resultado = talleres.map((t) => t.nombre).join('\n \n \n \n ');
            break;

        case 'filtrer':
            resultado = talleres.filter((t) => t.inscritos >= t.cupo).map((t) => t.nombre).join('\n \n \n \n  ');
            break;

        case 'find':
        resultado = talleres.find((t) => t.instructor === 'Ing. María López').nombre ;
        break;
        
        case 'reduce':
            resultado = talleres.reduce((sum, t) => sum + t.inscritos, 0);
            break;
        
        case 'filtrer-map':
            resultado = talleres.filter((t) => t.inscritos >= t.cupo).map((t) => t.nombre).join('\n \n \n \n ');

    }


    resultadoArreglos.textContent = resultado;
});




const formobjeto = document.getElementById('form-objeto');
const resultadoobjeto = document.getElementById('resultado-objeto')

formobjeto.addEventListener('submit', (evento) =>{
    evento.preventDefault();

    //neecesitamos construi el objeto del taller

    const taller = {
        nombre: document.getElementById('obj-nombre').value,
        instructor : document.getElementById('obj-instructor').value,
        cupo: Number(document.getElementById('obj-cupo').value),
        inscritos : Number(document.getElementById('obj-inscritos').value)
    };

    const operacion = document.getElementById('operacion-objeto').value;

    let resultado;

    switch(operacion){
        case 'keys':
            resultado = JSON.stringify(Object.keys(taller))
            break;
        case 'values':

            resultado = JSON.stringify(Object.values(taller));
            break;
        case 'entries':

            resultado = JSON.stringify(Object.entries(taller).map
        [campo, valor ].join(`\n`)
        );
            break;
        case 'stringify':
            //el profe
            const textoJSON = JSON.stringify(taller, null, 2);
            resultado = `{textoJSON} \n \ tipo ${typeof textoJSON}`; 
            break;
        case 'roundtrip':
            //profe
            const textoJSONS = JSON.stringify(taller, null, 2);
            const objetodevuelta = JSON.parse(textoJSONS);
            resultado = [
                textoJSONS, 
                '',
                `tipo: ${typeof objetodevuelta}`,
                objetodevuelta.nombre
            ].join(`\n`);
            break;
        }
    
        resultadoobjeto.textContent = resultado;
});