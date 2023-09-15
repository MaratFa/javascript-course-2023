document.getElementById("submitButton").onclick = function () {
  let temp = Number(document.getElementById("textBox").value);

  if (document.getElementById("cButton").checked) {
    temp = (temp - 32) * (5 / 9);
    document.getElementById("tempLabel").innerHTML = temp + " &#8451";
  } else if (document.getElementById("fButton").checked) {
    temp = (temp * 9) / 5 + 32;
    document.getElementById("tempLabel").innerHTML = temp + " &#8457";
  } else {
    document.getElementById("tempLabel").innerHTML = "Select a unit";
  }
};
