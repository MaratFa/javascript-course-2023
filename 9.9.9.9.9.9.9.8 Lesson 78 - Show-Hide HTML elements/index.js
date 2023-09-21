const myButton = document.querySelector("#myButton");
const myImg = document.querySelector("#myImg");

myButton.addEventListener("click", () => {
  if (myImg.style.visibility == "visible") {
    myImg.style.visibility = "hidden";
  } else {
    myImg.style.visibility = "visible";
  }
});
