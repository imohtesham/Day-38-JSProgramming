const prompt = require("prompt-sync")();

//storing user input into variable.
let choice = prompt(
  "Enter number for options 1 - Feet To Inch: 2 - Feet To Meter: 3 - Inch To Feet: 4 - Meter To Feet: "
);
let userChoice = +choice;

let userNumber = prompt("Enter number for unit conversion : ");
let number = +userNumber;

switch (userChoice) {
  case 1:
    console.log(number + " Feet To Inch is : " + 12 * number);
    break;
  case 2:
    console.log(number + " Feet To Meter is : " + 0.3048 * number);
    break;
  case 3:
    console.log(number + " Inch To Feet is : " + 0.0833 * number);
    break;
  case 4:
    console.log(number + " Meter To Feet is : " + 3.2808 * number);
    break;
  default:
    console.log("Invalid Input.");
}