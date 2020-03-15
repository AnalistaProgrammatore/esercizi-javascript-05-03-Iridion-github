/*
4. Scrivi nel file `multiply.js` una funzione `multiply` che dato in input un oggetto e un numero moltiplichi tutte le proprietà numeriche dell'oggetto per il numero dato. NB la funzione deve essere pura. Ad esempio
```
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

const newMenu = multiplyNumeric(menu, 2)

// after the call
newMenu = {
  width: 400,
  height: 600,
  title: "My menu"
}
*/

const multiply = (obj, num) => {
  resultKeys = Object.keys(obj)
  resultValues = Object.values(obj).map(x => typeof x === "number" ? x * num : x)
  const result = {}
  for (let x = 0; x < resultKeys.length; x++) {
    result[resultKeys[x]] = resultValues[x]
  }
  return result
}

const prova = {
  prop1: "NaN",
  prop2: 2,
  prop3: "NaN",
  prop4: 3,
  prop5: "NaN",
}

console.log(multiply(prova, 2))