const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    return res.json({message: 'Get answer detail'});
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Get answer detail ' + id});
})

router.post('/', (req, res) => {
    return res.json({message: 'Create answer detail'});
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Update answer detail ' + id});
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: 'Delete answer detail ' + id});
})

module.exports = router;