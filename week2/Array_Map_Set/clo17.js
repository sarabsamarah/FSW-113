

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Set()

people.add(student)
people.add(adjunct)

people.add(adjunct)

//Question: What is the value shown up in the console for the following statements

console.log(people.size)
// the output is 2

 

