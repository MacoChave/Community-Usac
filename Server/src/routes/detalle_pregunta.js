const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM VIEW_DETALLEPREG`,
        []
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/examen', (req, res) => {
    const { EXAMEN } = req.params.body;
    ejecutor.query(
        `SELECT * FROM VIEW_DETALLEPREG 
        WHERE 
        examen = :examen`,
        [EXAMEN]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { PREGUNTA, EXAMEN } = req.body;
    ejecutor.sp(
        `BEGIN
            PROC_C_DETALLEPREG(
                :pregunta, :examen
            );
        END`,
        [PREGUNTA, EXAMEN]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

// router.put('/:id', (req, res) => {
//     const id = req.params.id;
//     const {  } = req.body;
//     ejecutor.query(
//         ``,
//         []
//     )
//     .then(result => {
//         return res.json(result.rowsAffected);
//     })
// })

// router.delete('/', (req, res) => {
//     const { PREGUNTA, EXAMEN } = req.params.id;
//     ejecutor.query(
//         `DELETE FROM Detalle_pregunta 
//         WHERE 
//         cod_pregunta = :pregunta AND 
//         cod_examen = :examen`,
//         [PREGUNTA, EXAMEN]
//     )
//     .then(result => {
//         return res.json(result.rowsAffected);
//     })
})

module.exports = router;