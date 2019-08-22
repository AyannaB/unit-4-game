$(document).ready(function(){

//Initialize Variables
var wins = 0;
var losses = 0;
var result = 0;
var scoreHolder = 0;

var winText = document.getElementById("wins");
var lossText = document.getElementById("losses");

//Start the game
//Have computer select random number at start of game (between 19-120)
var randomComputerNumber;


var startGame = function () {
    randomComputerNumber = Math.floor(Math.random() * 102) + 19;
    $("#computerNumber").text(randomComputerNumber);
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
            // "class": 'crystal' + i,
            "random": randomCrystalNumber
        });
        crystal.addClass(`crystal${i} crystal`);
        // crystal.css({
        //     "background-image": "url('" + images[i] + "')",
        //     "background-size": "cover"
        // });

        // crystal.html(randomCrystalNumber);

        $(".crystals").append(crystal);
    }
    $("#scoreHolderText").html("Your Total: " + result);
}
startGame();

//clicking each crystal should add the numbers until we reach the target number
$(document).on('click', ".crystal", function () {

    var value = parseInt($(this).attr('random'));

    result += value;

    $("#scoreHolderText").html("Your Total: " + result);
    
    //if you go over the target score, you lose/start over
    console.log(result)
    console.log(randomComputerNumber)
    console.log(result > randomComputerNumber)
    if (result > randomComputerNumber) {
        alert("You Lost!!!")
        losses++;
        lossText.textContent = losses;
        result = 0;
        startGame();

        //else you win and add to your win streak
    } else if
        (result === randomComputerNumber) {
        alert("You Won!!!")
        wins++;
        winText.textContent = wins;
        result = 0;
        startGame();
    }
})
});
