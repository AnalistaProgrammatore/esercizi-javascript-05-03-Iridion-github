/*
2. Scrivi nel file `isEmpty.js` la funzione `isEmpty` che dato un oggetto in input ritorni `true` se l'oggetto è vuoto e `false` altrimenti
*/

const isEmpty = (target) => {
  let result = true
  for (const key in target) {
    if (target.hasOwnProperty(key)) result = false
  }
  return result
}

const user = {}

console.log("This should return true -->", isEmpty(user))

Object.defineProperties(user, {
  name: {
    value: "Mario",
    writable: true,
    enumerable: true,
    configurable: true
  }
})

console.log("This should return false -->", isEmpty(user))

