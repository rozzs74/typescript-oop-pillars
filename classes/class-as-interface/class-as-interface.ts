class Point {
	x: number;
	y: number;
};


interface Point3d extends Point {
	z: number;
}
let points: Point3d = {
	x: 1,
	y: 2,
	z: 3
};