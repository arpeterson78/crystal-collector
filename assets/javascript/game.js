$(document).ready(function () {

    // Set all of the global variables
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    var randomNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
    var blueCrystal = (Math.floor(Math.random() * 12) + 1);
    var greenCrystal = (Math.floor(Math.random() * 12) + 1);
    var orangeCrystal = (Math.floor(Math.random() * 12) + 1);
    var purpleCrystal = (Math.floor(Math.random() * 12) + 1);

    // Set the wins, losses and user score to 0 on page
    $("#user-score").text(userScore);
    $("#user-wins").text(wins);
    $("#user-losses").text(losses);

    // Generate a random number for the player to match on page
    $("#random-number").text(randomNumber);

    // Set up a reset function
    var reset = function() {
        randomNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
        $("#random-number").text(randomNumber);
        blueCrystal = (Math.floor(Math.random() * 12) + 1);
        greenCrystal = (Math.floor(Math.random() * 12) + 1);
        orangeCrystal = (Math.floor(Math.random() * 12) + 1);
        purpleCrystal = (Math.floor(Math.random() * 12) + 1);
        userScore = 0;
        $("#user-score").text(userScore);
    }
    // Set up a function to run when they win the game
    var win = function() {
        wins++
        $("#user-wins").text(wins);
        alert("You Win!");
        reset();
    }
    // Set up a function to run when they lose the game
    var lose = function() {
        losses++
        $("#user-losses").text(losses);
        alert("You Lose :( Try again!")
        reset();
    }
    // On click function to add Blue Crystal value to total User Score.
    $("#blue-crystal").click(function () {
        userScore = userScore + blueCrystal;
        $("#user-score").text(userScore);
        if (userScore === randomNumber) {
            win();
        } else if (userScore > randomNumber) {
            lose();
        }
    });
    // On click function to add Green Crystal value to total User Score.
    $("#green-crystal").click(function () {
        userScore = userScore + greenCrystal;
        $("#user-score").text(userScore);
        if (userScore === randomNumber) {
            win();
        } else if (userScore > randomNumber) {
            lose();
        }
    });
    // On click function to add Orange Crystal value to total User Score.
    $("#orange-crystal").click(function () {
        userScore = userScore + orangeCrystal;
        $("#user-score").text(userScore);
        if (userScore === randomNumber) {
            win();
        } else if (userScore > randomNumber) {
            lose();
        }
    });
    // On click function to add Purple Crystal value to total User Score.
    $("#purple-crystal").click(function () {
        userScore = userScore + purpleCrystal;
        $("#user-score").text(userScore);
        if (userScore === randomNumber) {
            win();
        } else if (userScore > randomNumber) {
            lose();
        }
    });




});