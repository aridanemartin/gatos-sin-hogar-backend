import { Router } from 'express';
import { CatController } from '../controllers/CatController.js';
import { paginationMiddleware } from '../middlewares/pagination.middleware.js';

export const createCatRouter = ({ CatModel }) => {
    const catRouter = Router();

    const catController = new CatController({ CatModel });

    catRouter.get('/', paginationMiddleware, catController.getAll);
    catRouter.get('/:id', catController.getById);
    catRouter.post('/', catController.create);
    catRouter.put('/:id', catController.update);
    catRouter.delete('/:id', catController.delete);

    return catRouter;
};
