const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM Respuesta`,
        []
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `SELECT * FROM Respuesta 
        WHERE cod_respuesta = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { RESPUESTA } = req.body;
    ejecutor.query(
        `INSERT INTO Respuesta 
            (respuesta) 
        VALUES (:respuesta)`,
        [RESPUESTA]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `UPDATE FROM Respuesta 
        SET respuesta = :respuesta 
        WHERE cod_respuesta = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `DELETE FROM Respuesta 
        WHERE cod_respuesta = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

module.exports = router;