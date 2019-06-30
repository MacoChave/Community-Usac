const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.select('SELECT * FROM Carrera', []).then((result) => {
        return res.send(result.rows);
    });
    return res.send('Agrega una facultad');
});

router.get('/:id', (req, res) => {
    const {id} = req.params; //OBTENER ID
    ejecutor.select('SELECT * FROM Carrera WHERE cod_carrera = :id', [id])
        .then(result => {
            return res.send(result.rows);
        }
    );
    return res.send('Agrega una facultad');
});

router.post('/', (req, res) => {
    return res.send('Agrega una carrera');
});

router.put('/', (req, res) => {
    return res.send('Actualiza una carrera');
});

router.delete('/', (req, res) => {
    return res.send('ELimina una carrera');
});

module.exports = router;