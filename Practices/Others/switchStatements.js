let userInput = prompt("Enter any number from 0 - 5");

// 3.
let message = `You chose ${userInput}`;

switch (userInput) {
  case "0":
    console.log(`${message}, Good things aren't very far away.`);
    break;
  case "1":
    console.log(`${message}, your fortune isn't looking very good.`);
    break;
  case "2":
    console.log(`${message}, you will fall in love this weekend.`);
    break;
  case "3":
    console.log(`${message}, brace yourself for better days ahead.`);
    break;
  case "4":
    console.log(`${message}, unlimited favors in bound.`);
    break;
  case "5":
    console.log(`${message}, more money to your account.`);
    break;
  default:
    console.log("Entry out of range");
    break;
}
