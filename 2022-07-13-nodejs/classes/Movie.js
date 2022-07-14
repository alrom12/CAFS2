class Movie {
    constructor(name, year, director, budget, income) {
        this.name = name;
        this.year = year;
        this.director = director;
        if (Number(budget) || Number(budget)) {
            this.budget = budget;
            this.income = income;
        } else {
            throw new Error('Budget or Income is not a number!');
        }
    }

    set year(value) {
        if (Number(value) && !isNaN(value)) {
            this._year = value;
        } else {
            throw new Error('Year is not a number!');
        }
    }

    getIntroduction() {
        return `${this.name} was released in ${this._year} and directed by ${this.director}`;
    }

    getProfit() {
        return this.income - this.budget;
    }
}
module.exports = Movie;