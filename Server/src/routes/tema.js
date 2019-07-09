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
    const { USUARIO, TITULO, DESCRIPCION } = req.body;
    console.log(req.body);
    ejecutor.sp(
        `BEGIN
            PROC_C_TEMA(:usuario, :titulo, :descripcion);
        END`,
        [USUARIO, TITULO, DESCRIPCION]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { USUARIO, TITULO, DESCRIPCION } = req.body;
    ejecutor.sp(
        `BEGIN
            PROC_U_TEMA(:id :titulo, :descripcion);
        END`,
        [id, TITULO, DESCRIPCION]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const { MOTIVO } = req.body;
    ejecutor.sp(
        `BEGIN 
            PROC_D_TEMA(:id, :motivo);
        END`,
        [id, MOTIVO]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

module.exports = router;