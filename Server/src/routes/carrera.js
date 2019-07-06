const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM VIEW_CARRERA`, 
        []
    )
    .then((result) => {
        return res.json(result.rows);
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params; //OBTENER ID
    ejecutor.query(
        `SELECT * FROM VIEW_CARRERA
        WHERE cod_carrera = :id`
        , [id]
    )
    .then(result => {
        return res.json(result.rows);
    });
});

router.post('/', (req, res) => {
    const {FACULTAD, NOMBRE, DESCRIPCION} = req.body;
    ejecutor.query(
        `BEGIN
            PROC_C_CARRERA(
                :facultad, :nombre, :descripcion
            );
            COMMIT;
        END`,
        [FACULTAD, NOMBRE, DESCRIPCION]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const {FACULTAD, NOMBRE, DESCRIPCION} = req.body;
    ejecutor.query(
        `BEGIN
            PROC_U_CARRERA(
                :cod_carrera, :facultad, :nombre, :descripcion
            );
            COMMIT;
        END`,
        [id, FACULTAD, NOMBRE, DESCRIPCION]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.delete('/:id', (req, res) => {
    ejecutor.query(
        `DELETE FROM Carrera 
        WHERE cod_carrera = :id`,
        [req.params.id]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

module.exports = router;