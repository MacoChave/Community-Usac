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

router.get('/:usuario', (req, res) => {
    const USUARIO = req.params.usuario;
    ejecutor.query(
        `SELECT * 
        FROM VIEW_ASIGNACION
        WHERE 
        usuario LIKE :usuario`,
        [USUARIO]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { USUARIO, CIENCIA, FACULTAD, CARRERA } = req.body;
    ejecutor.sp(
        `BEGIN
            PROC_C_ASIGNACION(
                :usuario, :ciencia, :facultad, :carrera
            );
        END`,
        [USUARIO, CIENCIA, FACULTAD, CARRERA]
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
//     const { USUARIO, CIENCIA, FACULTAD, CARRERA } = req.body;
//     ejecutor.query(
//         `DELETE FROM Asignacion
//         WHERE 
//             cod_usuario = :usuario AND 
//             cod_ciencia = :ciencia`,
//         [USUARIO, CIENCIA]
//     )
//     .then(result => {
//         return res.json(result.rowsAffected);
//     })
// })

module.exports = router;