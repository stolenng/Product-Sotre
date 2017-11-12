var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 8080; 

// View Engine
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder 
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/feed'));

app.listen(port, function(){
    console.log('App listening on port ' + port);
});               

