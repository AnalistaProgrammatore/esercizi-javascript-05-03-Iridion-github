/*
2. Compare the time it takes to perform a sequential search, with the total time it takes
to both sort a data set using insertion sort and perform a binary search on the data
set. 
What are your results? ---> I get 0 milliseconds in any case ... yikes.
*/

let nums = [];

for (let i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101)
}

function getSearchTime(arr, data) {
  const results = []
  const start = new Date()
  const startMilliseconds = start.getUTCMilliseconds()
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
      results.push({ index: i })
    }
  }
  const end = new Date()
  const endMilliseconds = end.getUTCMilliseconds()
  return "Milliseconds required for the search: ", endMilliseconds - startMilliseconds
}


console.log(getSearchTime(nums, 44))
//Non ci sono errori, se rallento con processi complessi funziona (per esempio 2 console.log portano il tempo da 0 a 4), ma evidentemente per evitare di ottenere 0 dovrei inserire dati veramente complessi e non mi va.
