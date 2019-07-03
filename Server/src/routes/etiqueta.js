const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    return res.json({message: 'Get etiqueta'});
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Get etiqueta ' + id});
})

router.post('/', (req, res) => {
    return res.json({message: 'Create etiqueta'});
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Update etiqueta ' + id});
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Delete etiqueta ' + id});
})

module.exports = router;