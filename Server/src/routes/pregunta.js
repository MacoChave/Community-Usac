const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    return res.json({message: 'Get pregunta'});
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Get pregunta ' + id});
})

router.post('/', (req, res) => {
    return res.json({message: 'Create pregunta'});
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Update pregunta ' + id});
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Delete pregunta ' + id});
})

module.exports = router;