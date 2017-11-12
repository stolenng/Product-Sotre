var router = require('express').Router();
//var items = require('../notes/items.json');
var Feed = require('../models/Feed');

router.get('/feed', function(req, res, next){
    res.json(Feed.all());  
});

router.get('/feed/:source', function(req, res, next){
    res.json(Feed.get(req.params.source));
});

module.exports = router;
