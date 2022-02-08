const ps = require("prompt-sync");
const prompt = ps();
let num = prompt(`Enter a num: `);
if (Number(num) % 3 === 0 && Number(num) % 5 === 0) {
  console.log("fizzbuzz");
} else if (Number(num) % 3 === 0) {
  console.log("fizz");
} else if (Number(num) % 5 === 0) {
  console.log("buzz");
}
