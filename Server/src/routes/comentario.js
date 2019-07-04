const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM VIEW_COMENTARIO`,
        []
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `SELECT * FROM VIEW_COMENTARIO 
        WHERE cod_comentario = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { contenido, imagen, tag, tema, usuario } = req.body;
    ejecutor.query(
        `BEGIN
            PROC_C_COMENTARIO(
                :contenido, 
                :imagen, 
                :tag, 
                :usuario
            );
            COMMIT;
        END`,
        [contenido, imagen, tag, tema, usuario]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { contenido, imagen, tag } = req.body;
    ejecutor.query(
        `BEGIN
            PROC_U_COMENTARIO(
                :id, 
                :contenido, 
                :imagen, 
                :tag
            );
            COMMIT;
        END`,
        [id, contenido, imagen, tag]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `BEGIN 
            PROC_D_EXAMEN(:id)
            COMMIT;
        END`,
        [id]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

module.exports = router;