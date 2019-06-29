const { Router } = require('express');
const ejecutor = require('../db/ejecutor');

const router = new Router();

router.get('/', (req, res) => {
    const data = {
        "name": "API Community USAC",
        "autor": "201020831"
    };
    res.send(data);
});

module.exports = router;