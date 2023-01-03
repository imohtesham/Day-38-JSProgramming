// Find minimum and maximum value using random function

Num1 = (Math.floor(Math.random() * 100) % 999) + 100;
Num2 = (Math.floor(Math.random() * 100) % 999) + 100;
Num3 = (Math.floor(Math.random() * 100) % 999) + 100;
Num4 = (Math.floor(Math.random() * 100) % 999) + 100;
Num5 = (Math.floor(Math.random() * 100) % 999) + 100;

console.log(Num1, Num2, Num3, Num4, Num5);
//for maximum
if (
  Num1 > Num2 &&
  Num1 > Num3 &&
  Num1 > Num4 &&
  Num1 > Num5
) {
  console.log("maximum number " + Num1);
}
if (
  Num2 > Num1 &&
  Num2 > Num3 &&
  Num2 > Num4 &&
  Num2 > Num5
) {
  console.log("maximum number " + Num2);
}
if (
  Num3 > Num2 &&
  Num3 > Num1 &&
  Num3 > Num4 &&
  Num3 > Num5
) {
  console.log("maximum number " + Num3);
}
if (
  Num4 > Num2 &&
  Num4 > Num3 &&
  Num4 > Num1 &&
  Num4 > Num5
) {
  console.log("maximum number " + Num4);
}
if (
  Num5 > Num2 &&
  Num5 > Num3 &&
  Num5 > Num1 &&
  Num5 > Num4
) {
  console.log("maximum number " + Num5);
}

//for minimum
if (
  Num1 < Num2 &&
  Num1 < Num3 &&
  Num1 < Num4 &&
  Num1 < Num5
) {
  console.log("minimum number " + Num1);
}
if (
  Num2 < Num1 &&
  Num2 < Num3 &&
  Num2 < Num4 &&
  Num2 < Num5
) {
  console.log("minimum number " + Num2);
}
if (
  Num3 < Num2 &&
  Num3 < Num1 &&
  Num3 < Num4 &&
  Num3 < Num5
) {

  console.log("minimum number " + Num3);
}
if (
  Num4 < Num2 &&
  Num4 < Num3 &&
  Num4 < Num1 &&
  Num4 < Num5
) {
  console.log("maximum number " + Num4);
}
if (
  Num5 < Num2 &&
  Num5 < Num3 &&
  Num5 < Num1 &&
  Num5 < Num4
) {
  console.log("minimum number " + Num5);}
