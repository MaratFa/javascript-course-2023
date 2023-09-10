document.getElementById("myButton").onclick = function () {
  const checkBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const paypalBtn = document.getElementById("paypalBtn");

  if (checkBox.checked) {
    console.log("You are subscribed!");
  } else {
    console.log("You are NOT subsribed!");
  }

  if (visaBtn.checked) {
    console.log("You are paying with visa card!");
  } else if (mastercardBtn.checked) {
    console.log("You are paying with mastercard!")
  } else if (paypalBtn.checked) {
    console.log("You are paying with paypal!")
  } else {
    console.log("You must select a payment type!")
  }
};

