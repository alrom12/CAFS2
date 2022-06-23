class Movie {
    constructor(name, year, director, budget, income) {
        this.name = name;
        if (Number.isInteger(year)) {
            this.year = year;
        } else {
            throw 'Year is not a number!';
        }
        this.director = director;
        if (Number.isInteger(budget) || Number.isInteger(budget)) {
            this.budget = budget;
            this.income = income;
        } else {
            throw 'Budget or Income is not a number!';
        }
    }

    getIntroduction() {
        return `${this.name} was released in ${this.year} and directed by ${this.director}`;
    }

    getProfit() {
        return `Profit: ${this.income - this.budget}`;
    }
}