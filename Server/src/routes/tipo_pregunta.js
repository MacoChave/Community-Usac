const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM Tipo_pregunta`,
        []
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `SELECT * FROM Tipo_pregunta 
        WHERE cod_tipo_pregunta = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { NOMBRE } = req.body;
    ejecutor.query(
        `INSERT INTO Tipo_pregunta 
            (nombre) 
        VALLUES (:nombre)`,
        [NOMBRE]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { NOMBRE } = req.body;
    ejecutor.query(
        `UPDATE FROM Tipo_pregunta 
        SET nombre = :nombre 
        WHERE cod_tipo_pregunta = :id`,
        [NOMBRE, id]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `DELETE FROM Tipo_pregunta 
        WHERE cod_tipo_pregunta = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

module.exports = router;