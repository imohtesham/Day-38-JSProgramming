
const prompt = require("prompt-sync")();

let userNumber = prompt("Enter single digit number to print in word : ");

let number = +userNumber;

switch (number) {
  case 0:
    console.log(number + " Number ZERO");
    break;
  case 1:
    console.log(number + " Number ONE");
    break;
  case 2:
    console.log(number + " Number TWO");
    break;
  case 3:
    console.log(number + " Number THREE");
    break;
  case 4:
    console.log(number + " Number FOUR");
    break;
  case 5:
    console.log(number + " Number FIVE");
    break;
  case 6:
    console.log(number + " Number SIX");
    break;
  case 7:
    console.log(number + " Number SEVEN");
    break;
  case 8:
    console.log(number + " Number EIGHT");
    break;
  case 9:
    console.log(number + " Number NINE");
    break;
  default:
    console.log(" Wrong Input");
}