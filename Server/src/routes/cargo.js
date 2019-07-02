const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM Cargo`, 
        []
    )
    .then((result) => {
        return res.json(result.rows);
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params; //OBTENER ID
    ejecutor.query(
        `SELECT * FROM Cargo 
        WHERE cod_cargo = :id`, 
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    });
});

router.post('/', (req, res) => {
    const {cargo} = req.body; //OBTENER JSON
    ejecutor.query(
        `INSERT INTO Cargo (cargo) 
        VALUES (:cargo)`,
        [cargo]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    })
});

router.put('/:id', (req, res) => {
    const {cargo} = req.body;
    ejecutor.query(
        `UPDATE Cargo SET 
            cargo = :cargo 
        WHERE 
            cod_cargo = :id`,
        [cargo, req.params.id]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.delete('/:id', (req, res) => {
    ejecutor.query(
        `DELETE FROM Cargo 
        WHERE cod_cargo = :id`,
        [req.params.id]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

module.exports = router;