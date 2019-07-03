const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT 
            m.cod_ciencia,
            m.nombre,
            m.descripcion,
            c.nombre AS carrera,
            f.nombre AS facultad
        FROM 
            Ciencia M, 
            Carrera C, 
            Facultad F
        WHERE
            m.cod_carrera = c.cod_carrera AND 
            m.cod_facultad = f.cod_facultad`, 
        []
    )
    .then((result) => {
        return res.json(result.rows);
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params; //OBTENER ID
    ejecutor.query(
        `SELECT 
            m.cod_ciencia,
            m.nombre,
            m.descripcion,
            c.nombre AS carrera,
            f.nombre AS facultad
        FROM 
            Ciencia M, 
            Carrera C, 
            Facultad F
        WHERE
            m.cod_carrera = c.cod_carrera AND 
            m.cod_facultad = f.cod_facultad AND 
            m.cod_ciencia = :id`, 
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    });
});

router.post('/', (req, res) => {
    const {nombre, descripcion, carrera, facultad} = req.body; //OBTENER JSON
    ejecutor.query(
        `BEGIN
            c_ciencia(:nombre, :descripcion, :carrera, :facultad);
            COMMIT;
        END;`,
        [nombre, descripcion, carrera, facultad]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.put('/:id', (req, res) => {
    const {nombre, descripcion, carrera, facultad} = req.body; //OBTENER JSON
    ejecutor.query(
        `BEGIN
            u_ciencia(:id, :nombre, :descripcion, :carrera, :facultad);
            COMMIT;
        END;`,
        [req.params.id, nombre, descripcion, carrera, facultad]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.delete('/:id', (req, res) => {
    ejecutor.query(
        `DELETE FROM Ciencia 
        WHERE cod_ciencia = :id`,
        [req.params.id]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

module.exports = router;