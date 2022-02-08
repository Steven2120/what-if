let ps = require("prompt-sync");
let prompt = ps();
let groupsOf3 = 0;

let classroom = prompt("Enter a classroom size: ");
if (Number(classroom) % 3 === 0) {
  groupsOf3 = Number(classroom) / 3;
} else if (Number(classroom) % 3 === 1) {
  groupsOf3 = (Number(classroom) - 4) / 3;
  console.log(`There are ${groupsOf3} groups of 3 and 2 groups of 2`);
} else if (Number(classroom) % 3 === 2) {
  groupsOf3 = (Number(classroom) - 2) / 3;
  console.log(`There are ${groupsOf3} groups of 3 and 1 groups of 2`);
}
