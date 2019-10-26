// Public (Default)
// Private
// Protected
// ReadOnly

class House {
    public address: string;
    public color: string;

    public constructor(address: string, color: string) {
        const self = this;
        self.address = address;
        self.color = color;
    }

    public getAddress(): string {
        const self = this;
        return `${self.address}`;
    }
}

let royceHouse: House = new House("Blk 98 Lot 720 Sansovino Street Luce", "Greeen");
console.log(royceHouse.getAddress());


class Clothe {
    private brand: string;
    public color: string;
    public size: number;
    public constructor(brand: string, color: string, size: number) {
        const self = this;
        self.brand = brand;
        self.color = color;
        self.size = size;
    }
}
let myCloth: Clothe = new Clothe("Nike", "white", 10);


class Animal {
    private name: string;
    constructor(name: string) {
        const self = this;
        self.name = name;
    }
}

class Rhino extends Animal {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private name: string;
    constructor(name: string) {
        const self = this;
        self.name = name;
    }
}

let animal = new Animal("Goat");
let rhino = new Rhino();

let employee = new Employee("Bob");
animal = rhino;

// animal = employee; identical // Error: 'Animal' and 'Employee' are not compatible

class Person {
    protected name: string;
    protected constructor(name: string) {
        const self = this;
        self.name = name;
    }
}

class Student extends Person {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        const self = this;
        self.department = department;
    }

    public speak(): string {
        const self = this;
        return `Hello, my name is ${self.name} and I work in ${self.department}`;
    }
}

let john = new Student("Royce", "Computer Engineering");
console.log(john.speak());
//john.name// error



class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(name: string) {
        this.name = name;
    }
}

let dad = new Octopus("Man with 8 strong legs");
// error! name is readonly. dad.name = "Man with a 3-piece suit"


// Parameter as properties for all modifiers
class Food {
    constructor(public type: string, private color: string, readonly size: number, protected ingredients: string) {

    }
}