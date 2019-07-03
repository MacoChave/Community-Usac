const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    return res.json({message: 'Get assign'});
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Get assign ' + id});
})

router.post('/', (req, res) => {
    return res.json({message: 'Create assign'});
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Update assign ' + id});
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Delete assign ' + id});
})

module.exports = router;