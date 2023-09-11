// return = returns a value back to the place
//          where you invoked a function

let width, height, area;

width = window.prompt("Enter a width of area");
height = window.prompt("Enter a height of area");

getArea = (width, height) => width * height;

area = getArea(width, height);

console.log("The area is:", area);
