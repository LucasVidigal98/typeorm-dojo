import { User } from '../entities/User';

interface IUserRepository {
  create(name: string, age: number): Promise<User>;

  list(): Promise<User[]>;
}

export { IUserRepository };