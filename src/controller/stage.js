import { Stage } from '../model/stage';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { productStorage } from '../storage/product';

export class StageController {
    async addStage(data) {
        if (!data.product || !data.name) {
            return await RollupStateHandler.handleReport({
                error: 'Product id and stage name must be provided.',
            });
        }

        const product = productStorage.getOneById(data.product);

        if (!product.id) {
            return await RollupStateHandler.handleReport({
                error: `Product not found for id '${data.product}'`,
            });
        }

        return await RollupStateHandler.advanceWrapper(() => {
            const newStage = new Stage(data);
            product.addStage(newStage);
            productStorage.updateOne(product);

            return {
                ok: true,
                message: `Stage added successfully to product '${product.id}'!`,
                data: newStage.getData(),
            };
        });
    }

    async getStageById(data) {
        const productId = data[0];
        const product = productStorage.getOneById(productId);

        if (!product?.id)
            return await RollupStateHandler.handleReport({
                error: `Product not found for id '${productId}'.`,
            });

        const stageId = data[1];
        const stage = product.getStageById(stageId);

        if (!stage?.id)
            return await RollupStateHandler.handleReport({
                error: `Stage not found for id '${stageId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            details: stage,
        }));
    }
}
