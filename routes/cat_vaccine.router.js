import { Router } from 'express';
import { CatVaccineController } from '../controllers/CatVaccineController.js';

export const createCatVaccineRouter = ({ CatVaccineModel }) => {
    const catVaccineRouter = Router();

    const catVaccineController = new CatVaccineController({ CatVaccineModel });

    catVaccineRouter.get('/', catVaccineController.getAll);
    catVaccineRouter.get('/:id', catVaccineController.getById);
    return catVaccineRouter;
};
