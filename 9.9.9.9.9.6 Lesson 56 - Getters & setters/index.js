// get = binds an object property to a function
//       when that property is accessed
// set = binds an object property to a function
//       when that property is asigned a value

class Car {
  constructor(power) {
    this._gas = 25;
    this._power = power;
  }
  get power() {
    return `${this._power} hp`;
  }
  get gas() {
    return `${this._gas}L (${(this._gas / 50) * 100} %)`;
  }
  set gas(value) {
    if (value > 50) {
      this._gas = 50;
    } else if (value < 0) {
      this._gas = 0;
    } else {
      this._gas = value;
    }
  }
}

let car = new Car(400);
car.gas = 30;

console.log(car.power);
console.log(car.gas);
