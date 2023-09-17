// array.filter() = creates a new array with all elements
//                  that pass the test provided by a function

let ages = [18, 14, 21, 43, 3];
let adults = ages.filter(checkAge);

console.log(adults);
adults.forEach(print);

function checkAge(element) {
  return element >= 18;
}

function print(element) {
  console.log(element);
}
