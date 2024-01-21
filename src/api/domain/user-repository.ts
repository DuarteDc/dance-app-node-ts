import { User } from './user';

export interface UserRepository {
    getByEmail(email: string): Promise<User | null>
}