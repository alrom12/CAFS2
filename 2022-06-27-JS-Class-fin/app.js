category = {
    1: "T-shirts", 
    2: "Pants",
    3: "Sweaters", 
    4: "Shoes"
};

currentProducts = [
    new Product("Shirt Red slim fit", 10, 0, 1),
    new Product("Pants brown long", 20, 15, 2),
    new Product("Sweater casual grey green", 30, 25, 3),
    new Product("Shoes runner", 40, 35, 4),
    new Product("Shoes walker", 37, 24, 4),
];

console.log(currentProducts);
console.log(filterByPrice(currentProducts, undefined, 30));
console.log(filterByCategory(currentProducts, 3));
console.log(filterHasSalePrice(currentProducts));
console.log(`Product ${currentProducts[1].name} has discount ${currentProducts[1].getSalePriceDiscount()}%`);