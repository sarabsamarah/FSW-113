let grades = [90,98,78,99]
let studentGrades = Array.from(grades, function(g){
return  g * this.percentageIncrement},{percentageIncrement:1.10});

// //Question: What is the value shown up in the console for the following statements

console.log(studentGrades)
// output is [ 99.00000000000001, 107.80000000000001, 85.80000000000001, 108.9 ]
