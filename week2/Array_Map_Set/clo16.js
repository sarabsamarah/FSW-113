let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new WeakMap()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

ladjunct = null

//Question: What is the value shown up in the console for the following statements

console.log(people.size)

//Wait 5 min and re-execute (a)

//Question: What is the value shown up in the console for the following statements

console.log(people.size)
//returns undefined 