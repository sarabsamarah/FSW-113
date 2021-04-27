//CLO1: JavaScript:

// let studentGrades = [ 90, 80 , 88, 98]
// let curveGrages = function( grades, percentage){
//    var newGrades = grades.map( grade=> {
//         return grade * percentage
//     })
//     return newGrades
// }

// var result = curveGrages(studentGrades)

// //Question: What is the value shown up in the console for the following statements?
// // out put is [ NaN, NaN, NaN, NaN ]

// console.log(result)

//CLO2: JavaScript:

// let studentGrades = [ 90, 80 , 88, 98]
// let curveGrages = function( grades, percentage = 1.10){
//    var newGrades = grades.map( grade=> {
//         return grade * percentage
//     })
//     return newGrades
// }

// var result = curveGrages(studentGrades)

// //Question: What is the value shown up in the console for the following statements?
// // output is [ 99.00000000000001, 88, 96.80000000000001, 107.80000000000001 ]
// console.log(result)

//CLO3: JavaScript:

// let studentGrades = [ 90, 80 , 88, 98]
// let curveGrages = function( grades, percentage = 1.10){
//    var newGrades = grades.map( grade=> {
//         return grade * percentage
//     })
//     return newGrades
// }

// var result = curveGrages(studentGrades, 1.33)

// //Question: What is the value shown up in the console for the following statements?
// // output is [ 119.7, 106.4, 117.04, 130.34 ]
// console.log(result)

//CLO3: JavaScript:

// let studentGrades = [ 90, 80 , 88, 98]
// let curveGrages = function( grades, percentage = 1.10){
//    var newGrades = grades.map( grade=> {
//         return grade * percentage
//     })
//     return newGrades
// }

// var result = curveGrages(studentGrades, 1.33)

// //Question: What is the value shown up in the console for the following statements?
// // before fixing it it ran with an error, after fixing it theoutput is: [ 119.7, 106.4, 117.04, 130.34 ]

// console.log(result)

//CLO4: JavaScript:

// let studentGrades = [ 90, 80 , 88, 98]
// let curveGrages = function( grades, percentage = 1.10){
//    var newGrades = grades.map( grade=> {
//         return grade * percentage
//     })
//     return newGrades
// }

// var result = curveGrages(studentGrades)

// //Question: What is the value shown up in the console for the following statements?
// //before fixing the code, it ran with error after fixing the output is: [ 99.00000000000001, 88, 96.80000000000001, 107.80000000000001 ]

// console.log(result)

/////CLO5: JavaScript:

// let studentGrades = [ 90, 80 , 88, 98]
// let curveGrages = function( grades, percentage = 1.10){
//    var newGrades = grades.map( grade => grade * percentage)
//     return newGrades
// }

// var result = curveGrages(1.24, studentGrades)

// //Question: What is the value shown up in the console for the following statements?  error doesnt run anything.

// console.log(result)

//CLO6: JavaScript:

// let studentGrades = [ 90, 80 , 88, 98]
// let curveGrages = function( grades, percentage = 1.10){
//    var newGrades = grades.map( grade=> {
//         return grade * percentage
//     })
//     return newGrades
// }

// var result = curveGrages(undefined, studentGrades)

// //Question: What is the value shown up in the console for the following statements?
// // the outpout is an error cannot read property of 'map' of undefined 

// console.log(result)

//CLO7: JavaScript:

// let studentGrades = [ 90, 80 , 88, 98]

// let percentageCurve = 0.98
// let curveGrages = function( grades, percentage = percentageCurve){
//    var newGrades = grades.map( grade=> {
//         return grade * percentage
//     })
//     return newGrades
// }

// var result = curveGrages(undefined, studentGrades)

// //Question: What is the value shown up in the console for the following statements?
// // does not run, no output

// console.log(result)


//CLO8: JavaScript:

// let studentGrades = [ 90, 80 , 88, 98]
// const avg = function(array){
//    let average = array.reduce((a, b) => a + b, 0)
//    return average/array.length/100
// }
// let curveGrages = function(  percentage = avg(studentGrades),...grades){
//    var newGrades = grades.map( grade=> {
//       return grade * percentage
//     })
//     return newGrades
// }

// var result = curveGrages(1.3, ...studentGrades)

// //Question: What is the value shown up in the console for the following statements?
// // the output is : [ 117, 104, 114.4, 127.4 ]

// console.log(result)

//CLO9: JavaScript:

// let studentGrades = [ 90, 80 , 88, 98]
// const avg = function(array){
//    let average = array.reduce((a, b) => a + b, 0)
//    return average/array.length/100
// }
// let curveGrages = function(  percentage = avg(studentGrades),...grades){
//    var newGrades = grades.map( grade=> {
//       return grade * percentage
//     })
//     return newGrades
// }

// var result = curveGrages(1.3, 68,56, ...studentGrades)

// //Question: What is the value shown up in the console for the following statements?
// // the output is: [ 88.4, 72.8, 117, 104, 114.4, 127.4 ]

// console.log(result)
 

//CLO9: JavaScript: Dynamic function

// let count = new Function("grades", "grades.length")

// var result = count([ 90, 80 , 88, 98])

// //Question: What is the value shown up in the console for the following statements?
// // theoutput is undefined after fixing the syntax.

// console.log(result)




 
 


