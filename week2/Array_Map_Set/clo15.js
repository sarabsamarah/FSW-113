let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.values(student);

//Question: What is the value shown up in the console for the following statements

console.log(result)
// output is [Map Iterator] { 'Student', 'Adjunct' }