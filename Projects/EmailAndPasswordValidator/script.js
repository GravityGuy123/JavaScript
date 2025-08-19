// const validateEmail = prompt("Enter your email address");
// if (!validateEmail) {
//     console.log("Email cannot be empty😓");
// } else {
//     const hasAt = validateEmail.split("@").length -1;
//     const hasDot = validateEmail.includes(".");
//     if (hasAt === 1 && hasDot) {
//         console.log(`Congrats, your email: ${validateEmail.toLowerCase()} is valid.`)
//     } else if (hasAt !== 1) {
//         console.log("Your email must contain exactly one '@'.");
//     } else if (!hasDot) {
//         console.log("Your email must contain at least one dot.")
//     }
// }


// const validatePassword = prompt("Enter your password e.g Abcdefg1");
// if (!validatePassword) {
//     console.log("Your password cannot be empty.")
// } else {
//     const length = validatePassword.length >= 8;
//     let hasUpper = false;
//     let hasLower = false;
//     let hasDigit = false;
    
//     for (let char of validatePassword) {
//         if (char >= "A" && char <= "Z") hasUpper = true;
//         else if (char >= "a" && char <= "z") hasLower = true;
//         else if (char >= "0" && char <= "9") hasDigit = true;
//     }
//     if (length && hasUpper && hasLower && hasDigit) {
//         console.log("Congrats, your password is valid.")
//     } else {
//         console.log(
//           "Password must be at least 8 characters, contain uppercase, lowercase, and a digit."
//         );
//     }
// }



const validatePassword = prompt("Enter your password e.g Abcdefg1");
if (!validatePassword) {
  console.log("Password cannot be empty😓");
} else {
  const length = validatePassword.length >= 8;

  let hasUpper = false;
  let hasLower = false;
  let hasDigit = false;

  for (char of validatePassword) {
    if (char >= "A" && char <= "Z") hasUpper = true;
    else if (char >= "a" && char <= "z") hasLower = true;
    else if (char >= "0" && char <= "9") hasDigit = true;
  }

  if (length && hasUpper && hasLower && hasDigit) {
    console.log("Congrats, your password is valid.");
  } else if (!length) {
    console.log("Your password must be atleast eight (8) characters long.");
  } else if (!hasUpper) {
    console.log("Your password must contain atleast one uppercase character");
  } else if (!hasLower) {
    console.log("Your password must contain atleast one lowercase character");
  } else if (!hasDigit) {
    console.log("Your password must contain atleast one digit.");
  }
}




// const validatePassword = prompt("Enter your password e.g Abcdefg1");

// if (!validatePassword) {
//   console.log("Password cannot be empty");
// } else {
//   const length = validatePassword.length >= 8;

//   let hasUpper = false;
//   let hasLower = false;
//   let hasDigit = false;

//   // Instead of looping manually, use array methods
//   hasUpper = validatePassword
//     .split("")
//     .some((char) => char >= "A" && char <= "Z");
//   hasLower = validatePassword
//     .split("")
//     .some((char) => char >= "a" && char <= "z");
//   hasDigit = validatePassword
//     .split("")
//     .some((char) => char >= "0" && char <= "9");

//   if (length && hasUpper && hasLower && hasDigit) {
//     console.log("Congrats, your password is valid.");
//   } else if (!length) {
//     console.log("Your password must be at least eight (8) characters long.");
//   } else if (!hasUpper) {
//     console.log("Your password must contain at least one uppercase character.");
//   } else if (!hasLower) {
//     console.log("Your password must contain at least one lowercase character.");
//   } else if (!hasDigit) {
//     console.log("Your password must contain at least one digit.");
//   }
// }