const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    return res.json({message: 'Get question detail'});
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Get question detail ' + id});
})

router.post('/', (req, res) => {
    return res.json({message: 'Create question detail'});
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Update question detail ' + id});
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Delete question detail ' + id});
})

module.exports = router;