$(document).ready(function () {
 


    var winner = 0;
   
////---------------------------

   
    $("#formButton").click(function () {
      $("#npQuiz").show();
  
      var count = 5;
    var counter = setInterval(timer, 1000);


    function timer() {

      count = count - 1;
      $("#countDown").html('Time left: ' + count)
      if (count === 0)

      {
        clearInterval(counter);
        $("#countDown").html('Time has run out ')
      }


      //Do code for showing the number of seconds here
    }

    $("#GreatSmoky").one("click", function () {
      winner++;
      console.log(winner);
    });

    $("#LakeMead").one("click", function () {
      winner++;
      console.log(winner);
    });
    $("#wrangell").on("click", function () {
      winner++;
      console.log(winner);
    });
    $("#YellowstoneFour").on("click", function () {
      winner++;
      console.log(winner);
    });
    $("#button").on("click", function () {
      alert(winner);
    });

    $("#formButtonTwo").click(function () {
      $("#npQuiz").hide();
      $("#formButton").hide();
      $("#result").html('Guess This Number: ' + winner)
    });
  
  });
});