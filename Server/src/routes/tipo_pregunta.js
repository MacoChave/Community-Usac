const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    return res.json({message: 'Get question type'});
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Get question type ' + id});
})

router.post('/', (req, res) => {
    return res.json({message: 'Create question type'});
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Update question type ' + id});
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Delete question type ' + id});
})

module.exports = router;