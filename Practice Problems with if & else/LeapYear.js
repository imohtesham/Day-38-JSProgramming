// 3.For leap year
//Reading data from console.
const prompt = require("prompt-sync")();

//storing user input in a variable.
let year = prompt("Enter year in number format : ");

//converting string to number type.
let numberYear = +year;

// checking if user input is 4 digit value or not.
if (numberYear >= 1000 && numberYear <= 9999) {
  //condition for checking leap year.
  if (numberYear % 4 == 0 && (numberYear % 100 != 0 || numberYear % 400 == 0)) {
    console.log(numberYear + " Is a leap year.");
  } else {
    console.log(numberYear + " Is not a leap year.");
  }
} else {
  console.log("Enter 4 digit year only.");
}