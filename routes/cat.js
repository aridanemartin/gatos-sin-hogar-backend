import { Router } from "express";
import { CatController } from "../controllers/CatController.js";

export const createCatRouter = ({ catModel }) => {
    const catRouter = Router();

    const catController = new CatController({ catModel });

    catRouter.get('/', catController.getAll);
    
    return catRouter;
}