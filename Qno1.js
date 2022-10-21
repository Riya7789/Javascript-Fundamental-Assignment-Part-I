// Create an object student which has properties name, sclass and rollno. And write javascript program to 
// list the properties of a JavaScript object
// delete the rollno property from the following object. Also print the object before or after deleting the property.
// get the length of a JavaScript object.



let student = {
    name: "Riya Shrestha",
    class: "Bachelor",
    RollNo: "17",
  };
  
  let list = Object.keys(student);
  list.forEach((element) => {
    console.log(element);
  });
  // Before deleting
  console.log(student);
  
  // After deleting
  
  let d = delete student.RollNo;
  console.log(student);

  // length of student object
  console.log(list.length);