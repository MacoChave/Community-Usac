const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM VIEW_TEMA`,
        []
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `SELECT * FROM VIEW_TEMA 
        WHERE cod_tema = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { usuario, titulo, descripcion } = req.body;
    ejecutor.query(
        `BEGIN
            PROC_C_TEMA(:usuario, :titulo, :descripcion);
            COMMIT;
        END`,
        [usuario, titulo, descripcion]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { usuario, titulo, descripcion } = req.body;
    ejecutor.query(
        `BEGIN
            PROC_U_TEMA(:id :titulo, :descripcion);
            COMMIT;
        END`,
        [id, titulo, descripcion]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const { motivo } = req.body;
    ejecutor.query(
        `BEGIN 
            PROC_D_TEMA(:id, :motivo);
            COMMIT;
        END`,
        [id, motivo]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

module.exports = router;