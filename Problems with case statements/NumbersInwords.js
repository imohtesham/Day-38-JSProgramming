const prompt = require("prompt-sync")();

//storing user input into variable.
let userNumber = prompt("Enter number like 1,10,100,1000......100000000: ");

let number = +userNumber;

switch (number) {
  case 1:
    console.log("Unit.");
    break;
  case 10:
    console.log("Ten.");
    break;
  case 100:
    console.log("Hundred.");
    break;
  case 1000:
    console.log("Thousand's.");
    break;
  case 10000:
    console.log("Ten Thousand's.");
    break;
  case 100000:
    console.log("Lakh's.");
    break;
  case 10000000:
    console.log("Crore's.");
    break;
  default:
    console.log("Wrong input");
}