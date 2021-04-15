var students = [
    {name: "John", city: "California"},

    {name: "Peter", city: "London"},

    {name: "Matthew", city: "Manchester"},

    {name: "Jane", city: "Phoenix"}
]
// students.forEach(element => console.log(element));

students[0].details = {state: "California", dateOgBirth: "Aug 3", payRate: "22/hour"},
students[1].details = {state: "England", dateOgBirth: "April 18", payRate: "10/hour"},
students[2].details = {state: "England", dateOgBirth: "May 5", payRate: "32/hour"},
students[3].details = {state: "Arizona", dateOgBirth: "June 4", payRate: "45/hour"}
students.forEach(element => console.log(element));


// 

// for(let i= 0; 1<students.length; i=i++){
// console.log(students);
// }

// for ( let i = 1; i < students.length; i++) {
//  console.log(students[i]);
// }
// 
//when running the code, nothing happened but an error that said assignment to constant variable.
const gradStudents = [
    {name: "John", city: "California"},

    {name: "Peter", city: "London"},

    {name: "Matthew", city: "Manchester"},

    {name: "Jane", city: "Phoenix"}
]

// gradStudents.forEach(element => console.log(element));

gradStudents[0].details = {state: "California", dateOgBirth: "Sept 24", payRate: "100/hour"},
gradStudents[1].details = {state: "England", dateOgBirth: "March 25", payRate: "24/hour"},
gradStudents[2].details = {state: "England", dateOgBirth: "July 4", payRate: "55/hour"},
gradStudents[3].details = {state: "Arizona", dateOgBirth: "November 11", payRate: "62/hour"}

gradStudents.forEach(element => console.log(element));


// I really had no idea what to expect, I assumed it would print everything as an array. 



var result = 'x ';
for (var i = 0; i < 11; i++) {

    for (var j = 0; j < 11; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']';
        } 
        else if(j == 0 && i>0){
          result += '[' + i + '] ';
        } 
        else if(i>0 && j>0){
        result += (i*j) + ' ';
        }
    }
    result += '\n'
}

console.log(result);

