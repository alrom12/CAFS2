class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        if(Number(year)) {
            this.year = year;
        } else {
            throw new Error('Year must be a number');
        }
    }

    getIntroduction() {
        return `${this.make} ${this.model}`;
    }

    getAge() {
        return new Date().getFullYear() - this.year;
    }

    getAge10() {
        return this.getAge() <= 10 ? '10 years or less' : '11 year or more';
    }
}