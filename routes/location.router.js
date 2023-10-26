import { Router } from "express";
import { LocationController } from "../controllers/LocationController.js";

export const createLocationRouter = ({ LocationModel }) => {
    const locationRouter = Router();

    const locationController = new LocationController({ LocationModel });

    locationRouter.get('/', locationController.getAll);
    locationRouter.get('/:id', locationController.getById);
    locationRouter.post('/', locationController.create);
    locationRouter.put('/:id', locationController.update);
    locationRouter.delete('/:id', locationController.delete);
    
    return locationRouter;
}