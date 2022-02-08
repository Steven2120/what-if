const ps = require("prompt-sync");
const prompt = ps();

let monday = "Monday";
let tuesday = "Tuesday";
let wednesday = "Wednesday";
let thursday = "Thursday";
let friday = "Friday";
let saturday = "Saturday";
let sunday = "Sunday";

let day = Number(prompt("Enter a number from 1 to 7: "));
if (day === 1) {
  console.log(monday);
} else if (day === 2) {
  console.log(tuesday);
} else if (day === 3) {
  console.log(wednesday);
} else if (day === 4) {
  console.log(thursday);
} else if (day === 5) {
  console.log(friday);
} else if (day === 6) {
  console.log(saturday);
} else if (day === 7) {
  console.log(sunday);
} else {
  console.log("error");
}
