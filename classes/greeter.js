var Greeter = /** @class */ (function () {
    function Greeter(message) {
        var self = this;
    }
    Greeter.prototype.greet = function () {
        var self = this;
        return "Hello " + self.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter.greet());
