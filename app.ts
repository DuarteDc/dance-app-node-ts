import { Server } from './src/shared/infrastructure/server/Server';
import { mainRouter } from './src/shared/infrastructure/routes/main-router';
import { apiRouter } from './src/api/infrastructure/routes/apiRouter';

const routes = mainRouter(apiRouter());
const server = Server.getInstance(routes);

server.startServer()
    .then(() => {
        console.log('Environment')
    })
    .catch((error) => {
        console.log(error);
        process.exit()
    })