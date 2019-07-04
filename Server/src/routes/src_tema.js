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
        WHERE cod_srs_tema = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { imagen, tag, tema } = req.body;
    ejecutor.query(
        `BEGIN 
            PROC_C_SRCTEMA(:imagen, :tag, :tema);
            COMMIT;
        END`,
        [imagen, tag, tema]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { imagen, tag, tema } = req.body;
    ejecutor.query(
        `BEGIN 
            PROC_C_SRCTEMA(:id, :imagen, :tag, :tema);
            COMMIT;
        END`,
        [id, imagen, tag, tema]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `DELETE FROM Src_tema
        WHERE cod_srs_tema = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

module.exports = router;