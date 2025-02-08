import { Router } from 'express';
import { AuthController } from '../controllers/AuthController.js';
import { authenticateTokenFromCookie } from '../middlewares/authenticateTokenFromCookie.middleware.js';

export const createAuthRouter = ({ AuthModel }) => {
    const authRouter = Router();

    const authController = new AuthController({ AuthModel });

    authRouter.post('/google', authController.loginWithGoogle);
    authRouter.get(
        '/me',
        authenticateTokenFromCookie,
        authController.authenticate
    );
    authRouter.post('/logout', authController.logout);

    return authRouter;
};
