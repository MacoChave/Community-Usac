const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    ejecutor.select('SELECT * FROM Facultad', []).then((res) => {
        console.log(res.rows);
    });
    return res.send('Lista de facultades');
});

router.get('/:id', (req, res) => {
    const {id} = req.params; //OBTENER ID
    return res.send('Lista todas facultad por id');
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