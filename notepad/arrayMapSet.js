// //CLO1: JavaScript:

let studentArray = Array(10)

// ////Question: What is the value shown up in the console for the following statements

console.log(studentArray.length)
// // the output is 10

console.log(studentArray)
//output is 10 empty items

//CLO2: JavaScript:

let studentArray = Array.of(10)


//Question: What is the value shown up in the console for the following statements

console.log(studentArray.length)
// output is 1

console.log(studentArray)
//output is [10]

//CLO3: JavaScript:

let grades = [90,98,78,99]

let studentGrades = Array.from(grades, g=> g * 110);

// //Question: What is the value shown up in the console for the following statements

console.log(studentGrades.length)
// //output is 4

console.log(studentGrades)
// //output is [9900, 10780, 8580, 10890]

// CLO4: JavaScript:

 let grades = [90,98,78,99]
let studentGrades = Array.from(grades, function(g){
return  g * this.percentageIncrement},{percentageIncrement:1.10});

// //Question: What is the value shown up in the console for the following statements

console.log(studentGrades)
// output is [ 99.00000000000001, 107.80000000000001, 85.80000000000001, 108.9 ]

//CLO5: JavaScript:

let grades = [90,98,78,99]
let studentGrades = Array.from(grades, g=>{return  g * this.percentageIncrement
},{percentageIncrement:1.10});

// //Question: What is the value shown up in the console for the following statements

console.log(studentGrades)
// output is a sting of NAN

//CLO6: JavaScript:

let grades = [90,98,78,99]
let studentGrades = grades.find(v=> v== 90)

// //Question: What is the value shown up in the console for the following statements

console.log(studentGrades)
// output is 90

//CLO7: JavaScript:

let grades = [90,98,78,99]
let studentGrades = grades.find(v => v >= 90)

//Question: What is the value shown up in the console for the following statements

console.log(studentGrades)

 

//CLO8: JavaScript:

let grades = [90,98,78,99]
let studentGrades = grades.map(v => v * .0 , 90)

//Question: What is the value shown up in the console for the following statements

console.log(studentGrades)

 

//CLO9: JavaScript:

let grades = [90,98,78,99]
let studentGrades = grades

//Question: What is the value shown up in the console for the following statements

console.log(studentGrades)

 

//CLO10: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")


//Question: What is the value shown up in the console for the following statements

console.log(people)

 

//CLO11: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

people.delete(student)

//Question: What is the value shown up in the console for the following statements

console.log(people)

 

//CLO12: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

people.clear()

//Question: What is the value shown up in the console for the following statements

console.log(people)

 

//CLO13: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.has(student);

//Question: What is the value shown up in the console for the following statements

console.log(result)

 

//CLO14: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.keys(student);

//Question: What is the value shown up in the console for the following statements

console.log(result)

 

//CLO15: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.values(student);

//Question: What is the value shown up in the console for the following statements

console.log(result)

 

//CLO16: JavaScript:

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

 

CLO17: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Set()

people.add(student)
people.add(adjunct)

people.add(adjunct)

//Question: What is the value shown up in the console for the following statements

console.log(people.size)

 

//CLO17: JavaScript:

let students =[ {name:'John Masson'}, {name:'Don Vasco'}, {name:'Mary Landley'}]
let people = new Set(students)

//Question: What is the value shown up in the console for the following statements

console.log(people.has({name:'Dave Vasco'}))

 
