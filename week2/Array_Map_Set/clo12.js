let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

people.clear()

//Question: What is the value shown up in the console for the following statements

console.log(people)
// output is Map(0) {}