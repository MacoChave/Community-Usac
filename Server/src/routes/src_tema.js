const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    return res.json({message: 'Get source tema'});
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Get source tema ' + id});
})

router.post('/', (req, res) => {
    return res.json({message: 'Create source tema'});
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Update source tema ' + id});
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Delete source tema ' + id});
})

module.exports = router;