// array = think of it as a variable
//         that can store multiple values

let fruits = ["apple", "orange", "banana"];

// console.log(fruits[2]);

fruits.push("lemon"); // add an element to the end of the array
fruits.pop(); // removes last element from the end of the array
fruits.unshift("mango"); // add element to the beginning
fruits.shift(); // removes element from beginning
console.log(fruits);

let length = fruits.length;
console.log(length);

let index = fruits.indexOf("kiwi");
console.log(index);
