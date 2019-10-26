// Base class or parent or super class
class Animal {

    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

// This is a sub class or child class inherits super class
class Dog extends Animal {
    bark() {
        console.log(`Woof! Woof!`);
    }
}


const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();