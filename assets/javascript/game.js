
$(document).ready(function () {

    // Initial Variables
    var computerGold = Math.floor(Math.random() * 100) + 20;
    var lockGame = false;
    var roseGold = "";
    var whiteGold = "";
    var yellowGold = "";
    var greenGold = "";
    var myGold = 0;
    var iLoveGold = new Audio("assets/Gold.mp3")
    var wins = 0;
    var losses = 0;

    // We log the computer's pick to console to make it easier to troubleshoot
    console.log("Computer Pick: " + computerGold);
    $("#computer-pick").text(computerGold);

    //   Function
    function goldBarCount() {
        roseGold = (Math.floor(Math.random() * 20) + 1);

        console.log(roseGold);
        whiteGold = (Math.floor(Math.random() * 20) + 1);
        console.log(whiteGold);
        yellowGold = (Math.floor(Math.random() * 20) + 1);
        console.log(yellowGold);
        greenGold = (Math.floor(Math.random() * 20) + 1);
        console.log(greenGold);
        
    }

    goldBarCount();
    //  iLoveGold.play();
    // Here we create the on click event that gets the users pick
    $(".btn-choice").on("click", function () {



        // We get the value associated with the button the user picked from here
        var yourPick = $(this).val();






        // If your pick matched the computer's pick you let them know.
        if (myGold < computerGold) {
            if (yourPick === "1") {
                myGold += yellowGold;
                $("#myGold").text(myGold);
            } else if (yourPick === "2") {
                myGold += whiteGold;
                $("#myGold").text(myGold);
            } else if (yourPick === "3") {
                myGold += roseGold;
                $("#myGold").text(myGold);
            } else if (yourPick === "4") {
                myGold += greenGold;
                $("#myGold").text(myGold);
            }
            if (myGold === computerGold) {
                $("#myGold").text("Yep! You got it!");
                wins++;
                $("#Wins").html("Wins: " + wins);
                myGold = 0;
                computerGold = Math.floor(Math.random() * 100) + 20;
                $("#computer-pick").text(computerGold);
                goldBarCount();
                

            } else if (myGold > computerGold) {
                $("#myGold").text("Nope.");
                losses++;
                $("#Losses").html("Losses: " + losses);
                myGold = 0;
                computerGold = Math.floor(Math.random() * 100) + 20;
                $("#computer-pick").text(computerGold);
                goldBarCount();

            }
        }


        // If the numbers did not match. You also let them know



    }
    )
})
