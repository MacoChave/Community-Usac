const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM VIEW_ETIQUETA`,
        []
    )
    .then(result => {
        return res.json(result.rows);
    })
})

// router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     ejecutor.query(
//         `SELECT * FROM VIEW_ETIQUETA 
//         WHERE `,
//         []
//     )
//     .then(result => {
//         return res.json(result.rows);
//     })
// })

router.post('/', (req, res) => {
    const { TEMA, CIENCIA } = req.body;
    ejecutor.sp(
        `BEGIN
            PROC_C_ETIQUETA(:tema, :ciencia);
        END`,
        [TEMA, CIENCIA]
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

router.delete('/', (req, res) => {
    const { COD_TEMA, COD_CIENCIA } = req.body;
    ejecutor.query(
        `DELETE FROM Etiqueta 
        WHERE 
            cod_tema = :tema, 
            cod_ciencia = :ciencia`,
        [COD_TEMA, COD_CIENCIA]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

module.exports = router;