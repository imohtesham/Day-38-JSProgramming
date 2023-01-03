// 2.Write a program that takes day and month from the command line and prints true if
//day of month is between March 20 and June 20, false otherwise.
//Reading data from console.

const prompt = require("prompt-sync")();

const month = prompt("Enter Month in number : ");
const date = prompt("Enter date in number: ");

//converting string type data to number type data.
let monthNumber = +month;
let dateNumber = +date;

//final condition.
if (
  monthNumber <= 6 &&
  dateNumber <= 15 &&
  monthNumber >= 3 &&
  dateNumber <= 20 &&
  dateNumber < 31
) {
  console.log("Given date  between March 20 AND June 20");
} else {
  console.log("Given date does not between March 20 AND June 20");
}