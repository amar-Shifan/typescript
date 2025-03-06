// Abstraction 
abstract class Vehicle{
    protected brand: string

    constructor(brand: string) {
        this.brand = brand
    }

    showBrand(){
        console.log(this.brand)
    }

    abstract startEngine(): void
}

class Car extends Vehicle{
    startEngine(): void {
        console.log(`${this.brand} , engine started `)
    }
}

const myCar = new Car('Toyota');
myCar.showBrand()
myCar.startEngine()


// using abstract classes
interface Animal {
    name: string;
    makeSound(): void; // Abstract method
  }
  
  class Dog implements Animal {
    name: string;
    
    constructor(name: string) {
      this.name = name;
    }
  
    makeSound(): void {
      console.log(`${this.name} barks.`);
    }
}
  
const myDog = new Dog("Buddy");
myDog.makeSound();
  