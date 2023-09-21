let element = document.querySelector("#dessert");
let children = Array.from(element.children);
console.log(children);
children.forEach((child) => {
  child.style.backgroundColor = "lightgreen";
});

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)
