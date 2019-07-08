const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM Chat`
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/one', (req, res) => {
    const { EMISOR, RECEPTOR } = req.params.body;
    ejecutor.query(
        `SELECT * FROM Chat
        WHERE 
            cod_emisor = :id_emisor AND
            cod_receptor = :id_receptor`,
        [EMISOR, RECEPTOR]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { EMISOR, RECEPTOR, CHAT } = req.params.body;
    ejecutor.sp(
        `BEGIN 
            PROC_C_CHAT(
                :emisor, :receptor, :chat
            );
        END`,
        [EMISOR, RECEPTOR, CHAT]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

// router.delete('/', (req, res) => {
//     const { COD_EMISOR, COD_RECEPTOR } = req.params.body;
//     ejecutor.query(
//         `DELETE FROM Chat
//         WHERE 
//             cod_emisor = :cod_emisor AND 
//             cod_receptor = :cod_receptor`,
//         [COD_EMISOR, COD_RECEPTOR]
//     )
//     .then(result => {
//         return res.json(result.rowsAffected);
//     })
// })

module.exports = router;