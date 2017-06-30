//!!!!!!!!!!!!!THINGS WE STILL NEED TO DO!!!!!!!!!!
//get our post request working
//make a "total guesses made indicator"
//make a "maximum number indicator"


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

//request function
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
      refreshData();//calling received function
    }
  });//end request
} //end startGame

//process request being received
function refreshData() {
  console.log('working');
  $.ajax({
    type: 'GET',
    url: '/returnValue',
    success: function(response) {
      console.log(response);
    }
  });
}
