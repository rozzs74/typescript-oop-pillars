class Car {

    color: string;
    engine: string;
    size: number;
    isCarOn: boolean;
    gasVolumelevel: number;


    constructor(color: string, engine: string, size: number, isCarOn: boolean, gasVolumelevel: number) {
        const self = this;
        self.color = color;
        self.engine = engine;
        self.size = size;
        self.isCarOn = isCarOn;
        self.gasVolumelevel = gasVolumelevel;
    }

    protected engineOn(engine: string, state: boolean) {
        const self = this;
        self.engine = engine;
        self.isCarOn = state;
    }

    protected engineOff(engine: string, state: boolean): boolean {
        const self = this;
        self.engine = engine;
        self.isCarOn = state;
        return true;
    }

    public getGasVolumelevel() {
        const self = this;
        return self.gasVolumelevel;
    }

    private getColor() {
        const self = this;
        return self.color;
    }
}


class Honda extends Car {
    constructor(color: string, engine: string, size: number, isCarOn: boolean, gasVolumelevel: number) {
        super(color, engine, size, isCarOn, gasVolumelevel);
    }
    engineOn() {

    }

    move() {
        let gasLevel = super.getGasVolumelevel();
        console.log(gasLevel);
    }
}

let myCar = new Honda('white', '1.5L-iVtec', 100, false, 100);
myCar.move();