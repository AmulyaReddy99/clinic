var express = require('express');
var router = express.Router();
var root = process.cwd();
var app = express();

port = 8000;

app.set('view engine', 'ejs');
app.use('/', express.static(__dirname+'/public'));

app.get('/', function (req, res) {
    res.render('index.html', {root});
});

app.listen(port, function(){
  console.log('Listening to port ' + port + ' ...');
});
