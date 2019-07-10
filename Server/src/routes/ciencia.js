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
            cod_ciencia = :id`, 
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    });
});

router.get('/carrera/:carrera', (req, res) => {
    const{ CARRERA } = req.params.carrera;
    ejecutor.query(
        `SELECT 
            m.cod_ciencia, m.nombre
        FROM 
            Ciencia M, Carrera C
        WHERE 
            m.cod_carrera = c.cod_carrera AND 
            m.cod_carrera = :carrera`,
        [CARRERA]
    )
    .then(result => {
        return res.json(result.rows);
    });
});

router.post('/', (req, res) => {
    const {NOMBRE, DESCRIPCION, COD_CARRERA, COD_FACULTAD} = req.body; //OBTENER JSON
    ejecutor.sp(
        `BEGIN
            PROC_C_CIENCIA(
                :nombre, :descripcion, :facultad, :carrera
            );
        END`,
        [NOMBRE, DESCRIPCION, COD_FACULTAD, COD_CARRERA]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const {NOMBRE, DESCRIPCION} = req.body;
    ejecutor.sp(
        `BEGIN
            PROC_U_CIENCIA(
                :id, :nombre, :descripcion
            );
        END`,
        [id, NOMBRE, DESCRIPCION]
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