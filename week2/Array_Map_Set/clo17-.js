//CLO17: JavaScript:

let students =[ {name:'John Masson'}, {name:'Don Vasco'}, {name:'Mary Landley'}]
let people = new Set(students)

// //Question: What is the value shown up in the console for the following statements

console.log(people.has({name:'Dave Vasco'}))
// the output is false

 