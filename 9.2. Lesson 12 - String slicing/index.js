// slice() extracts a section of a string
//         and returns it as a new string,
//         without modifying the original string

let fullName = "John Jonson";
let firstName;
let lastName;

// firstName = fullName.slice(0, 4)
// lastName = fullName.slice(5);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.lastIndexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
