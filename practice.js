

//Perform Arithamtic Operation And Find MAx And Min Value

const prompt = require('prompt-sync')();

const a = parseInt(prompt("Enter First Number :"));
const b = parseInt(prompt("Enter Second Number :"));
const c = parseInt(prompt("Enter Third Number :"));

let operation1 = a + (b*c);
let operation2 = a % (b+c);
let operation3 = c + (a/b);
let operation4 = a * (b+c);

let maximum = Math.max(operation1, operation2, operation3, operation4);
let minimum = Math.min(operation1, operation2, operation3, operation4);

console.log("The Value for Operation1 is :" +operation1);
console.log("The Value for Operation2 is :" +operation2);
console.log("The Value for Operation3 is :" +operation3);
console.log("The Value for Operation4 is :" +operation4);
console.log("The Maximum Number Is : " +maximum);
console.log("The Minimum Number Is : " +minimum);