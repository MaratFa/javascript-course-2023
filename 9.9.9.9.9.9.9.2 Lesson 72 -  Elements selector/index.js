/*
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";
*/

/*
let fruits = document.getElementsByName("fruits");

fruits.forEach((fruit) => {
  if (fruit.checked) {
    console.log(fruit.value);
  }
});
*/

/*
let vegetables = document.getElementsByTagName("li");
vegetables[2].style.backgroundColor = "lightgreen";
*/

/*
let desserts = document.getElementsByClassName("desserts");
desserts[2].style.background = "grey"
*/

/*
let element = document.querySelector("[for]");
console.log(element);
element.style.backgroundColor = "lightgreen";
*/

let elements = document.querySelectorAll("[for]");
elements.forEach((element) => {
    element.style.backgroundColor = "lightgreen";
  
});
