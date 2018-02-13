var Letter = require("./letter.js" )
// var guessInput = process.argv[2];
// var letter = new Letter;
function Word(randomWord) {
    this.randomWord = randomWord,
    this.deconstructedWord = this.randomWord.split("");
    this.letterObjects = [],
    this.letterObjectifier = function(randomWord) {
        for (var i = 0; i < this.deconstructedWord.length; i++) {
            this.letterObjects.push(new Letter(this.deconstructedWord[i]));
            // console.log(this.letterObjects[i]);
        }
        // console.log(
        //     this.letterObjects[0].letter, " ",
        //     this.letterObjects[1].letter, " ",
        //     this.letterObjects[2].letter, " ",
        //     this.letterObjects[3].letter, " ",
        //     this.letterObjects[4].letter, " ",
        //     this.letterObjects[5].letter, " "
        // );        
        console.log(
            this.letterObjects[0].content, " ",
            this.letterObjects[1].content, " ",
            this.letterObjects[2].content, " ",
            this.letterObjects[3].content, " ",
            this.letterObjects[4].content, " ",
            this.letterObjects[5].content, " "
        );
        console.log("");        
    }   
    // this.test = function(guessInput) {
    //     letter.letterCheck(guessInput);
    // }
    
}

// var word = new Word("random");
// console.log("5", word.randomWord, word.deconstructedWord);
// console.log(word.deconstructedWord.length);
// word.letterObjectifier(word.randomWord);
// console.log("6!", guessInput);
// word.letterObjects[0].letterCheck(guessInput); // USE THIS IN GAME PLAY not here. for loop 


module.exports = Word;
// console.log(guessInput.letterGuessed);
    
    // console.log(word.deconstructedWord[i]);
    // // console.log(guessInput.letter, word.deconstructedWord[i]);
    // if (guessInput.letter === word.deconstructedWord[i]) {
    //     guessInput.letterCheck(guessInput);
    //     guessInput.returnLetter();  
    // };

