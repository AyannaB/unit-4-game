//Initialize Variables
var wins = 0;
var losses = 0;
var result = 0;

var winText = document.getElementById("wins");
var lossText = document.getElementById("losses");
//Start the game

//Have computer select random number at start of game (between 19-120)
var randomComputerNumber = Math.floor(Math.random()* 102) + 19;
$("#computerNumber").html(randomComputerNumber);

var startGame = function() {
//Build the Crystals
//Generate a random number to each crystal (between 1-12)
for(var i = 0; i< 4; i++){
    var randomCrystalNumber = Math.floor(Math.random()* 13) + 1;

    var crystal = $("<div>");
    crystal.attr({
        "class":'crystal',
        "random": randomCrystalNumber
    });

    crystal.html(randomCrystalNumber);

    $(".crystals").append(crystal);
    }
}
startGame();
//clicking each crystal should add the numbers until we reach the target number
$(".crystal").on('click', function() {
    var value = parseInt($(crystal).attr('random'));

    result += value;
//if you go over the target score, you lose/start over
    if(result > randomComputerNumber){
        alert("You Lost!!!")
        losses++;
        lossText.textContent = losses;
        startGame();

//else you win and add to your win streak
    } else if
    (result === randomComputerNumber){
        alert("You Won!!!")
        wins++;
        winText.textContent = wins;
        startGame();
    }
});
