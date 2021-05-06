//CLO1: JavaScript:

var students = [
  { name: "James", dob: "01/01/2000" },
  { name: "Mandy", dob: "01/01/2001" },
  { name: "Sandy", dob: "01/01/2002" },
  { name: "Harry", dob: "01/01/2003" },
]

////Question: What is the value shown up in the console for the following statements?


// for( var student of students){
//  console.log(student)
// }
// //a) out put { name: 'James', dob: '01/01/2000' }
// // { name: 'Mandy', dob: '01/01/2001' }
// // { name: 'Sandy', dob: '01/01/2002' }
// // { name: 'Harry', dob: '01/01/2003' }
// //-----------B--------------
// for (var student of students) {
//   console.log(`Name = ${student.name}, Date Of Birth = ${student.dob}`)
// }
// // b) out put is Name = James, Date Of Birth = 01/01/2000
// Name = Mandy, Date Of Birth = 01/01/2001
// Name = Sandy, Date Of Birth = 01/01/2002
// Name = Harry, Date Of Birth = 01/01/2003

// c)----------------

for (var student of students) {
  const {name, dob: dateOfBirth} = student
  console.log(`Name = ${name}, Date Of Birth = ${dateOfBirth}`);
}
// output is: Name = James, Date Of Birth = 01/01/2000
// Name = Mandy, Date Of Birth = 01/01/2001
// Name = Sandy, Date Of Birth = 01/01/2002
// Name = Harry, Date Of Birth = 01/01/2003

 