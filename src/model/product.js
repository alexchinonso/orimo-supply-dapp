import crypto from 'node:crypto';

export class Product {
    id;
    name;
    description;
    createdAt;
    stages;

    constructor(name, description) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.createdAt = Date.now();
        this.stages = new Map();
    }

    getData() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            createdAt: this.createdAt,
        };
    }

    getStageById(id) {
        return this.stages.get(id);
    }

    getStages() {
        return Array.from(this.stages.values());
    }

    addStage(stage) {
        this.stages.set(stage.id, stage);
    }
}
