import { Router } from 'express';
import { authenticationRouter } from './authentication';

export const apiRouter = () => {
    
    const router = Router();

    router
        .use('/auth', authenticationRouter);
    
    return router;
}