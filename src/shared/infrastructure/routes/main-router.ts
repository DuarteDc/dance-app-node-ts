import { Router} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';

export const mainRouter = (mainRouter: Router): Router => {

    const router = Router();

    router
        .use(cors())
        .use(bodyParser.urlencoded({
            extended: false,
        }))
        .use(compression())

    
    router.use('/api', mainRouter);

    return router;

}