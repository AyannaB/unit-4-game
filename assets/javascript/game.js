//Initialize Variables
var wins = 0;
var losses = 0;
var result = 0;
var scoreHolder = 0;

var winText = document.getElementById("wins");
var lossText = document.getElementById("losses");
var scoreHolderText = document.getElementById("scoreHolderText");
//Start the game

//Have computer select random number at start of game (between 19-120)
var randomComputerNumber = Math.floor(Math.random() * 102) + 19;
$("#computerNumber").html(randomComputerNumber);

var startGame = function () {
    $(".crystals").empty();
    //Build the Crystals and attatch their images
    //Generate a random number to each crystal (between 1-12)

    var images = ['../images/blueCrystal.jpg',
        '../images/clearCrystal.jpg',
        '../images/pinkCrystal.jpg',
        '../images/purpleCrystal.jpg']

    for (var i = 0; i < 4; i++) {
        var randomCrystalNumber = Math.floor(Math.random() * 13) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "random": randomCrystalNumber
        });

        crystal.html(randomCrystalNumber);

        $(".crystals").append(crystal);
    }
}
startGame();

//clicking each crystal should add the numbers until we reach the target number
$(".crystal").on('click', function () {
    var value = parseInt($(this).attr('random'));

    result += value;
    scoreHolderText.textContent = scoreHolder;
    console.log(result);
    //if you go over the target score, you lose/start over
    if (result > randomComputerNumber) {
        alert("You Lost!!!")
        losses++;
        lossText.textContent = losses;
        startGame();

        //else you win and add to your win streak
    } else if
        (result === randomComputerNumber) {
        alert("You Won!!!")
        wins++;
        winText.textContent = wins;
        startGame();
    }
});
