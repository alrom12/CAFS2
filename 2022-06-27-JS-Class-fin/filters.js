function filterByPrice(products, min, max) {
    if (min === undefined && max === undefined) {
        return products;
    } else if (min === undefined) {
        return products.filter(function(product) {
            return product.price <= max;
        });
    } else if (max === undefined) {
        return products.filter(function(product) {
            return product.price >= min;
        });
    } else {
        return products.filter(function(product) {
            return product.price >= min && product.price <= max;
        });
    }
}

function filterByCategory(products, categoryId) {
    if (categoryId === undefined) {
        return products;
    } else {
        return products.filter(function(product) {
            return product.categoryId === categoryId;
        });
    }
}

function filterHasSalePrice(products) {
    return products.filter(function(product) {
        return product.getSalePrice();
    });
}