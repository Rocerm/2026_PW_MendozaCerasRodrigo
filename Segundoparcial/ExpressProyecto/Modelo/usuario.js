const pool = require('../de-local');

const COLUMNAS_PUBLICAS ='id, nombre, correo, boleta, rol';

//consultar todos lo uuarios

async function listar() {
    const [filas] = await pool.query(`SELECT ${COLUMNAS_PUBLICAS}
        FROM usuarios ORDER BY id`);
        return filas;
}

//Conslutar por ID

async function obtenerPorId() {
    const [filas] = await pool.query(`SELECT ${COLUMNAS_PUBLICAS}
        FROM usuarios WHERE id = ?`, [id]);
        return filas[0];
}

async function crear ({nombre, correo, contrenaHash, boleta,rol
}) {
    const [info] = await pool.query(`INSERT INTO usuarios (nombre, correo, constrasena_hash, boleta, rol) VALUES (?, ?, ?, ?, ?)`

    [nombre, correo, contrenaHash, boleta, rol || 'alumno']);
    return obtenerPorId(info.inertId)
}

//Actualizar un alumno


async function actualizar(id, {nombre, correo, rol}) {
    
    const cambios= Object.entries({nombre, correo, rol}).filter(([, valor])=> valor !== undefined ) ;

    if(cambios.length === 0) return obtenerPorId(id);

    const columnas = cambios.map(([columna])=>  `${columna} = ? `).join(', ');

    const[info] = await pool.query(`UPDATE usuarios SET ${columnas} WHERE id = ?`,
     [...cambios.map(([, valor]) => valor), id]);

        if(info.affectedRows === 0) return undefined;
        return obtenerPorId(id);
}

async function eliminar() {
    const [filas] = await pool.query(`DELETE FROM USUARIOS WHERE
        id = ?`, [id]);
        return info.affectedRows > 0 ;
    }


async function buscarporCorreo(correo) {

    const [filas] = await pool.query('SELECT * FROM usuarios WHERE correo = ?' , [correo]);
    return filas[0];
}

//nosenose

module.exports = {listar, obtenerPorId, crear, actualizar, eliminar, buscarporCorreo};

// crear entudades por talleres y asistencias
//Para taller hay que crear las funciones, consultar por taler y regustrarse por taller
//paraasistencias
//Registrar asistencia en el taller , consultar lista de aisstencia