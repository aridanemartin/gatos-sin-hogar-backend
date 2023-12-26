import { Router } from 'express';
import { GenderController } from '../controllers/GenderController.js';

export const createGenderRouter = ({ GenderModel }) => {
    const genderRouter = Router();

    const genderController = new GenderController({ GenderModel });

    genderRouter.get('/', genderController.getAll);

    return genderRouter;
};
