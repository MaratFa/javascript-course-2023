// const element = document.getElementById("myButton");
// const element = document.body;
// const element = document.getElementById("myText");
const element = document.getElementById("myDiv");

// element.onclick = doSomething;
// element.onload = doSomething;
// element.onchange = doSomething;
// element.onmousemove = doSomething;
// element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething() {
  // alert("You did something!");
  element.style.backgroundColor = "green";
}

function doSomethingElse() {
  // alert("You did something!");
  element.style.backgroundColor = "blue";
}
