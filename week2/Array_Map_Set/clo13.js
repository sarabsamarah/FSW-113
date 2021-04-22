let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.has(student);

//Question: What is the value shown up in the console for the following statements

console.log(result)
// outout is TRUE