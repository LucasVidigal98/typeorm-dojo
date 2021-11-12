import { User } from '../entities/User';
import { IUserRepository } from './IUserRepository';

class UserRepository implements IUserRepository {

  private users: User[] = [];
  private static instance: UserRepository;

  public static getInstance(): UserRepository {
    if(!this.instance) {
      this.instance = new UserRepository();
    }

    return this.instance;
  }

  create(name: string, age: number): User {
    const user = new User();

    Object.assign(user, {
      name, 
      age
    });

    this.users.push(user);

    return user;
  }
  list(): User[] {
    return this.users;
  }
 
}

export { UserRepository };