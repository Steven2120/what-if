const ps = require("prompt-sync");
const prompt = ps();
let earthWeight = 128;
let venus = 0.78;
let mars = 0.39;
let jupiter = 2.65;
let saturn = 1.17;
let uranus = 1.05;
let neptune = 1.23;
let planetWeight = 0;

let planet = prompt("Enter planet name: ");
if (planet == "venus") {
  planetWeight = earthWeight * venus;
  console.log(`Julio needs to be ${planetWeight} lbs`);
} else if (planet == "mars") {
  planetWeight = earthWeight * mars;
  console.log(`Julio needs to be ${planetWeight} lbs`);
} else if (planet == "jupiter") {
  planetWeight = earthWeight * jupiter;
  console.log(`Julio needs to be ${planetWeight} lbs`);
} else if (planet == "saturn") {
  planetWeight = earthWeight * saturn;
  console.log(`Julio needs to be ${planetWeight} lbs`);
} else if (planet == "uranus") {
  planetWeight = earthWeight * uranus;
  console.log(`Julio needs to be ${planetWeight} lbs`);
} else if (planet == "neptune") {
  planetWeight = earthWeight * neptune;
  console.log(`Julio needs to be ${planetWeight} lbs`);
}
