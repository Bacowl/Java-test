const readlineSync = require("readline-sync");

var base = Number(readlineSync.question("\nEnter base: "));
var height = Number(readlineSync.question("Enter height: "));
var hypotenuse = Number(readlineSync.question("Enter hypotenuse: "));

if (base**2 + height**2 == hypotenuse**2) {
  console.log("\nYep, that's a right triangle!")
} else {
  console.log("\nNope...not a right triangle!")
}
