var fs = require('fs');
var sources = require('../mock/sources');


exports.all = function (cb) {
    var data = JSON.parse(fs.readFileSync('./mock/items.json'));  
    return data.items;
}

exports.get = function (id, cb) {
    var data = JSON.parse(fs.readFileSync('./mock/items.json'));  
    return data.items.filter(function(item){
        return item.source == id;
    });    
}
