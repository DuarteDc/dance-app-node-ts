import { SigninUser } from '../application/authentication/signin-user';
import { SigninController } from './controllers/signin-controller';
import { UserRepository } from './repositories/user-repository';


const userRepository = new UserRepository();
export const signinUser = new SigninUser(userRepository);
export const signinController = new SigninController(signinUser);