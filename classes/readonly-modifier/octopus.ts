class Octopus {
	readonly name: string;
	readonly numberOfLegs: number = 8;
	constructor(name: string) {
		this.name = name;
	}
}

let dad = new Octopus("Man with 8 strong legs");
dad.name = "Man with a 3-piece suit"
//  error! name is readonly.