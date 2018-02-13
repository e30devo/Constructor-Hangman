var Letter = require("./letter.js" )

function Word(randomWord) {
    this.randomWord = randomWord,
    this.deconstructedWord = this.randomWord.split("");
    this.letterObjects = [],
    this.letterObjectifier = function(randomWord) {
        for (var i = 0; i < this.deconstructedWord.length; i++) {
            this.letterObjects.push(new Letter(this.deconstructedWord[i]));         
        }
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
    
}

module.exports = Word;
