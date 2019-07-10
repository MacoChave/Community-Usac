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

router.post('/pregunta', (req, res) => {
    const { COD_PREGUNTA } = req.params.body;
    ejecutor.query(
        `SELECT 
            dp.cod_pregunta, e.titulo AS examen, 
            p.descripcion AS pregunta
        FROM 
            Detalle_pregunta DP, Pregunta P, Examen E
        WHERE 
            dp.cod_pregunta = p.cod_pregunta AND 
            dp.cod_examen = e.cod_examen`,
        [COD_PREGUNTA]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { COD_PREGUNTA, COD_RESPUESTA, CORRECTA } = req.body;
    ejecutor.sp(
        `BEGIN 
            PROC_C_DETALLERES(:pregunta, :respuesta, :correcta)
        END`,
        [COD_PREGUNTA, COD_RESPUESTA, CORRECTA]
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
//     const { PREGUNTA, RESPUESTA } = req.body;
//     ejecutor.query(
//         `DELETE FROM Detalle_respuesta 
//         WHERE 
//         cod_pregunta = :pregunta AND 
//         cod_respuesta = :respuesta`,
//         [PREGUNTA, RESPUESTA]
//     )
//     .then(result => {
//         return res.json(result.rowsAffected);
//     })
// })

module.exports = router;