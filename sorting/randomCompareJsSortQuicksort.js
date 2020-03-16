const CArray = require('./compare')
/*
Create an array of over 10,000 randomly generated integers and sort the array using
both Quicksort and the JavaScript built-in sorting function, timing each function.
Is there a time difference between the two functions?
ANSWER: 
Woops, force of habit and I did all the comparisons, just like with the other exercises.
Anyway, the built-in sort is faster by 4.5ms on average.
*/

const intsArrayRandom = []
for (let x = 10000; x > -1; x--) {
  let randomInteger = Math.floor(Math.random() * 10001)
  intsArrayRandom.push(randomInteger)
}


//ORIGINAL
newNums = new CArray(intsArrayRandom)
console.log("newNums originally is: ", newNums.strElements.toString())
//STANDARD
const STAstart = new Date()
const STAstartMs = STAstart.getUTCMilliseconds()
newNums.strElements.toString()
const STAend = new Date()
const STAendMs = STAend.getUTCMilliseconds()
console.log("STANDARD sorting newNums takes " + (STAendMs - STAstartMs) + " ms.") //5ms on average
//BUBBLE
const BUBstart = new Date()
const BUBstartMs = BUBstart.getUTCMilliseconds()
newNums.bubbleSort()
newNums.strElements.toString()
const BUBend = new Date()
const BUBendMs = BUBend.getUTCMilliseconds()
console.log("BUBBLE sorting newNums takes " + (BUBendMs - BUBstartMs) + " ms.") //1ms on average
//SELECTION
const SELstart = new Date()
const SELstartMs = SELstart.getUTCMilliseconds()
newNums.selectionSort()
newNums.strElements.toString()
const SELend = new Date()
const SELendMs = SELend.getUTCMilliseconds()
console.log("SELECTION sorting newNums takes " + (SELendMs - SELstartMs) + " ms.") //2ms on average
//INSERTION
const INSstart = new Date()
const INSstartMs = INSstart.getUTCMilliseconds()
newNums.insertionSort()
newNums.strElements.toString()
const INSend = new Date()
const INSendMs = INSend.getUTCMilliseconds()
console.log("INSERTION sorting newNums takes " + (INSendMs - INSstartMs) + " ms.") //1ms on average
//QUICK 
const QSstart = new Date()
const QSstartMs = QSstart.getUTCMilliseconds()
newNums.quickSort(intsArrayRandom)
newNums.strElements.toString()
const QSend = new Date()
const QSendMs = QSend.getUTCMilliseconds()
console.log("QUICK sorting intsArrayRandom takes " + (QSendMs - QSstartMs) + " ms.") //20ms on average
//JS BUILT-IN SORT
const JSstart = new Date()
const JSstartMs = JSstart.getUTCMilliseconds()
intsArrayRandom.sort((x, y) => x - y)
const JSend = new Date()
const JSendMs = JSend.getUTCMilliseconds()
console.log("JS BUILT-IN sorting intsArrayRandom takes " + (JSendMs - JSstartMs) + " ms.") //15.5ms on average
