class Circle {
	static PI = 3.14;
	constructor() { }

	computeDiameter(radius: number): number {
		return 2 * radius;
	}

	computeRadius(diameter: number): number {
		return diameter / 2;
	}

	computeArea(radius: number): number {
		const self = this;
		return Circle.PI * Math.pow(radius, 2);
	}

	computeCirumference(radius: number): number {
		const self = this;
		return 2 * Circle.PI * radius;
	}
}

let c1: Circle;
c1 = new Circle();
let diameter: number = c1.computeDiameter(2);
let radius: number = c1.computeRadius(diameter);
let area: number = c1.computeArea(radius);
let circumference: number = c1.computeCirumference(radius);
console.log(`Diameter: `, diameter);
console.log(`Radius: `, radius);
console.log(`Area: `, area);
console.log(`Circumference: `, circumference);
