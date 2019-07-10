const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM VIEW_SRC_TEMA`,
        []
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `SELECT * FROM VIEW_SRC_TEMA 
        WHERE cod_source = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { IMAGEN, TAG, COD_TEMA } = req.body;
    console.log(req.body);
    ejecutor.sp(
        `BEGIN 
            PROC_C_SRCTEMA(:imagen, :tag, :tema);
        END`,
        [IMAGEN, TAG, COD_TEMA]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { IMAGEN, TAG } = req.body;
    ejecutor.sp(
        `BEGIN 
            PROC_C_SRCTEMA(:id, :imagen, :tag);
        END`,
        [id, IMAGEN, TAG]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `DELETE FROM Src_tema
        WHERE cod_source = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

module.exports = router;