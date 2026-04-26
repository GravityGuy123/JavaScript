// FRIEND CHECKER GAME
let userName = prompt("Pls enter your name for a friend check");
userName = userName.toLowerCase().trim();

switch(userName) {
    case "mike":
    case "clara":
    case "neche":
    case "mirabel":
    case "chukwudike":
    case "emma":
    case "ken":
        alert(`${userName} is a friend's name`);
        console.log(`${userName} is a friend's name`);
        break;
    default:
        alert(`${userName} is not a friend's name`);
        console.log(`${userName} is not a friend's name`);
}