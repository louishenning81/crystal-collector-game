
$(document).ready(function() {

  // Initial Variables
  var computerGold = Math.floor(Math.random() * 100) + 10;
  var lockGame = false;
  var roseGold = "";
  var whiteGold = "";
  var yellowGold = "";
  var greenGold = ""; 
  var myGold = "";


  // We log the computer's pick to console to make it easier to troubleshoot
  console.log("Computer Pick: " + computerGold);
  $("#computer-pick").text(computerGold);

//   Function
function goldBarCount () {
    roseGold = (Math.floor(Math.random() * 9) + 1);
    whiteGold = (Math.floor(Math.random() * 9) + 1);
    yellowGold = (Math.floor(Math.random() * 9) + 1);
    greenGold = (Math.floor(Math.random() * 9) + 1);      
}
  
  // Here we create the on click event that gets the users pick
  $(".btn-choice").on("click", function() {

    goldBarCount();
    // Here this lockGame line prevents the user from changing the option after the game is done.
    if (lockGame !== true) {

      // We get the value associated with the button the user picked from here
      var yourPick = $(this).val();
      console.log("Your Pick: " + yourPick);



      // If your pick matched the computer's pick you let them know.
      if (parseInt(yourPick) === computerGold) {
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
