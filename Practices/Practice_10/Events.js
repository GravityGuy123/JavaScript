// const main = document.getElementById("main");


// main.addEventListener("mouseover", (event) =>{
//     console.log(event.type);
//     main.style.backgroundColor = "red";
//     main.style.display = "none";
// })

// main.addEventListener("mouseenter", (event) =>{
//     console.log(event.type);
//     main.style.backgroundColor = "red";
//     // main.style.display = "none";
// })
// main.addEventListener("mouseout", (event) =>{
//     console.log(event.type);
//     main.style.backgroundColor = "blue";
// })

const form = document.getElementById("registration-form");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents the form from performing that default action, in this case is preventing the form from submitting direct. 

    const formData = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      password1: document.getElementById("password-1").value,
      password2: document.getElementById("password-2").value,
    };
    console.log("form submitted:", formData);
    alert("Registration successful!");
    form.reset();
    // if (password1 = password2) {
    // } else {
    //     alert("Passwords does not match")
    // }
})