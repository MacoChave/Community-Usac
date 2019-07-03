const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    return res.json({message: 'Get rol'});
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Get rol ' + id});
})

router.post('/', (req, res) => {
    return res.json({message: 'Create rol'});
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Update rol ' + id});
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Delete rol ' + id});
})

module.exports = router;