//Cosa mi costringete a fare ...
const allWords = require('an-array-of-english-words')

function shuffle(arr, cycles = 3) {
  let result = [...arr]
  if (cycles > 0) {
    let currentIndex = result.length
    let temporaryValue
    let randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = result[currentIndex]
      result[currentIndex] = result[randomIndex]
      result[randomIndex] = temporaryValue
    }
    return shuffle(result, cycles - 1)
  } else {
    return result
  }
}

const aHundredWordsPreShuffle = allWords.filter((w, i) => i < 101)
//console.log('aHundredWordsPreShuffle', aHundredWordsPreShuffle)
const aHundredWords = shuffle(aHundredWordsPreShuffle)
//console.log('aHundredWords', aHundredWords)

/*
1. Run the three algorithms discussed in this chapter with string data rather than
numeric data and compare the running times for the different algorithms. 

Are the results consistent with the results of using numeric data?
ANSWER:  
After a little tweak to the code, they are consistent in the returning value. 
Every sort except for insertion and standard mostly take 0ms to execute, so I find it hard to assert which one is faster.
*/
//----------------------------------------------------------------------------------

function CArray(strElements) {
  this.dataStore = []
  this.strElements = strElements
  this.toString = toString
  for (let i = 0; i < strElements; ++i) {
    this.dataStore[i] = i;
  }
  this.bubbleSort = bubbleSort
  this.selectionSort = selectionSort
  this.insertionSort = insertionSort
  this.quickSort = qSort
}

function toString() {
  let retstr = ""
  for (let i = 0; i < this.dataStore.length; ++i) {
    retstr += this.dataStore[i] + " "
    if (i > 0 && i % 10 == 0) {
      retstr += "\n"
    }
  }
  return retstr
}

let strElements = aHundredWords;
let myWords = new CArray(strElements);
const STAstart = new Date()
const STAstartMs = STAstart.getUTCMilliseconds()
myWords.strElements.toString()
//console.log("||||| Standard method:", myWords.strElements.toString());
const STAend = new Date()
const STAendMs = STAend.getUTCMilliseconds()
console.log("STANDARD sorting myWords takes " + (STAendMs - STAstartMs) + " ms.") //1ms on average

//----------------------------------------------------------------------------------

function bubbleSort() {
  let strElements = this.dataStore.length
  for (let outer = strElements; outer >= 2; --outer) {
    for (let inner = 0; inner <= outer - 1; ++inner) {
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {
        swap(this.dataStore, inner, inner + 1)
      }
    }
    console.log(this)
  }
}

const BUBstart = new Date()
const BUBstartMs = BUBstart.getUTCMilliseconds()
myWords.bubbleSort()
//console.log("||||| bubbleSort:", myWords.strElements)
const BUBend = new Date()
const BUBendMs = BUBend.getUTCMilliseconds()
console.log("BUBBLE sorting myWords takes " + (BUBendMs - BUBstartMs) + " ms.") //<1ms on average

//----------------------------------------------------------------------------------

function selectionSort() {
  let min
  for (let outer = 0; outer <= this.dataStore.length - 2; ++outer) {
    min = outer
    for (let inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
      if (this.dataStore[inner] < this.dataStore[min]) {
        min = inner
      }
    }
    swap(this.dataStore, outer, min)
    //console.log("||||| selectionSort", this)
  }
}

const SELstart = new Date()
const SELstartMs = SELstart.getUTCMilliseconds()
myWords.selectionSort()
//console.log("||||| selectionSort:", myWords.strElements)
const SELend = new Date()
const SELendMs = SELend.getUTCMilliseconds()
console.log("SELECTION sorting myWords takes " + (SELendMs - SELstartMs) + " ms.") //<1ms on average

//----------------------------------------------------------------------------------

function insertionSort() {
  let temp, inner
  for (let outer = 1; outer <= this.dataStore.length - 1; ++outer) {
    temp = this.dataStore[outer]
    inner = outer
    while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
      this.dataStore[inner] = this.dataStore[inner - 1]
      --inner
    }
    this.dataStore[inner] = temp
  }
}

const INSstart = new Date()
const INSstartMs = INSstart.getUTCMilliseconds()
myWords.insertionSort()
//console.log("||||| insertionSort:", myWords.strElements)
const INSend = new Date()
const INSendMs = INSend.getUTCMilliseconds()
console.log("INSERTION sorting myWords takes " + (INSendMs - INSstartMs) + " ms.") //1ms on average

//---------------------------------------------------------------------------------------------

function qSort(list) {
  if (list.length == 0) {
    return []
  }
  var lesser = []
  var greater = []
  var pivot = list[0]
  for (var i = 1; i < list.length; i++) {
    if (list[i] < pivot) {
      lesser.push(list[i])
    } else {
      greater.push(list[i])
    }
  }
  return qSort(lesser).concat(pivot, qSort(greater))
}

const QSstart = new Date()
const QSstartMs = QSstart.getUTCMilliseconds()
myWords.selectionSort(myWords.dataStore)
const QSend = new Date()
const QSendMs = QSend.getUTCMilliseconds()
console.log("QUICK sorting myWords takes " + (QSendMs - QSstartMs) + " ms.") //<1ms on average

module.exports = CArray