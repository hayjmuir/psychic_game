





var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];


// var computerGuess = computerChoiceText[fromCharCode(97+Math.floor(Math.random() * 26)];


var directionsText = document.getElementById("directions-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeft = document.getElementById("guesses-left");
    var guessesMade = document.getElementById("guesses-made");



    document.onkeyup = function(event) {


        var computerGuess = "a";
        var guess = event.key;
        guessesSoFar.push(guess);
        





        // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];








       
        
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesLeft.textContent = "Guesses left : " + ties;
        guessesMade.textContent = "Your guesses so far : " + guessesSoFar;




    }