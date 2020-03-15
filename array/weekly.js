/*
3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
data using a two-dimensional array. 
Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.
*/

add = function (temp) {
  this.dataStore.push(temp)
}

addRandomTemps = function (days = 31, limit = 20) {
  for (let x = 1; x <= days; x++) {
    let randomTempLong = Math.random() * limit
    const randomTemp = Number(randomTempLong.toFixed(1)) //1 decimal. 
    thisMonth.add(randomTemp)
  }
}

average = function () {
  let total = 0
  for (let x = 0; x < this.dataStore.length; ++x) {
    total += this.dataStore[x]
  }
  return (total / this.dataStore.length).toFixed(1) + "° celsius"
}

monthTemps = function () {
  this.dataStore = []
  this.add = add
  this.addRandomTemps = addRandomTemps
  this.average = average
}

const thisMonth = new monthTemps()

thisMonth.addRandomTemps()

console.log("Temperatures:", thisMonth.dataStore)
console.log("Average temp:", thisMonth.average())