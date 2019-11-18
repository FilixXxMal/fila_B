var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(__dirname + '/../www/'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/../www/index.html'));
});

app.get('/api/mante', function (req, res) {
  res.sendFile(path.join(__dirname+'/mante.json'));
});

app.listen(3000, function () {
  console.log('in ascolto');
});