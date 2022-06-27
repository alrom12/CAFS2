class Product {
    constructor(name, price, salePrice, categoryId) {
        this.name = name;
        this.price = +price;
        (!salePrice.length) ? this.salePrice = salePrice : this.salePrice = this.salePrice = 0;
        this.salePrice = +salePrice;
        this.categoryId = categoryId;
        this.categoryName = category[categoryId];
    }

    getNameAndCurrentPrice() {
        return (this.salePrice === 0) ? 
        {name: this.name, price: this.price} : 
        {name: this.name, price: this.salePrice};
    }

    getSalePrice() {
        return (this.salePrice === 0) ? false : this.salePrice;
    }

    getSalePriceDiscount() {
        return (this.salePrice === 0) ? false : (100 * (this.price - this.salePrice) / this.price);
    }
}