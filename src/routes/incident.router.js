import { Router } from 'express';
import { IncidentController } from '../controllers/IncidentController.js';
import { paginationMiddleware } from '../middlewares/pagination.middleware.js';

export const createIncidentRouter = ({ IncidentModel }) => {
    const incidentRouter = Router();

    const incidentController = new IncidentController({ IncidentModel });

    incidentRouter.get('/', paginationMiddleware, incidentController.getAll);
    incidentRouter.get('/:id', incidentController.getById);
    incidentRouter.post('/', incidentController.create);
    incidentRouter.put('/:id', incidentController.update);
    incidentRouter.delete('/:id', incidentController.delete);

    return incidentRouter;
};
