// Write a JavaScript program to create a new string with the first 3 characters in lower case from a given string. 
// If the string length is less than 3 convert all the characters in upper case.

function up_low(str) {
    if (str.length < 3) {
      return str.toUpperCase();
    }
    front = (str.substring(0, 3)).toLowerCase();
    back = str.substring(3, str.length);  
    return front + back;
  }
  console.log(up_low("Infodevelopers"));
  console.log(up_low("Info"));
  console.log(up_low("INFODevelop"));