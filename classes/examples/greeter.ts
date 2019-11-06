class Greeter {

    greeting: string;

    constructor(message: string) {
        const self = this;
        self.greeting = message;
    }

    greet() {
        const self = this;
        return `Hello ${self.greeting}`;
    }

}

let greeter = new Greeter("world");
console.log(greeter.greet());