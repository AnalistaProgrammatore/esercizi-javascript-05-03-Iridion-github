/*
6. Dato il seguente codice:
```
let ladder = {
  step: 0,
  up() {
    this.step++
  },
  down() {
    this.step--
  },
  showStep: function() { // shows the current step
    console.log( this.step )
  }
}
ladder.up()
ladder.up()
ladder.down()
ladder.showStep() // 1
```
riscriverlo nel file `chaining.js` in modo che possa funzionare nel seguente modo cioè usando il `method chaining`:
ladder.up().up().down().showStep() // 1
*/

let ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep: function () { // shows the current step
    console.log(this.step)
    return this
  }
}

ladder.up().up().down().showStep() //1