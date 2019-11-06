class Rectangle {
	private length: number = 1.0;
	private width: number = 1.0;

	constructor(length?: number, width?: number) {
		const self = this;
		(Boolean(length) ? self.length = length : self.length);
		(Boolean(width) ? self.length = width : self.width);
	}

	getArea(): number {
		const self = this
		return self.length * self.width;
	}

	getPerimeter(): number {
		const self = this;
		return 2 * (self.width + self.length);
	}

	set _width(width: number) {
		const self = this;
		self.width = width;
	}

	get _width() {
		const self = this;
		return self.width;
	}


	getRectangleDetails(): string {
		const self = this;
		return `Rectangle[length=${self.length}, width=${self.width}, area=${self.getArea()}, perimeter=${self.getPerimeter()}]`;
	}
}

let r1 = new Rectangle(5, 3);
console.log('R1', r1.getRectangleDetails());