var fullNameMaxLength = 10;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            var self = this;
            return self._fullName;
        },
        set: function (newName) {
            var self = this;
            if (Boolean(newName) === true && (newName.length > fullNameMaxLength) === true) {
                throw new Error("FullName has a max length of " + fullNameMaxLength);
            }
            else {
                self._fullName = newName;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
;
var employee = new Employee();
var theName = employee.fullName = 'Rodddddddddddddddyce';
if (Boolean(theName) === true) {
    console.log('theName', theName);
}
