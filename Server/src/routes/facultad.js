const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.select('SELECT * FROM Facultad', [])
        .then((result) => {
            return res.send(result.rows);
        }
    );
    return res.send('Agrega una facultad');
});

router.get('/:id', (req, res) => {
    const {id} = req.params; //OBTENER ID
    ejecutor.select('SELECT * FROM Facultad WHERE cod_facultad = :id', [id])
        .then(result => {
            return res.send(result.rows);
        }
    );
    return res.send('Agrega una facultad');
});

router.post('/', (req, res) => {
    const {id, nombre, descripcion} = req.body; //OBTENER JSON
    return res.send('Agrega una facultad');
});

router.put('/', (req, res) => {
    return res.send('Actualiza una facultad');
});

router.delete('/', (req, res) => {
    return res.send('ELimina una facultad');
});

module.exports = router;