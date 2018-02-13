function Letter(letter) {
    this.letter = letter,
    this.content = "_",
    this.letterGuessed = false,
    this.letterCheck = function(guessInput) {    
        if (this.letter === guessInput) {
            console.log("");
            console.log("Great Guess!");            
            this.letterGuessed = true;
        }
    },
    this.returnLetter = function() {        
        if (this.letterGuessed === true) {            
             this.content = letter;             
        }
    }
}

// var guessInput = process.argv[2];

// guessInput.letterCheck(guessInput)
// guessInput.returnLetter();
// console.log("3", {Content: guessInput.content});
// console.log("4", guessInput.letterGuessed);

module.exports = Letter;