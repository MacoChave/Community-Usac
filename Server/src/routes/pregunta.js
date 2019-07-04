const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM VIEW_PREGUNTA`,
        []
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `SELECT * FROM VIEW_PREGUNTA 
        WHERE cod_pregunta = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { descripcion, tipo } = req.body;
    ejecutor.query(
        `BEGIN
            PROC_C_PREGUNTA(:descripcion, :tipo);
            COMMIT;
        END`,
        [descripcion, tipo]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { descripcion, tipo } = req.body;
    ejecutor.query(
        `BEGIN
            PROC_U_PREGUNTA(:id, :descripcion, :tipo);
            COMMIT;
        END`,
        [id, descripcion, tipo]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `DELETE FROM Pregunta 
        WHERE cod_pregunta = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

module.exports = router;