/*
3. Create a function that finds the second-smallest element in a data set. 
Can you generalize the function definition for the third-smallest, fourth-smallest, and so on? 
Test your functions with a data set of at least 1,000 elements. 
Test on both numbers and text.
*/


const getRandomNumArray = (length) => {
  result = []
  for (let x = 0; x < length; x++) {
    result.push(Math.floor(Math.random() * 1001))
  }
  return result
}

const numArr = getRandomNumArray(1000)

const strArr = numArr.map(x => x.toString()) //Non ho alcuna voglia di crearmi un array di parole a caso, sorry, stringizzo i numeri e s'accontentamo, vè?

const getSmallestOrShortest = (arr, bigger = 3) => {
  const results = []
  if (typeof arr[0] === 'number') {
    for (let x = 0; x < bigger; x++) {
      const target = arr.reduce((x, y) => x < y ? x : y)
      results.push(target)
      arr = arr.filter(y => y !== target)
    }
  } else {
    for (let x = 0; x < bigger; x++) {
      const target = arr.reduce((x, y) => x.length < y.length ? x : y)
      results.push(target)
      arr = arr.filter(y => y !== target.length)
    }
  }
  console.log("results array is:", results)
  return results[results.length - 1]
}

console.log("With numbers:", getSmallestOrShortest(numArr))
console.log("With strings:", getSmallestOrShortest(strArr))