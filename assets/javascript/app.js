$(document).ready(function () {



  var winner = 0;

  ////---------------------------


  $("#formButton").one("click", function () {
    $("#npQuiz").show();
    $("#formButtonTwo").show();
    $("#formButton").show();
    


    var count = 45;
    var counter = setInterval(timer, 1000);


    function timer() {

      count = count - 1;
      $("#countDown").html('Time left: ' + count)
      if (count === 0) {
        clearInterval(counter);
        $("#countDown").html('Time has run out ')
        $("#npQuiz").hide();
        $("#formButton").hide();
        $("#formButtonTwo").hide();
        $("#result").html('Correct Answers: ' + winner)
       
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
  

    $("#formButtonTwo").click(function () {
      $("#npQuiz").hide();
      $("#formButton").hide();
      $("#formButtonTwo").hide();
      $("#result").html('Correct Answers: ' + winner)
      $("#countDown").hide();

    });

  });
});