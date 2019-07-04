const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM Rol`,
        []
    )
    .then(result => {
        return res.json(result.rows);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `SELECT * FROM Rol 
        WHERE cod_rol = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    });
});

router.post('/', (req, res) => {
    const { rol } = req.body;
    ejecutor.query(
        `INSERT INTO Rol (rol)
        VALUES (:rol)`,
        [rol]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { rol } = req.body;
    ejecutor.query(
        `UPDATE Rol SET
        rol = :rol
        WHERE cod_rol = :id`,
        [rol, id]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `DELETE FROM Rol 
        WHERE cod_rol = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    });
});

module.exports = router;