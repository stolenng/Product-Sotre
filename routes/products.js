var router = require('express').Router();
var Products = require('../models/Products');

router.get('/products', function(req, res, next){
    res.json(Products.all());  
});

router.get('/products/:id', function(req, res, next){
    res.json(Products.get(req.params.id));
});

module.exports = router;
