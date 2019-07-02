const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query('SELECT * FROM Carrera', []).then((result) => {
        return res.json(result.rows);
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params; //OBTENER ID
    ejecutor.query('SELECT * FROM Carrera WHERE cod_carrera = :id', [id])
        .then(result => {
            return res.json(result.rows);
        }
    );
});

router.post('/', (req, res) => {
    const {cod_facultad, nombre, descripcion} = req.body;
    ejecutor.query(
        `INSERT INTO Carrera 
        (cod_facultad, nombre, descripcion)
        VALUES 
        (:cod_facultad, :nombre, :descripcion)`,
        [cod_facultad, nombre, descripcion]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.put('/:id', (req, res) => {
    const {cod_facultad, nombre, descripcion} = req.body;
    ejecutor.query(
        `UPDATE Carrera SET
            cod_facultad = :cod_facultad, 
            nombre = :nombre, 
            descripcion = :descripcion
        WHERE
            cod_carrera = :id`,
        [cod_facultad, nombre, descripcion, req.params.id]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.delete('/:id', (req, res) => {
    ejecutor.query(
        `DELETE FROM Carrera 
        WHERE cod_carrera = :id`,
        [req.params.id]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

module.exports = router;