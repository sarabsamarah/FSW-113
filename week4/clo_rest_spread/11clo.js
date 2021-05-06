var columnName = "Name";
var name = {};
var student = {
  get [columnName]() {
    return name;
  },
  set [columnName](value) {
    name = value;
  },
};

student.Name = "Harry Potter";

//Question: What is the value shown up in the console for the following statements?

console.log(student.Name); 

