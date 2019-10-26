// Super purpose is to execute the constructor of the base class. TS always enforce this when extending superclass to subclass.

class Animal {
    name: string;

    constructor(name: string) {
        const self = this;
        self.name = name;
    }

    move(distanceInMeters: number = 0) {
        const self = this;
        console.log(`${self.name} moved ${distanceInMeters}`);
    }

}

class Monkey extends Animal {

    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 5) {
        console.log(`Hop N Jump!`);
        super.move(distanceInMeters);
    }

}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 45) {
        const self = this;
        console.log('Galloping!!');
        super.move(distanceInMeters);
    }
}

const Harambe = new Monkey("Harambe the Gorilla");
const Clyde: Animal = new Horse("Clyde Van Dusen");

Harambe.move();
Clyde.move(100);
