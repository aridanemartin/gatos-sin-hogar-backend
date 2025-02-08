import { Router } from 'express';
import { BreedController } from '../controllers/BreedController.js';

export const createBreedRouter = ({ BreedModel }) => {
    const breedRouter = Router();

    const breedController = new BreedController({ BreedModel });

    breedRouter.get('/', breedController.getAll);
    breedRouter.get('/:id', breedController.getById);
    breedRouter.post('/', breedController.create);
    breedRouter.put('/:id', breedController.update);
    breedRouter.delete('/:id', breedController.delete);

    return breedRouter;
};
