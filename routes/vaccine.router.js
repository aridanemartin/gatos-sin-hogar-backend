import { Router } from "express";
import { VaccineController } from "../controllers/VaccineController.js";

export const createVaccineRouter = ({ VaccineModel }) => {
    const vaccineRouter = Router();

    const vaccineController = new VaccineController({ VaccineModel });

    vaccineRouter.get('/', vaccineController.getAll);
    vaccineRouter.get('/:id', vaccineController.getById);
    vaccineRouter.post('/', vaccineController.create);
    vaccineRouter.put('/:id', vaccineController.update);
    vaccineRouter.delete('/:id', vaccineController.delete);
    
    return vaccineRouter;
}