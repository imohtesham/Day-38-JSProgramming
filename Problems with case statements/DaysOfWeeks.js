const prompt = require("prompt-sync")();

let userNumber = prompt("Enter number between 1 to 7 : ");

let number = +userNumber;

switch (number) {
  case 1:
    console.log("weekday is Monday.");
    break;
  case 2:
    console.log("weekday is Tuesday.");
    break;
  case 3:
    console.log("weekday is Wednesday.");
    break;
  case 4:
    console.log("weekday is Thursday.");
    break;
  case 5:
    console.log("weekday is Friday.");
    break;
  case 6:
    console.log("weekday is Saturday.");
    break;
  case 7:
    console.log("weekday is Sunday.");
    break;
  default:
    console.log("Wrong input");
}