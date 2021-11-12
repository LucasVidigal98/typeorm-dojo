import { User } from '../entities/User';

interface IUserRepository {
  create(name: string, age: number): User;

  list(): User[];
}

export { IUserRepository };