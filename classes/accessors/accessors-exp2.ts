const fullNameMaxLength: number = 10;


class Employee {
	private _fullName: string;


	get fullName(): string {
		const self = this;
		return self._fullName;
	}

	set fullName(newName: string) {
		const self = this;
		if (Boolean(newName) === true && (newName.length > fullNameMaxLength) === true) {
			throw new Error(`FullName has a max length of ${fullNameMaxLength}`);
		} else {
			self._fullName = newName;
		}
	}
};


let employee = new Employee();
let theName: string = employee.fullName = 'Rodddddddddddddddyce';
if (Boolean(theName) === true) {
	console.log('theName', theName);
}