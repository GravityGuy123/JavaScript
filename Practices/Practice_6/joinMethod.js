let spreadOperator = ["write", "JavaScript", "everyday"];
let spreadMessage = [
  "I",
  "love",
  "to",
  ...spreadOperator,
  "and",
  "am",
  "fluent",
  "in",
  "it",
];

console.log(spreadMessage);

let message = spreadMessage.join(" ");
console.log(`${message}.`);