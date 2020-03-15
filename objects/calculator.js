/*
5. creare nel file `calculator.js` un oggetto `calculator` con una proprietà `values`: un array di valori e 4 metodi `add`, `sub`, `mul`, `div` che 
eseguano le 4 operazioni fondamentali sulla proprietà `values` e restituiscano in output il risultato dell'operazione. 

Ad esempio:
```
let calculator = {
  // ... your code ...
}

calculator.values = [...];
console.log( calculator.sum() )
console.log( calculator.sub() )
console.log( calculator.mul() )
console.log( calculator.div() )
```
NB gestire il caso della divisione per 0
NB usate il metodo `reduce` degli array per ottenre i risultati dei vari metodi
*/

const calculator = {
  values: [],
  add: function () {
    return this.values.reduce((x, y) => x + y)
  },
  sub: function () {
    return this.values.reduce((x, y) => x - y)
  },
  mul: function () {
    return this.values.reduce((x, y) => x * y)
  },
  div: function () {
    return (this.values.filter((x, i) => i > 0).includes(0) ? "Can't divide by zero." : this.values.reduce((x, y) => x / y))
  }
}

calculator.values = [0, 1, 2, 3, 4]
console.log(calculator.add())
console.log(calculator.sub())
console.log(calculator.mul())
console.log(calculator.div())