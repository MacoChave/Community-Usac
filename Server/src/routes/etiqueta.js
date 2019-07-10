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

router.get('/:tema', (req, res) => {
    const TEMA = req.params.id;
    ejecutor.query(
        `SELECT * FROM VIEW_ETIQUETA 
        WHERE 
        tema LIKE :tema`,
        [TEMA]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { COD_TEMA, COD_CIENCIA, COD_FACULTAD, COD_CARRERA } = req.body;
    console.log(req.body);
    ejecutor.sp(
        `BEGIN
            PROC_C_ETIQUETA(
                :tema, :ciencia, :facultad, :carrera
            );
        END`,
        [COD_TEMA, COD_CIENCIA, COD_FACULTAD, COD_CARRERA]
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
//     const { COD_TEMA, COD_CIENCIA } = req.body;
//     ejecutor.query(
//         `DELETE FROM Etiqueta 
//         WHERE 
//             cod_tema = :tema, 
//             cod_ciencia = :ciencia`,
//         [COD_TEMA, COD_CIENCIA]
//     )
//     .then(result => {
//         return res.json(result.rowsAffected);
//     })
// })

module.exports = router;