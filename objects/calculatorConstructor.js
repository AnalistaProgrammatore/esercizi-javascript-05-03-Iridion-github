/*
7. creare nel file `calculatorConstructor.js` la funzione costrutture `Calculator(values)` che dato in input un array di valori crei l'oggetto `calculator` dell'esercizio numero 5.
```
let calculator = new Calculator([...]);

console.log( calculator.sum() )
console.log( calculator.sub() )
console.log( calculator.mul() )
console.log( calculator.div() )
*/

const Calculator = function (values) {
  return {
    values: [...values],
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
}

let calculator = new Calculator([0, 1, 2, 3, 4])

console.log(calculator.add())
console.log(calculator.sub())
console.log(calculator.mul())
console.log(calculator.div())

//--------------------------------------------------------------------------------

function Calculator2(val) {
  this.values = [...val]
  this.add = function () {
    return this.values.reduce((x, y) => x + y)
  }
  this.sub = function () {
    return this.values.reduce((x, y) => x - y)
  }
  this.mul = function () {
    return this.values.reduce((x, y) => x * y)
  }
  this.div = function () {
    return (this.values.filter((x, i) => i > 0).includes(0) ? "Can't divide by zero." : this.values.reduce((x, y) => x / y))
  }
}

let calculator2 = new Calculator2([0, 1, 2, 3, 4])

console.log(calculator2.add())
console.log(calculator2.sub())
console.log(calculator2.mul())
console.log(calculator2.div())