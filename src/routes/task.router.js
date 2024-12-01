import { Router } from "express";
import { TaskController } from "../controllers/TaskController.js";

export const createTaskRouter = ({ TaskModel }) => {
    const taskRouter = Router();

    const taskController = new TaskController({ TaskModel });

    taskRouter.get('/', taskController.getAll);
    taskRouter.get('/:id', taskController.getById);
    taskRouter.post('/', taskController.create);
    taskRouter.put('/:id', taskController.update);
    taskRouter.delete('/:id', taskController.delete);
    
    return taskRouter;
}