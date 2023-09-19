// static = belongs to the class, not the objects
//          properties: useful for caches, fixed-configuration
//          methods:    useful for utility functions

console.log(Math);

class Car {
  static numbersOfCars = 0;

  constructor(model) {
    this.model = model;
    Car.numbersOfCars += 1;
  }

  static startRace() {
    console.log("3...2...1...GO!");
  }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");
const car4 = new Car("Ferrary");

Car.startRace();
