let maxAttempts = 5;
let password = "Abc123";
let counter = 0;

let userPassword;

while (counter < 5) {
    let attemptsLeft = maxAttempts - counter;

    userPassword = prompt(
        `Enter your password - ${attemptsLeft} attempts left`
    );

    counter = counter += 1

    if (!userPassword) continue;

    if (userPassword.toLowerCase().trim() === "q") {
        console.log("User Quit");
        break;
    } else if (userPassword !== password) {
        console.log("Incorrect password");
    } else {
        console.log("Password correct. Access granted");
        break;
    }
}

if (counter === maxAttempts && userPassword !== password) {
    alert("Max attempts reached. Access denied.")
    console.log("Max attempts reached. Access denied.")
}