var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "r", "s", "t", "u", "v", "w", "x", "y", "z"];





var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guesses = document.getElementById("guesses-left");
var guessesMade = document.getElementById("guesses-made");

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


document.onkeyup = function(event) {



 var guess = event.key;

 if ((guess < "a") || (guess > "z"))
  return;
 guessesSoFar.push(guess);



 if (guess != computerGuess) {
  guessesLeft--
 };
 if (guess === computerGuess) {
  wins++;
  guessesLeft = 10;
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  guessesSoFar = []
 } else if (guessesLeft == 0) {
  losses++
 };


 if (guessesLeft == 0) {
  guessesLeft = 10;
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  guessesSoFar = []
 };






 winsText.textContent = "wins: " + wins;
 lossesText.textContent = "losses: " + losses;
 guesses.textContent = "Guesses left : " + guessesLeft;
 guessesMade.textContent = "Your guesses so far : " + guessesSoFar;




}