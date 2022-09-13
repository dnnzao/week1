class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
    }
    toString() {
        return '(' + this.wheels + ')';
    }
}
class Car extends Vehicle {
    constructor(color) {
        super(4);
        this.color = color;
    }
    toString() {
        return super.toString() + ' colored: ' + this.color;
    }
}
let car = new Car('blue');
car.toString();
if (car instanceof Car) console.log("car is an instance of Car");
if (car instanceof Vehicle) console.log("car is an instance of Vehicle");