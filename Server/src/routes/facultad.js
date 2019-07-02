const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM Facultad`, 
        []
    )
    .then((result) => {
        return res.json(result.rows);
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params; //OBTENER ID
    ejecutor.query(
        `SELECT * FROM Facultad 
        WHERE cod_facultad = :id`, 
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    });
});

router.post('/', (req, res) => {
    const {nombre, descripcion} = req.body; //OBTENER JSON
    ejecutor.query(
        `INSERT INTO Facultad 
            (nombre, descripcion) 
        VALUES 
            (:nombre, :descripcion)`,
        [nombre, descripcion]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.put('/', (req, res) => {
    const {nombre, descripcion} = req.body;
    ejecutor.query(
        `UPDATE Facultad SET 
            nombre = :nombre, 
            descripcion = :descripcion
        WHERE 
            cod_facultad = :id`,
        [nombre, descripcion, req.params.id]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.delete('/:id', (req, res) => {
    ejecutor.query(
        `DELETE FROM Facultad 
        WHERE cod_facultad = :id`,
        [req.params.id]
    )
    then(result => {
        return res.json({message: result.rowsAffected});
    });
});

module.exports = router;