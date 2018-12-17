$(document).ready(function () {

var winner = 0;
var count = 100;


var counter=setInterval(timer, 1000);
var data= "0"

function timer()
{

  count=count-1;
  $("#countDown").html('Time left: ' + count)
  if (count <= 0)
  
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }
  

  //Do code for showing the number of seconds here
}

$( "#GreatSmoky" ).on( "click", function() {
  winner++ ;
  console.log(winner);
});

$( "#LakeMead" ).on( "click", function() {
  winner++ ;
  console.log(winner);
});
$( "#wrangell" ).on( "click", function() {
  winner++ ;
  console.log(winner);
});
$( "#YellowstoneFour" ).on( "click", function() {
  winner++ ;
  console.log(winner);
});
$( "#button" ).on( "click", function() {
  alert(winner);
});




});
