const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * 
        FROM Ciencia`, 
        []
    )
    .then((result) => {
        return res.json(result.rows);
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params; //OBTENER ID
    ejecutor.query(
        `SELECT * 
        FROM 
            Ciencia 
        WHERE 
            cod_ciencia = :id`, 
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    });
});

router.post('/', (req, res) => {
    const {nombre, descripcion, cod_carrera, cod_facultad} = req.body; //OBTENER JSON
    ejecutor.query(
        `INSERT INTO Ciencia 
            (nombre, descripcion, cod_carrera, cod_facultad)
        VALUES 
            (:nombre, :descripcion, :cod_carrera, :cod_facultad)`,
        [nombre, descripcion, cod_carrera, cod_facultad]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.put('/:id', (req, res) => {
    const {nombre, descripcion, cod_carrera, cod_facultad} = req.body;
    ejecutor.query(
        `UPDATE Ciencia SET 
            nombre = :nombre, 
            descripcion = :descripcion, 
            cod_carrera = :cod_carrera, 
            cod_facultad = :cod_facultad 
        WHERE
            cod_ciencia = :id`,
        [nombre, descripcion, cod_carrera, cod_facultad, req.params.id]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.delete('/:id', (req, res) => {
    ejecutor.query(
        `DELETE FROM Ciencia 
        WHERE cod_ciencia = _id`,
        [req.params.id]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

module.exports = router;