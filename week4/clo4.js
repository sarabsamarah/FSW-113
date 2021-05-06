var students = [
    { name: "James", dob: "01/01/2000" },
    { name: "Mandy", dob: "01/01/2001" },
    { name: "Sandy", dob: "01/01/2002" },
    { name: "Harry", dob: "01/01/2003" },
  ];
  
  
  var studentToSearch = { name: "Mandy", dob: "01/01/2001" };
  var result = students.filter((student) => student.name == studentToSearch.name);
  
  
  //Question: What is the value shown up in the console for the following statements?
  
  console.log(result);