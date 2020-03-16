const CArray = require('./compare')
/*
Create an array of 1,000 integers sorted in reverse numerical order. 
Write a program that runs each sorting algorithm with this array, timing each algorithm, and compare the times.
ANSWER: Below.
*/

const intsArrayReversed = []
for (let x = 1000; x > -1; x--) {
  intsArrayReversed.push(x)
}

//ORIGINAL
newNums = new CArray(intsArrayReversed)
console.log("newNums originally is: ", newNums.strElements.toString())
//STANDARD
const STAstart = new Date()
const STAstartMs = STAstart.getUTCMilliseconds()
newNums.strElements.toString()
const STAend = new Date()
const STAendMs = STAend.getUTCMilliseconds()
console.log("STANDARD sorting newNums takes " + (STAendMs - STAstartMs) + " ms.") //<1ms on average
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
console.log("SELECTION sorting newNums takes " + (SELendMs - SELstartMs) + " ms.") //<1ms on average
//INSERTION
const INSstart = new Date()
const INSstartMs = INSstart.getUTCMilliseconds()
newNums.insertionSort()
newNums.strElements.toString()
const INSend = new Date()
const INSendMs = INSend.getUTCMilliseconds()
console.log("INSERTION sorting newNums takes " + (INSendMs - INSstartMs) + " ms.") //<1ms on average
//QUICK 
const QSstart = new Date()
const QSstartMs = QSstart.getUTCMilliseconds()
newNums.quickSort(intsArrayReversed)
newNums.strElements.toString()
const QSend = new Date()
const QSendMs = QSend.getUTCMilliseconds()
console.log("QUICK sorting intsArrayReversed takes " + (QSendMs - QSstartMs) + " ms.") //30ms on average