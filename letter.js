function Letter(letter) {
    this.letter = letter,
    this.content = "_",
    this.letterGuessed = false,
    this.letterCheck = function(guessInput) {
        console.log("1!", this.letter);
        if (this.letter === guessInput.letter) {
            return this.letterGuessed = true;
        }
    },
    this.returnLetter = function() {
        console.log("2", this.letterGuessed);
        if (this.letterGuessed === true) {
             return this.content = letter;
        }
    },
    this.print = function() {
        console.log(this);
    }
}

var guessInput = process.argv[2];

// guessInput.letterCheck(guessInput)
// guessInput.returnLetter();
// console.log("3", {Content: guessInput.content});
// console.log("4", guessInput.letterGuessed);

module.exports = Letter;