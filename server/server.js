var express = require('express');
var app = express();
var path = require('path');
var port = 5000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var value;
// var value2 = randomNum(value);

//random number function
function randomNum(max){
    return Math.floor(Math.random() * max + 1);
}``

var arrayGuess = [];
// var answer = randomNum();
var highOrLow = [];

function checkGuess() {

//added for loop
  for(i = 0; i > arrayGuess.length; i += 1){
    if (arrayGuess[i] < answer){
      highOrLow.push("Too Low");
    }
    else if (arrayGuess[i] > answer){
      highOrLow.push("Too High");
    }
     else {
      highOrLow.push("Correct");
    }
  }

}
//receiving the max number choice
app.post('/maxNumberRange', function(req, res){
  value = req.body.userChoice;
  console.log(randomNum(value));
  res.sendStatus(200);
});
//processed request being sent
app.get('/returnValue', function(req, res) {
  console.log(randomNum(value));
  res.send(randomNum(value).toString());
});

//catch all bucket
app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(port, function() {
console.log('Server running on port', port);

});
