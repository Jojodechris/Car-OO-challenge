class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        console.log("Beep");
    }
    toString() {
        console.log('the vehicle is a ' + this.make + ' ' + this.model + ' from ' + this.year);
    }
}
Vehicle = Car
class Car extends Vehicle  {
    constructor(make,model,year,numwheels );
}
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// myFirstVehicle.honk

let myfirstCar = new Car ("Toyota", "Corolla", 2005);

