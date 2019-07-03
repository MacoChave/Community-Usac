const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    return res.json({message: 'Get tema'});
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Get tema ' + id});
})

router.post('/', (req, res) => {
    return res.json({message: 'Create tema'});
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Update tema ' + id});
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Delete tema ' + id});
})

module.exports = router;