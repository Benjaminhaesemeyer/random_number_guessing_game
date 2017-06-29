var express = require('express');
var app = express();
var path = require('path');
var port = 5000;


//random number function
function randomNum(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}




var array = [];
var answer = randomNum();
//added for loop
for(i = 0; i > array.length; i += 1){
  if (array[i] < answer){
    return "Too Low"
  } else if (array[i] > answer){
    return "Too High"
  } else {
    return "Correct"
  }
}

app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(port, function() {
console.log('Server running on port', port);

});
