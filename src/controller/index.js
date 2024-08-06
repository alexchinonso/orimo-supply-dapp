import { ProductController } from './product';
import { StageController } from './stage';

const productController = new ProductController();
const stageController = new StageController();

export const controller = {
    createProduct: productController.createProduct,
    getAllProducts: productController.getAllProducts,
    getProductById: productController.getProductById,
    addStage: stageController.addStage,
    getStageById: stageController.getStageById,
};
