'use strict';

//craindo a rota
const express = require('express');
const router = express.Router();

//rota principal
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
});

//exportando a rota
module.exports = router;