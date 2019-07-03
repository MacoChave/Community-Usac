const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    return res.json({message: 'Get rol detail'});
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Get rol detail ' + id});
})

router.post('/', (req, res) => {
    return res.json({message: 'Create rol detail'});
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Update rol detail ' + id});
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Delete rol detail ' + id});
})

module.exports = router;