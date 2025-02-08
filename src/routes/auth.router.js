import { Router } from 'express';
import { AuthController } from '../controllers/AuthController.js';
import { authenticateTokenFromCookie } from '../middlewares/authenticateTokenFromCookie.middleware.js';

export const createAuthRouter = () => {
    const authRouter = Router();

    const authController = new AuthController();

    authRouter.post('/google', authController.loginWithGoogle);
    authRouter.get(
        '/me',
        authenticateTokenFromCookie,
        authController.authenticate
    );
    authRouter.post('/logout', authController.logout);

    return authRouter;
};
