var express = require('express');
var app = express();
var path = require('path');
var port = 5000;


app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(port, function() {
console.log('Server running on port', port);

});