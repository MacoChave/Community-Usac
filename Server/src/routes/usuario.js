const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.select(
        `SELECT * 
        FROM Usuario`, 
        [])
        .then((result) => {
            return res.send(result.rows);
        }
    );
    return res.send('Agrega una facultad');
});

router.get('/:id', (req, res) => {
    const {id} = req.params; //OBTENER ID
    ejecutor.select(
        `SELECT * 
        FROM Usuario 
        WHERE 
            cod_usuario = :id`, 
        [id])
        .then(result => {
            return res.send(result.rows);
        }
    );
    return res.send('Agrega una facultad');
});

router.get('/login', (req, res) => {
    const {nombre, clave, cod_rol} = req.body;
    ejecutor.select(
        `SELECT *
        FROM Usuario
        WHERE 
            nombre LIKE :nombre AND 
            clave LIKE :clave AND
            cod_rol = :cod_rol`,
        [nombre, clave, cod_rol]
    )
    .then(result => {
        return res.send(result.rows);
    })
})

router.post('/', (req, res) => {
    const {carnet, no_registro, nombre, url_foto, correo, telefono, clave} = req.body;
    return res.send('Agrega una usuario');
});

router.put('/', (req, res) => {
    return res.send('Actualiza una usuario');
});

router.delete('/', (req, res) => {
    return res.send('ELimina una usuario');
});

module.exports = router;