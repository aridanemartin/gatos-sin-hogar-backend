import { Router } from "express";
import { CatController } from "../controllers/CatController.js";

export const createCatRouter = ({ CatModel }) => {
    const catRouter = Router();

    const catController = new CatController({ CatModel });

    catRouter.get('/', catController.getAll);
    catRouter.get('/:id', catController.getById);
    catRouter.post('/', catController.create);
    catRouter.put('/:id', catController.update);
    catRouter.delete('/:id', catController.delete);
    
    return catRouter;
}