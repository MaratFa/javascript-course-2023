// function = Define code once, and use it many times.
//            To perform some code, call the function mame.

happyBirthday = (userName, age) => {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear", userName);
  console.log("Happy birthday to you!");
  console.log("You are", age, "years old!");
};

startProgram = () => {
  let userName = "John";
  let age = 23;
  happyBirthday(userName, age);
};

startProgram();
