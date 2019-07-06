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
    const { CONTENIDO, IMAGEN, TAG, TEMA, USUARIO } = req.body;
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
        [CONTENIDO, IMAGEN, TAG, TEMA, USUARIO]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { CONTENIDO, IMAGEN, TAG } = req.body;
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
        [id, CONTENIDO, IMAGEN, TAG]
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