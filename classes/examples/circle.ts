class Circle {

	static PI: number = 3.14;
	private radius: number = 1.0;
	private color: string = 'red';

	constructor(radius?: number) {
		const self = this;
		self.radius = radius ? radius : self.radius;
	};

	getRadius(): number {
		const self = this;
		return self.radius;
	}

	getArea(): number {
		const self = this;
		return Circle.PI * Math.pow(self.radius, 2);
	}

	getColor(): string {
		const self = this;
		return self.color;
	}

	getCircumference() {
		const self = this;
		return 2 * Circle.PI * self.radius;
	}

	getDiameter(): number {
		const self = this;
		return 2 * self.radius;
	}

	get _radius() {
		const self = this;
		return self.radius;
	}

	set _radius(radius: number) {
		const self = this;
		self.radius = radius;
	}

	getCircleDetails(): string {
		const self = this;
		return `Circle[radius=${self.radius}cm, color=${self.color}, area=${self.getArea()}cm, circumference=${self.getCircumference()}cm, diameter=${self.getDiameter()}cm]`
	}
};

let c1: Circle;
c1 = new Circle(2);
// console.log('c1 radius', c1.getRadius());
// console.log('c1 area', c1.getRadius());
console.log('Circle', c1.getCircleDetails());
// let c2 = new Circle();
// console.log('c2 radius', c2.getRadius());
// console.log('c2 area', c2.getArea());

