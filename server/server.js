var express = require('express');
var app = express();
var path = require('path');
var port = 5000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var value;
// var value2

//random number function
function randomNum(max){
    return Math.floor(Math.random() * max + 1);
}


app.post('/maxNumberRange', function(req, res){
  value = req.body.userChoice;
  console.log(randomNum(value));
  res.send('super baddass max num choice dude!');
});

app.get('/maxNumberRange', function(req, res) {
  console.log(randomNum(value));
  res.send(randomNum(value));
});


app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(port, function() {
console.log('Server running on port', port);

});
