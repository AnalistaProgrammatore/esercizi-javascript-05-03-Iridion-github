/*
1. The sequential search algorithm always finds the first occurrence of an element in
a data set. 
Rewrite the algorithm so that the last occurrence of an element is returned.
*/

//Original
function seqSearchRewritten(arr, data) {
  const positives = []
  for (var x = 0; x < arr.length; ++x) {
    if (arr[x] === data) {
      positives.push({ value: arr[x], index: x })
    }
  }
  return positives[positives.length - 1]
}

const prova = [false, true, false, true, false, false, true, false]

console.log(seqSearchRewritten(prova, true))