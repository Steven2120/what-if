const ps = require("prompt-sync");
const prompt = ps();
let age = Number(prompt("Enter an age: "));

if (age < 16) {
  console.log("You can't drive");
} else if (age >= 16 && age <= 17) {
  console.log("You can drive but not vote");
} else if (age >= 18 && age <= 24) {
  console.log("You cant vote but you not rent a car");
} else {
  console.log("You can do pretty much anything");
}
