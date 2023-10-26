import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController.js";

export const createCategoryRouter = ({ CategoryModel }) => {
    const categoryRouter = Router();

    const categoryController = new CategoryController({ CategoryModel });

    categoryRouter.get('/', categoryController.getAll);
    categoryRouter.get('/:id', categoryController.getById);
    categoryRouter.post('/', categoryController.create);
    categoryRouter.put('/:id', categoryController.update);
    categoryRouter.delete('/:id', categoryController.delete);
    
    return categoryRouter;
}