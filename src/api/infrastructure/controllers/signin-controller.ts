import { Request, Response } from 'express';
import { SigninUser } from '../../application/authentication/signin-user';

export class SigninController {

    constructor(private readonly signinUser: SigninUser) { }

    async run(request: Request, response: Response) {

        const user = await this.signinUser.run("duartedc17@gmail.com");

        response.status(200).send(user)
    
    }

}