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
        return res.json(result.rows);
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
        return res.json(result.rows);
    });
});

router.post('/login', (req, res) => {
    const {nombre, clave, rol} = req.body;
    ejecutor.query(
        `SELECT * 
        FROM Usuario U, Rol R
        WHERE
            r.cod_rol = u.cod_rol AND 
            u.nombre LIKE :nombre AND 
            u.clave LIKE :clave AND 
            r.rol LIKE :rol`,
        [nombre, clave, rol]
    )
    .then(result => {
        return res.json(result.rows);
    });
});

router.post('/', (req, res) => {
    const {carnet, no_registro, nombre, url_foto, correo, telefono, clave, cod_rol} = req.body;
    ejecutor.query(
        `INSERT INTO Usuario 
            (carnet, no_registro, nombre, url_foto, correo, telefono, clave, cod_rol) 
        VALUES 
            (:carnet, :no_registro, :nombre, :url_foto, :correo, :telefono, :clave, :cod_rol)`,
        [carnet, no_registro, nombre, url_foto, correo, telefono, clave, cod_rol]
    )
    then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.put('/:id', (req, res) => {
    const {carnet, no_registro, nombre, url_foto, correo, telefono, clave} = req.body;
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
        [carnet, no_registro, nombre, url_foto, correo, telefono, clave, req.params.id]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

router.delete('/:id', (req, res) => {
    ejecutor.query(
        `DELETE FROM Usuario 
        WHERE cod_usuario = :id`,
        [req.params.id]
    )
    .then(result => {
        return res.json({message: result.rowsAffected});
    });
});

module.exports = router;