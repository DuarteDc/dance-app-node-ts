import crypto from 'crypto';
import { User } from '../../domain/user';
import { UserRepository as userRepository } from '../../domain/user-repository';

const users: Array<User> = [
    {
        id: crypto.randomUUID(),
        name: "Eduardo Duarte",
        email: "duartedc17@gmail.com",
    },
    {
        id: crypto.randomUUID(),
        name: "Susana de Jesus",
        email: "sus11@gmail.com",
    }
]


export class UserRepository implements userRepository {

    async getByEmail(email: string): Promise<User | null> {
        const user = await users.find((user) => user.email === email);

        return user ? user : null;

    }

}