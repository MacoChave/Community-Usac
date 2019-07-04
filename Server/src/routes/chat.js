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
    const { emisor, receptor } = req.params.body;
    ejecutor.query(
        `SELECT * FROM Chat
        WHERE 
            cod_emisor = :id_emisor AND
            cod_receptor = :id_receptor`,
        [emisor, receptor]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { emisor, receptor, chat } = req.params.body;
    ejecutor.query(
        `BEGIN 
            PROC_C_CHAT(
                :emisor, :receptor, :chat
            );
            COMMIT;
        END`,
        [emisor, receptor, chat]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

// router.put('/:id', (req, res) => {
//     const id = req.params.id;
//     return res.json({message: 'Update chat ' + id});
// })

router.delete('/:id', (req, res) => {
    const { cod_emisor, cod_receptor } = req.params.body;
    ejecutor.query(
        `DELETE FROM Chat
        WHERE 
            cod_emisor = :cod_emisor AND 
            cod_receptor = :cod_receptor`,
        [cod_emisor, cod_receptor]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

module.exports = router;