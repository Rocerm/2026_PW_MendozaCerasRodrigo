const pool = require('../de-local');

const COLUMNAS_PUBLICAS ='id, nombre, instructor, fecha, cupo';

async function consultarTalleres() {
    const [filas] = await pool.query(`SELECT ${COLUMNAS_PUBLICAS}
        FROM talleres ORDER BY id`); 
    return filas;
}

async function registrarTaller({nombre, instructor, fecha, cupo}) {
    const [info] = await pool.query(`INSERT INTO talleres (nombre, instructor, fecha, cupo) VALUES (?, ?, ?, ?)`,
        [nombre, instructor, fecha, cupo]);
    return obtenerPorId(info.insertId);
}

module.exports = {consultarTalleres, registrarTaller};