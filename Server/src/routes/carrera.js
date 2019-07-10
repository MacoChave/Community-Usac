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
        WHERE cod_carrera = :id`, 
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    });
});

router.get('/facultad/:facultad', (req, res) => {
    const COD_FACULTAD = req.params.facultad;
    ejecutor.query(
        `SELECT 
            f.cod_facultad, f.nombre AS facultad, c.nombre
        FROM 
            Carrera C, Facultad F  
        WHERE 
            c.cod_facultad = f.cod_facultad AND 
            f.cod_facultad = :facultad`,
        [COD_FACULTAD]
    )
    .then(result => {
        return res.json(result.rows);
    });
});

router.post('/', (req, res) => {
    const {COD_FACULTAD, NOMBRE, DESCRIPCION} = req.body;
    console.log(req.body);
    ejecutor.sp(
        `BEGIN
            PROC_C_CARRERA(
                :facultad, :nombre, :descripcion
            );
        END`,
        [COD_FACULTAD, NOMBRE, DESCRIPCION]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const {COD_FACULTAD, NOMBRE, DESCRIPCION} = req.body;
    console.log(req.body);
    ejecutor.sp(
        `BEGIN
            PROC_U_CARRERA(
                :cod_carrera, :facultad, :nombre, :descripcion
            );
        END`,
        [id, COD_FACULTAD, NOMBRE, DESCRIPCION]
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