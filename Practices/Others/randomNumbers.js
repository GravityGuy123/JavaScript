let numbers = [];

while (numbers.length < 10) {
  let randomNumber = Math.floor(Math.random() * 11);
  numbers.push(randomNumber);
}

console.log(numbers);
