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

// router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     ejecutor.query(
//         `SELECT * FROM VIEW_DETALLEPREG 
//         WHERE `,
//         []
//     )
//     .then(result => {
//         return res.json(result.rows);
//     })
// })

router.post('/', (req, res) => {
    const { PREGUNTA, EXAMEN, USUARIO } = req.body;
    ejecutor.query(
        `BEGIN
            PROC_C_DETALLEPREG(
                :pregunta, :examen, :usuario
            );
            COMMINT;
        END`,
        [PREGUNTA, EXAMEN, USUARIO]
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

// router.delete('/:id', (req, res) => {
//     const id = req.params.id;
//     ejecutor.query(
//         `DELETE FROM Detalle_pregunta `,
//         []
//     )
//     .then(result => {
//         return res.json(result.rowsAffected);
//     })
// })

module.exports = router;