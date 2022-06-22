class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getTitleAndAuthor() {
        return `${this.title} by ${this.author}`;
    }

    getBookAge() {
        return `${new Date().getFullYear() - this.year}`;
    }
}