/*
2. Store a set of words in an array and display the contents both forward and backward.
*/

const set = ["This", "is", "a", "set", "of", "words"]

const display = (arr, result = "") => {
  for (let x = 0; x < arr.length; x++) {
    result += arr[x]
    result += x < arr.length - 1 ? " " : "."
  }
  return result
}

const displayReverse = (arr, result = ".") => {
  for (let x = arr.length - 1; x > -1; x--) {
    result += arr[x] + " "
  }
  return result
}

console.log(display(set))
console.log(displayReverse(set))