const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    return res.json({message: 'Get examen'});
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Get examen ' + id});
})

router.post('/', (req, res) => {
    return res.json({message: 'Create examen'});
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Update examen ' + id});
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Delete examen ' + id});
})

module.exports = router;