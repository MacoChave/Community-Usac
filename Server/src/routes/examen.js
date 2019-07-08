const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * FROM VIEW_EXAMEN`,
        []
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `SELECT * FROM VIEW_EXAMEN
        WHERE cod_examen = :id`,
        [id]
    )
    .then(result => {
        return res.json(result.rows);
    })
})

router.post('/', (req, res) => {
    const { TITULO, TEMA, DURACION, LOG, USUARIO, CIENCIA, FACULTAD, CARRERA } = req.body;
    ejecutor.sp(
        `BEGIN
            PROC_C_EXAMEN(
                :titulo, :tema, :duracion, :log, :usuario, :ciencia, :facultad, :carrera
            ); 
        END`,
        [TITULO, TEMA, DURACION, LOG, USUARIO, CIENCIA, FACULTAD, CARRERA ]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.put('/edit/:id', (req, res) => {
    const id = req.params.id;
    const { TITULO, TEMA, DURACION } = req.body;
    ejecutor.query(
        `BEGIN 
            PROC_U_EXAMEN(
                :id, :titulo, :tema, :duracion
            );
        END`,
        [id, TITULO, TEMA, DURACION]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.put('/launch/:id', (req, res) => {
    const id = req.params.id;
    const { SALA } = req.body;
    ejecutor.query(
        `BEGIN 
            PROC_l_EXAMEN(
                :id, :sala
            );
        END`,
        [id, SALA]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    ejecutor.query(
        `BEGIN 
            PROC_D_EXAMEN (
                :id
            );
        END`,
        [id]
    )
    .then(result => {
        return res.json(result.rowsAffected);
    })
})

module.exports = router;