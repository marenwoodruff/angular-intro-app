// in your server.js
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('public/index');
});

var port = 4000;

app.listen(port, function() {
    console.log('app listening on port ' + port);
});
