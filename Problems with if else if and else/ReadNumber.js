//3.Read Numbers 
//For promting message and taking input from console.
const prompt = require("prompt-sync")();

//storing user input into variable.
let userNumber = prompt("Enter number like 1,10,100,1000...:: ");

let number = +userNumber;

//Printing according to number
if (number == 1) {
  console.log("Unit");
} else if (number == 10) {
  console.log("Ten's");
} else if (number == 100) {
  console.log("Hundred's");
} else if (number == 1000) {
  console.log("Thousand's");
} else if (number == 10000) {
  console.log("Ten Thousand's");
} else if (number == 100000) {
  console.log("Lakh's");
} else if (number == 10000000) {
  console.log("Crore's");
} else if (number == 100000000) {
  console.log("Invalid Number");
}