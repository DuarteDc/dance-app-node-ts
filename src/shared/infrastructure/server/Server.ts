import express, { Router } from 'express';

export class Server {

    private readonly express: express.Application;
    private static _instance: Server;

    //TODO set main router 
    // private readonly router: Router

    private constructor() {
        this.express = express();
        this.express.use();
    }

    static getInstance() {
        if (this._instance) return this._instance;

        this._instance = new Server();
        return this._instance;
    }

    public startServer = async (): Promise<void> => {
        return await new Promise(resolve => {
            this.express.listen(8000, () => {
                console.log(`🚀 Application DanceApp running on PORT 8000`);
                resolve()
            });
        });
    }

}
