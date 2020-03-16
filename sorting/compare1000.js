const CArray = require('./compare')

/*
Create an array of 1,000 integers already sorted into numeric order. 
Write a program that runs each sorting algorithm with this array, timing each algorithm and comparing
the times. 
How do these times compare to the times for sorting an array in random order? 
ANSWER: 
This [1,0,2,0,24] VS Random [5,1,2,1,20]
This is faster on average, but Random for some reason has a slower 'quick sort'.
*/

const intsArray = []
for (let x = 1; x < 1001; x++) {
  intsArray.push(x)
}


//ORIGINAL
newNums = new CArray(intsArray)
console.log("newNums originally is: ", newNums.strElements.toString())
//STANDARD
const STAstart = new Date()
const STAstartMs = STAstart.getUTCMilliseconds()
newNums.strElements.toString()
const STAend = new Date()
const STAendMs = STAend.getUTCMilliseconds()
console.log("STANDARD sorting newNums takes " + (STAendMs - STAstartMs) + " ms.") //1ms on average
//BUBBLE
const BUBstart = new Date()
const BUBstartMs = BUBstart.getUTCMilliseconds()
newNums.bubbleSort()
newNums.strElements.toString()
const BUBend = new Date()
const BUBendMs = BUBend.getUTCMilliseconds()
console.log("BUBBLE sorting newNums takes " + (BUBendMs - BUBstartMs) + " ms.") //<1ms on average
//SELECTION
const SELstart = new Date()
const SELstartMs = SELstart.getUTCMilliseconds()
newNums.selectionSort()
newNums.strElements.toString()
const SELend = new Date()
const SELendMs = SELend.getUTCMilliseconds()
console.log("SELECTION sorting newNums takes " + (SELendMs - SELstartMs) + " ms.") //1ms on average
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
newNums.quickSort(intsArray)
newNums.strElements.toString()
const QSend = new Date()
const QSendMs = QSend.getUTCMilliseconds()
console.log("QUICK sorting newNums takes " + (QSendMs - QSstartMs) + " ms.") //24ms on average





