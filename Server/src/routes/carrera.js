const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.select('SELECT * FROM Carrera', []);
    return res.send('Lista todas las carreras');
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