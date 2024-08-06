import crypto from 'node:crypto';

export class Stage {
    id;
    product;
    name;
    description;
    timestamp;

    constructor({ product, name, description }) {
        this.product = product;
        this.name = name;
        this.id = crypto.randomUUID();
        this.timestamp = Date.now();
        this.description = description;
    }

    getData() {
        return {
            id: this.id,
            product: this.product,
            name: this.name,
            description: this.description,
            timestamp: this.timestamp,
        };
    }
}
