class ProductStorage {
    products;

    constructor() {
        this.products = new Map();
    }

    getAll() {
        return Array.from(this.products.values());
    }

    addOne(product) {
        this.products.set(product.id, product);
    }

    getOneById(id) {
        return this.products.get(id);
    }

    updateOne(product) {
        this.products.set(product.id, product);
    }
}

export const productStorage = new ProductStorage();
