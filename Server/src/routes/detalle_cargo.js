const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM VIEW_DETALLE_CARGO`,
        []
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.get('/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    ejecutor.query(
        `SELECT * FROM VIEW_DETALLE_CARGO
        WHERE nombre LIKE :nombre`,
        [nombre]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { USUARIO, CARGO, FACULTAD, CARRERA } = req.body;
    console.log(req.body);
    ejecutor.sp(
        `BEGIN
            PROC_C_DETALLE_CARGO(
                :usuario, :cargo, :facultad, :carrera
            );
        END`,
        [USUARIO, CARGO, FACULTAD, CARRERA]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

// router.put('/:nombre', (req, res) => {
//     const id = req.params.id;
//     const { usuario, cargo, facultad, carrera } = req.body;
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
//         `DELETE FROM DetalleCargo
//         WHERE `,
//         []
//     )
//     .then(result => {
//         return res.json(result.rowsAffected);
//     })
// })

module.exports = router;