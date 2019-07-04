const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM VIEW_CIENCIA`, 
        []
    )
    .then((result) => {
        return res.json(result.rows);
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params; //OBTENER ID
    ejecutor.query(
        `SELECT * FROM VIEW_CIENCIA
        WHERE
            m.cod_ciencia = :id`, 
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    });
});

router.post('/', (req, res) => {
    const {nombre, descripcion, carrera, facultad} = req.body; //OBTENER JSON
    ejecutor.query(
        `BEGIN
            PROC_C_CIENCIA(
                :nombre, :descripcion, :facultad, :carrera
            );
            COMMIT;
        END`,
        [nombre, descripcion, facultad, carrera]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const {nombre, descripcion} = req.body;
    ejecutor.query(
        `BEGIN
            PROC_U_CIENCIA(
                :id, :nombre, :descripcion
            );
            COMMIT;
        END;`,
        [id, nombre, descripcion]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.delete('/:id', (req, res) => {
    ejecutor.query(
        `DELETE FROM Ciencia 
        WHERE cod_ciencia = :id`,
        [req.params.id]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

module.exports = router;