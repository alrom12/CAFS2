class Motocycle extends Car {
    constructor(make, model, year, wheels) {
        super(make, model, year);
        if(Number(wheels)) {
            this.wheels = wheels;
        } else {
            throw new Error('Wheels must be a number');
        }

    }

    getWheels() {
        return this.wheels;
    }

    getWheelsText() {
        if (this.wheels === 2) {
            return 'Motocycle has 2 wheels';
        } else if (this.wheels === 3) {
            return 'Motocycle has 3 wheels';
        } else {
            return 'Motocycle has unusual number of wheels';
        }
    }
}