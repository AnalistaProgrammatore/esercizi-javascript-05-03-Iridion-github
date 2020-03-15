/*
1. Create a grades object that stores a set of student grades in an object. Provide a
function for adding a grade and a function for displaying the student’s grade average.
*/

const grades = {
  math: [],
  english: [],
  history: [],
  chemistry: []
}

const addGrade = (subject, grade) => {
  grades[subject] = [...grades[subject], grade]
  return grades
}

const getAverage = (subject) => {
  return grades[subject].length > 0 ? grades[subject].reduce((a, b) => a + b) / grades[subject].length : "No votes for this subject"
}

console.log("Original grades array:", grades)
console.log("After adding a grade:", addGrade("math", 6))
console.log("After adding a grade:", addGrade("math", 7))
console.log("After adding a grade:", addGrade("math", 8))
console.log("Average for the selected subject is:", getAverage("math"))
console.log("Average for the selected subject is:", getAverage("english"))