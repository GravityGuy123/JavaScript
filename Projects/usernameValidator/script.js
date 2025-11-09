const currentUsers = ["DevDemon", "Edu-Crypt", "megapips", "DevDiva", "Paragon123", "John173"]

// Make a copy and convert all usernames to lowercase
const currentUsersCopy = currentUsers.map((users) => users.toLowerCase())

console.log("Current Users:", currentUsers);
console.log("\nCurrent Users Copy:", currentUsersCopy, "\n");

const newUsers = ["Raone", "KD_Banger", "BiteCruncher", "edu-crypt", "Paragon123", "JOHN", "MegAPiPs", "Badest-X"];
console.log("\nNew Users:", newUsers);

for (let newUser of newUsers) {
    if (currentUsersCopy.includes(newUser.toLowerCase())) {
        console.log(`${newUser} is taken, please enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
};