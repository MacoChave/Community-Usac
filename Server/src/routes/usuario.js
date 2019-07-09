const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.query(
        `SELECT * 
        FROM VIEW_USUARIO`, 
        []
    )
    .then((result) => {
        res.json(result.rows);
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params; //OBTENER ID
    ejecutor.query(
        `SELECT * 
        FROM VIEW_USUARIO 
        WHERE cod_usuario = :id`, 
        [id]
    )
    .then(result => {
        res.json(result.rows);
    });
});

router.post('/login', (req, res) => {
    const {NOMBRE, CLAVE, ROL} = req.body;
    console.log(req.body);
    ejecutor.query(
        `SELECT * FROM VIEW_USUARIO 
        WHERE 
            nombre LIKE :nombre AND 
            clave LIKE :clave AND 
            rol LIKE :rol`,
        [NOMBRE, CLAVE, ROL]
    )
    .then(result => {
        res.json(result.rows);
    });
});

router.post('/', (req, res) => {
    const {CARNET, NO_REGISTRO, NOMBRE, URL_FOTO, CORREO, TELEFONO, CLAVE, ROL} = req.body;
    console.log(req.body);
    ejecutor.sp(
        `BEGIN
            PROC_C_USUARIO(
                :carnet, :no_registro, :nombre, :url_foto, :correo, :telefono, :clave, :rol
            );
        END`,
        [CARNET, NO_REGISTRO, NOMBRE, URL_FOTO, CORREO, TELEFONO, CLAVE, ROL]
    )
    .then(result => {
        res.json({message: result.rowsAffected});
    });
});

router.put('/:id', (req, res) => {
    const {CARNET, NO_REGISTRO, NOMBRE, URL_FOTO, CORREO, TELEFONO, CLAVE} = req.body;
    ejecutor.query(
        `UPDATE Usuario SET 
            carnet = :carnet,
            no_registro = :no_registro, 
            nombre = :nombre, 
            url_foto = :url_foto, 
            correo = :correo, 
            telefono = :telefono, 
            clave = :clave
        WHERE 
            cod_usuario = :id`,
        [CARNET, NO_REGISTRO, NOMBRE, URL_FOTO, CORREO, TELEFONO, CLAVE, req.params.id]
    )
    .then(result => {
        res.json({message: result.rowsAffected});
    });
});

router.delete('/:id', (req, res) => {
    ejecutor.query(
        `DELETE FROM Usuario 
        WHERE cod_usuario = :id`,
        [req.params.id]
    )
    .then(result => {
        res.json({message: result.rowsAffected});
    });
});

module.exports = router;