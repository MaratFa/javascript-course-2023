/* Type Conversion = change the datatype of a value to another
                     (strings, number, booleans)
*/

/*
    let age = window.prompt("How old are you?");

    age = Number(age);
    console.log(typeof age)
    age += 1;
    console.log("Happy Birthday! You are", age, "years old.")
*/

let x;
let y;
let z;

x = Number("pizza");
y = String(x);
z = Boolean("");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);