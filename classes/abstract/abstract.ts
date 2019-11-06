// An abstract is always a base class meaning its sa super class a parent class.
// Which other classes may be derived.
// They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members. The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.

abstract class Animal {
	abstract makeSound(): void;
	move(): void {
		console.log('roaming the earth');
	}
}


class Dog extends Animal {
	breed: string
	constructor(breed: string) {
		super();
		this.breed = breed;
	}
	makeSound() {
		console.log('Woof Woof');
	}
	move() {
		super.move();
	}
}

let lab = new Dog('labrador');
lab.makeSound();
lab.move();