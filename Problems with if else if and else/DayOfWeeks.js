// 2.week days name
//For promting message and taking input from console.
const prompt = require("prompt-sync")();

//storing user input into variable.
let userNumber = prompt("Enter number between 1 to 7 : ");

//converting string into number type.
let weekNumber = +userNumber;

if (weekNumber == 1) {
  console.log("weekday is Sunday");
} 
else if (weekNumber == 2) {
  console.log("weekdayis Monday");
} 
else if (weekNumber == 3) {
  console.log("weekday is Tuesday");
} 
else if (weekNumber == 4) {
  console.log("weekday is Wednesday");
} 
else if (weekNumber == 5) {
  console.log("weekday is Thursday");
} 
else if (weekNumber == 6) {
  console.log("weekday is Friday");
} 
else if (weekNumber == 7) {
  console.log("weekday is Saturday");
}
 else {
  console.log("Wrong Input");
}