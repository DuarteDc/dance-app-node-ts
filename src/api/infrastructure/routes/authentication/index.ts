import { Router } from 'express';
import { signinController } from '../../dependencies';

const authenticationRouter = Router();

authenticationRouter.get('/signin', signinController.run.bind(signinController));

export { authenticationRouter };