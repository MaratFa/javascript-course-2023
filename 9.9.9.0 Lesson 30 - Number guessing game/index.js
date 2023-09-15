const rightAnswer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function () {
  let userGuess = Number(document.getElementById("guessField").value);
  guesses += 1;

  if (guesses < 5) {
    if (userGuess > 0 && userGuess <= 10) {
      if (userGuess == rightAnswer) {
        alert(`You won! Correct answer is ${rightAnswer}`);
      } else {
        userGuess < rightAnswer
          ? alert(
              `Please enter a higher number! Remaining attempts: ${
                10 - guesses
              }`
            )
          : alert(
              `Please enter a lower number! Remaining attempts: ${
                5 - guesses
              }`
            );
      }
    } else {
      alert("Please enter a number between 1 - 10!");
    }
  } else {
    alert("Game over!");
  }
};
