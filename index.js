var inquirer = require("inquirer");
var Word = require("./word.js");
var word = new Word("random");
word.letterObjectifier(word.randomWord);

var guessInput = "";
var count = 0;

function recurGuess() {
  if (count < word.deconstructedWord.length) {    
    inquirer
      .prompt([
        {
          type: "input",
          message: "Guess a letter!",
          name: "letter"
        }
      ])

      .then(function(inquirerResponse) {
        guessInput = inquirerResponse.letter;

        for (var i = 0; i < word.deconstructedWord.length; i++) {
          word.letterObjects[i].letterCheck(guessInput);
          word.letterObjects[i].returnLetter(guessInput);
        }

        word.letterObjectifier(word.randomWord);
        count++;
        recurGuess();
    });
  }
}
recurGuess();
