let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")


people.delete(student)
console.log(people)
// output is Map(1) { { name: 'Dave Larson' } => 'Adjunct' }