import { Router } from "express";
import { ClinicController } from "../controllers/ClinicController.js";

export const createClinicRouter = ({ ClinicModel }) => {
    const clinicRouter = Router();

    const clinicController = new ClinicController({ ClinicModel });

    clinicRouter.get('/', clinicController.getAll);
    clinicRouter.get('/:id', clinicController.getById);
    clinicRouter.post('/', clinicController.create);
    clinicRouter.put('/:id', clinicController.update);
    clinicRouter.delete('/:id', clinicController.delete);
    
    return clinicRouter;
}