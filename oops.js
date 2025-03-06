var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstraction 
var Vehicle = /** @class */ (function () {
    function Vehicle(brand) {
        this.brand = brand;
    }
    Vehicle.prototype.showBrand = function () {
        console.log(this.brand);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.startEngine = function () {
        console.log("".concat(this.brand, " , engine started "));
    };
    return Car;
}(Vehicle));
var myCar = new Car('Toyota');
myCar.showBrand();
myCar.startEngine();
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " barks."));
    };
    return Dog;
}());
var myDog = new Dog("Buddy");
myDog.makeSound();
