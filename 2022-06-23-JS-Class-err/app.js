class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Rabbit extends Animal {
    created = Date.now();
}
let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
console.log(rabbit);