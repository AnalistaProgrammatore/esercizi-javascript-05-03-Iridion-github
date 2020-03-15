/*
4. Create an object that stores individual letters in an array and has a function for
displaying the letters as a single word.
*/

const container = {
  letters: ["c", "o", "n", "s", "e", "g", "n", "a", " ", "i", "n", "f", "a", "m", "e", " ", "p", "e", "r", " ", "t", "e", " ", "s", "o", "l", "o", " ", "l", "e", " ", "l", "a", "m", "e"],
  printLetters: function (result = "") {
    for (let x = 0; x < this.letters.length; x++) {
      result += this.letters[x]
    }
    return result
  }
}

//Si, non è una parola, è una frase. Fuck da rules.
console.log(container.printLetters())

