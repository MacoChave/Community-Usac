const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM view_detalle_cargo`,
        []
    )
    .then(result => {
        console.log(result);
        return res.json(result.rows);
    })
})

router.get('/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    ejecutor.query(
        `SELECT * 
        FROM 
            VIEW_DETALLE_CARGO
        WHERE 
            nombre LIKE :nombre`,
        [nombre]
    )
    .then(result => {
        console.log(result.rows);
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { COD_USUARIO, COD_CARGO, COD_FACULTAD, COD_CARRERA } = req.body;
    console.log(req.body);
    ejecutor.sp(
        `BEGIN
            PROC_C_DETALLE_CARGO(
                :nombre, :cargo, :facultad, :carrera
            );
        END`,
        [COD_USUARIO, COD_CARGO, COD_FACULTAD, COD_CARRERA]
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