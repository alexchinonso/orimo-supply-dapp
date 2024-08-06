import { Product } from '../model/product';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { productStorage } from '../storage/product';

export class ProductController {
    async createProduct(data) {
        if (!data.name) {
            return await RollupStateHandler.handleReport({
                error: 'Product name must be provided.',
            });
        }

        return await RollupStateHandler.advanceWrapper(() => {
            const newProduct = new Product(data.name, data.description);
            productStorage.addOne(newProduct);

            return {
                ok: true,
                message: 'Product created successfully!',
                data: newProduct.getData(),
            };
        });
    }

    async getAllProducts() {
        return await RollupStateHandler.inspectWrapper(() =>
            productStorage.getAll()
        );
    }

    async getProductById(data) {
        const productId = data[0];
        const storageRequest = productStorage.getOneById(productId);

        if (!storageRequest?.id)
            return await RollupStateHandler.handleReport({
                error: `Product not found for id '${productId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            data: storageRequest.getData(),
        }));
    }
}
