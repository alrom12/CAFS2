class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        if (Number.isInteger(year)) {
            this.year = year;
        } else {
            throw 'Parameter is not a number!';
        }
    }

    getTitleAndAuthor() {
        return `${this.title} by ${this.author}`;
    }

    

    getBookAge() {
        return `${new Date().getFullYear() - this.year}`;
    }
}