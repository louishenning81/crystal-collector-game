
$(document).ready(function() {

  // Initial Variables
  var computerPick = Math.floor(Math.random() * 100) + 1;
  var lockGame = false;

  // We log the computer's pick to console to make it easier to troubleshoot
  console.log("Computer Pick: " + computerPick);

  // Here we create the on click event that gets the users pick
  $(".btn-choice").on("click", function() {

    // Here this lockGame line prevents the user from changing the option after the game is done.
    if (lockGame !== true) {

      // We get the value associated with the button the user picked from here
      var yourPick = $(this).val();
      console.log("Your Pick: " + yourPick);

      // We then reveal the computer's pick in the html
      $("#computer-pick").text(computerPick);

      // If your pick matched the computer's pick you let them know.
      if (parseInt(yourPick) === computerPick) {
        $("#result").text("Yep! You got it! Refresh the page to play again.");
        lockGame = true;
      }

      // If the numbers did not match. You also let them know
      else {
        $("#result").text("Nope. Refresh the page to play again.");
        lockGame = true;
      }
    

    };
});
});
