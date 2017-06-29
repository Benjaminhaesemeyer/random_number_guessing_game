console.log('JS Source');

$(document).ready(function() {
  //on page load...
  gameSetup();
  //on click...
  //$('#start').on('click', gameSetup);
  $('.container').on('click', '#start', startGame);
  //$('.container').click(startGame);
});

function gameSetup() {
  $('.container').empty();
  $('.container').append('<h2>Pick Max #</h2>' +
                        //  + '<input id="maxNumber"/>')
                        '<select id="maxNumber">' +
                          '<option value="20">20</option>' +
                          '<option value="50">50</option>' +
                          '<option value="100">100</option>' +
                          '<option value="500">500</option>' +
                        '</select>' +
                        '<br><br>' +
                        '<button id="start">Start Game</button>');
}// end gameSetup


function startGame() {
  console.log(parseInt($('#maxNumber').val()));
  var chosenMax = parseInt($('#maxNumber').val());
  $.ajax ({
    type: 'POST',
    url: '/maxNumberRange',
    data: {
      userChoice: chosenMax
    },
    success: function(response) {
      console.log(response);
    }
  });//end request
} //end startGame


var arrayGuess = [];
var answer = randomNum();
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
