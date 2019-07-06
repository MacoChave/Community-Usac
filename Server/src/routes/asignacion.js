const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM VIEW_ASIGNACION`,
        []
    )
    .then(result => {
        return res.json(result.rows);
    })
})

// router.get('/:id', (req, res) => {
//     const id = req.params.id;
//     ejecutor.query(
//         `SELECT * FROM VIEW_ASIGNACION
//         WHERE `,
//         []
//     )
//     .then(result => {
//         return res.json(result.rows);
//     })
// })

router.post('/', (req, res) => {
    const { USUARIO, CIENCIA } = req.body;
    ejecutor.query(
        `BEGIN
            PROC_C_ASIGNACION(
                :usuario, :ciencia
            );
            COMMIT;
        END`,
        [USUARIO, CIENCIA]
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

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const { USUARIO, CIENCIA } = req.body;
    ejecutor.query(
        `DELETE FROM Asignacion
        WHERE 
            cod_usuario = :usuario AND 
            cod_ciencia = :ciencia`,
        [USUARIO, CIENCIA]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

module.exports = router;