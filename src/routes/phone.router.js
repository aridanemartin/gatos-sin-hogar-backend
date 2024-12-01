import { Router } from "express";
import { PhoneController } from "../controllers/PhoneController.js";

export const createPhoneRouter = ({ PhoneModel }) => {
    const phoneRouter = Router();

    const phoneController = new PhoneController({ PhoneModel });

    phoneRouter.get('/', phoneController.getAll);
    phoneRouter.get('/:id', phoneController.getById);
    phoneRouter.post('/', phoneController.create);
    phoneRouter.put('/:id', phoneController.update);
    phoneRouter.delete('/:id', phoneController.delete);
    
    return phoneRouter;
}