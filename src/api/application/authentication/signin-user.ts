import { UserRepository } from '../../domain/user-repository';

export class SigninUser {

    constructor (private readonly userRepository: UserRepository) { }
            
    async run(email: string) {
        
        const user = await this.userRepository.getByEmail(email);
        if(!user) throw new Error('User not found');

        return user;
    }

}