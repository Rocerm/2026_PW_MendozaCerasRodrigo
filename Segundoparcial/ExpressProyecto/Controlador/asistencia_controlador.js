const asistenciasModel = require('../Modelo/asistencias');
const { validarBoleta } = require('../validaciones');

async function listarAsistencias(req, res) {
    try {
        const tallerId = req.query.taller_id;
        const filtro = tallerId ? { taller_id: Number(tallerId) } : undefined;

        const asistencias =
            await asistenciasModel.consultarlistarAsistencias(filtro);

        res.json(asistencias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al consultar asistencias' });
    }
}

async function registrarAsistencia(req, res) {
    const { taller_id, nombre_alumno, boleta } = req.body;

    if (!taller_id || !nombre_alumno || !boleta) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    if (!validarBoleta(boleta)) {
        return res.status(400).json({ error: 'La boleta debe tener 8 dígitos' });
    }

    try {
        const asistencia = await asistenciasModel.registrarAsistencia({
            taller_id,
            nombre_alumno,
            boleta
        });

        res.status(201).json(asistencia);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al registrar asistencia' });
    }
}

module.exports = { listarAsistencias, registrarAsistencia };