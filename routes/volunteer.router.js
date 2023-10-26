import { Router } from "express";
import { VolunteerController } from "../controllers/VolunteerController.js";

export const createVolunteerRouter = ({ VolunteerModel }) => {
    const volunteerRouter = Router();

    const volunteerController = new VolunteerController({ VolunteerModel });

    volunteerRouter.get('/', volunteerController.getAll);
    volunteerRouter.get('/:id', volunteerController.getById);
    volunteerRouter.post('/', volunteerController.create);
    volunteerRouter.put('/:id', volunteerController.update);
    volunteerRouter.delete('/:id', volunteerController.delete);
    
    return volunteerRouter;
}